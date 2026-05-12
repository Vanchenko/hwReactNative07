const mealDbInstructions = `Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.
Combine soy sauce, 1/2 cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.
Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.
Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through.
Remove from oven and shred chicken in the dish using two forks.
Meanwhile, steam or cook the vegetables according to package directions.
Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes.
Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!`;

const mealDbIngredients = [
  '3/4 cup soy sauce',
  '1/2 cup water',
  '1/4 cup brown sugar',
  '1/2 teaspoon ground ginger',
  '1/2 teaspoon minced garlic',
  '4 Tablespoons cornstarch',
  '2 chicken breasts',
  '1 (12 oz.) stir-fry vegetables',
  '3 cups brown rice',
];

export const RECIPE_DATA = [
    {
        id: "1",
        title: "Pea and Ricotta Omelets",
        author: "Kelly Mayer",
        description: "In a large bowl, mix together flour, baking powder, sugar, and salt.",
        image: require('../../assets/img_recipe1.png'),
        authorAvatar: require('../../assets/ava_kelly_mayer.png'),
        rating: 4.9,
        imageRating: 4.8,
        duration: "10 Min",
        difficulty: "Medium",
        instructions: mealDbInstructions,
        ingredients: mealDbIngredients,
    },
    {
        id: "2",
        title: "Frosted beef with potato",
        author: "Dave Robert",
        description: "In a large bowl, mix together flour, baking powder, sugar, and salt.",
        image: require('../../assets/img_recipe2.png'),
        authorAvatar: require('../../assets/ava_dave_robert.png'),
        rating: 4.9,
        imageRating: 5.8,
        duration: "35 Min",
        difficulty: "Hard",
        instructions: mealDbInstructions,
        ingredients: mealDbIngredients,
    },
    {
        id: "3",
        title: "Classic Victoria muesli",
        author: "Rick Dolynsky",
        description: "In a large bowl, mix together flour, baking powder, sugar, and salt.",
        image: require('../../assets/img_recipe3.png'),
        authorAvatar: require('../../assets/ava_rick_dolynsky.png'),
        rating: 3.9,
        imageRating: 4.8,
        duration: "15 Min",
        difficulty: "Easy",
        instructions: mealDbInstructions,
        ingredients: mealDbIngredients,
    },
    {
        id: "4",
        title: "Chocolate cake with buttercream frosting",
        author: "Kelly Mayer",
        description: "In a large bowl, mix together flour, baking powder, sugar, and salt.",
        image: require('../../assets/img_recipe4.png'),
        authorAvatar: require('../../assets/ava_kelly_mayer.png'),
        rating: 4.1,
        imageRating: 4.3,
        duration: "95 Min",
        difficulty: "Hard",
        instructions: mealDbInstructions,
        ingredients: mealDbIngredients,
    },
    {
        id: "5",
        title: "Frosted pinecone cake",
        author: "Kelly Mayer",
        description: "In a large bowl, mix together flour, baking powder, sugar, and salt.",
        image: require('../../assets/img_recipe1.png'),
        authorAvatar: require('../../assets/ava_kelly_mayer.png'),
        rating: 4.9,
        imageRating: 4.8,
        duration: "30 Min",
        difficulty: "Medium",
        instructions: mealDbInstructions,
        ingredients: mealDbIngredients,
    }
]
