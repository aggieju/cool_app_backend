const { Router } = require("express");
//const auth = require("../auth/middleware");
const Space = require("../models").space;
const Story = require("../models").story;
const auth = require("../auth/middleware");

const router = new Router();

//http :4000/
router.get("/", async (req, res) => {
    const spaces = await Space.findAll();
    res.send(spaces);
});

//http :4000/1/
//, order: createdAt 
router.get("/:spaceId", async (req, res) => {

    const spaceId = parseInt(req.params.spaceId);
    const space = await Space.findByPk(spaceId,
        {
            include: [{ model: Story }],
            order: [['createdAt', 'DESC']],
        },

    );
    if (!space) {
        res.status(404).send("Space not found");
    } else {
        res.send(space);
    }
});


router.delete("/space/:storyId", async (req, res, next) => {
    const storyId = req.params.storyId

    console.log('this is the id on the backend', storyId)

    try {
        const toDelete = await Story.findByPk(storyId);
        if (!toDelete) {
            res.status(404).send("Story not found");
        } else {
            await toDelete.destroy();

            res.send({ message: `Story with ${storyId} was deleted` });
        }
    } catch (e) {
        next(e);
    }
});


//post a story
//http :4000/1/stories name=story1 imageUrl="" content="this is a cool story"
// POST a new story to space with corresponding `id`
router.post("/stories", auth, async (req, res, next) => {
    try {
        const { name, content, imageUrl, spaceId } = req.body;
        const space = await Space.findByPk(spaceId)
        if (space === null) {
            return res.status(404).send({ message: "this space does not exist" })
        }
        if (!name || name === " ") {
            res.status(400).send("Must provide name");
        } else {
            // console.log("this is my req body", req.body);
            const newStory = await Story.create({
                name,
                content,
                imageUrl,
                spaceId,
            });
            res.json(newStory);
            // res.status(200).send("successfully created");
        }
    } catch (e) {
        console.log(e.message);
    }
});


/*router.post("/:id/stories", auth, async (req, res) => {
    const space = await Space.findByPk(req.params.id);
    console.log('this is the id on the backend', req.params.id)
    console.log(space);

    if (space === null) {
        return res.status(404).send({ message: "This space does not exist" });
    }

    if (!space.userId === req.user.id) {
        return res
            .status(403)
            .send({ message: "You are not authorized to update this space" });
    }

    const { name, imageUrl, content } = req.body;

    if (!name) {
        return res.status(400).send({ message: "A story must have a name" });
    }

    const story = await Story.create({
        name,
        imageUrl,
        content,
        spaceId: space.id,
    });

    return res.status(201).send({ message: "Story created", story });
});*/

// PATCH - update space details
router.patch("/:id", auth, async (req, res) => {
    const space = await Space.findByPk(req.params.id);
    if (!space.userId === req.user.id) {
        return res
            .status(403)
            .send({ message: "You are not authorized to update this space" });
    }

    const { title, description, backgroundColor, color } = req.body;

    await space.update({ title, description, backgroundColor, color });

    return res.status(200).send({ space });
});

module.exports = router

