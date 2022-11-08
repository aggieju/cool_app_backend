"use strict";
const Story = require("../models").story;
const Space = require("../models").space;

module.exports = {
  up: async (queryInterface, Sequelize) => {

    /* const space1 = await Space.findOne({
       where: { title: "My time at Codaisseur" },
     });
     const space2 = await Space.findOne({
       where: { title: "I am a dummy" },
     });*/

    await Story.bulkCreate([
      {
        name: "Oh my gosh",
        imageUrl: "https://source.unsplash.com/1600x900/?turtles",
        content:
          "But I must explain to you how all this ",
        spaceId: 1,

      },
      {
        name: "I like turtles",
        imageUrl: "https://source.unsplash.com/1600x900/?turtles",
        content:
          "Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Heroes in a half-shell \n Turtle power! \n They're the world's most fearsome fighting team (We're really hip!) \n They're heroes in a half-shell and they're green (Hey - get a grip!) \n When the evil Shredder attacks \n These Turtle boys don't cut him no slack! \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Splinter taught them to be ninja teens (He's a radical rat!) \n Leonardo leads, Donatello does machines (That's a fact, Jack!) \n Raphael is cool but crude (Gimme a break!) \n Michaelangelo is a party dude (Party!) \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Heroes in a half shell \n Turtle power!",
        spaceId: 1,
      },
      {
        name: "Do you know what it feels like for a Dummy?",
        imageUrl: "https://source.unsplash.com/1600x900/?dummy",
        content:
          "Somebody once told me the world is gonna roll me \n I ain't the sharpest tool in the shed \n She was looking kind of dumb with her finger and her thumb \n In the shape of an 'L' on her forehead \n Well the years start coming and they don't stop coming \n Fed to the rules and I hit the ground running \n Didn't make sense not to live for fun \n Your brain gets smart but your head gets dumb \n So much to do, so much to see \n So what's wrong with taking the back streets? \n You'll never know if you don't go \n You'll never shine if you don't glow \n Hey now, you're an all-star, get your game on, go play \n Hey now, you're a rock star, get the show on, get paid \n And all that glitters is gold \n Only shooting stars break the mold \n",
        spaceId: 2,
      },
      {
        name: "Oh my gosh",
        imageUrl: "https://source.unsplash.com/1600x900/?turtles",
        content:
          "But I must explain to you how all this ",
        spaceId: 1,

      },
      {
        name: "I like turtles",
        imageUrl: "https://source.unsplash.com/1600x900/?turtles",
        content:
          "Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Heroes in a half-shell \n Turtle power! \n They're the world's most fearsome fighting team (We're really hip!) \n They're heroes in a half-shell and they're green (Hey - get a grip!) \n When the evil Shredder attacks \n These Turtle boys don't cut him no slack! \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Splinter taught them to be ninja teens (He's a radical rat!) \n Leonardo leads, Donatello does machines (That's a fact, Jack!) \n Raphael is cool but crude (Gimme a break!) \n Michaelangelo is a party dude (Party!) \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Teenage Mutant Ninja Turtles \n Heroes in a half shell \n Turtle power!",
        spaceId: 1,
      },
      {
        name: "Do you know what it feels like for a Dummy?",
        imageUrl: "https://source.unsplash.com/1600x900/?dummy",
        content:
          "Somebody once told me the world is gonna roll me \n I ain't the sharpest tool in the shed \n She was looking kind of dumb with her finger and her thumb \n In the shape of an 'L' on her forehead \n Well the years start coming and they don't stop coming \n Fed to the rules and I hit the ground running \n Didn't make sense not to live for fun \n Your brain gets smart but your head gets dumb \n So much to do, so much to see \n So what's wrong with taking the back streets? \n You'll never know if you don't go \n You'll never shine if you don't glow \n Hey now, you're an all-star, get your game on, go play \n Hey now, you're a rock star, get the show on, get paid \n And all that glitters is gold \n Only shooting stars break the mold \n",
        spaceId: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};