const { Router } = require("express");
//const auth = require("../auth/middleware");
const Space = require("../models").space;
const Story = require("../models").story;

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




module.exports = router

