function cookingStatus(timer) {
	if (timer == 0) {
		return "Lasagna is done.";
	} else if (typeof(timer) == "number" && timer > 0) {
		return "Not done, please wait."	
	}	else {
		return "You forgot to set the timer.";
	}
}

// console.log(cookingStatus(12));
// => 'Not done, please wait.'

// console.log(cookingStatus(0));
// => 'You forgot to set the timer.'

function preparationTime(layer, timer = 2) {
	return layer.length * timer;	
}

const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
// console.log(preparationTime(layers, 3));
// => 18

// console.log(preparationTime(layers));
// => 12

function quantities(params) {
	const layers = {
		noodles: 0,
		sauce: 0
	};
	params.forEach( (elem) => {if (elem == "noodles") {
		layers["noodles"] += 50	
	} else if (elem == "sauce") {
		layers['sauce'] += 0.2
	}});
	
	return layers;
}
// console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']));
// => { noodles: 100, sauce: 0.4 }

function addSecretIngredient(friendsList, myList) {
	myList.push(friendsList[friendsList.length -1])

}


const friendsList = ['sauce', 'noodles', 'ham', 'marjoram'];
const myList = ['sauce', 'noodles', 'meat', 'tomatoes'];

// console.log(addSecretIngredient(friendsList, myList));
// => undefined

// console.log(myList);
// => [ 'sauce', 'noodles', 'meat', 'tomatoes', 'marjoram' ]

function scaleRecipe(recipe, servings) {
	const recipeAdapt = {};
	for (const prop in recipe) {
		recipeAdapt[prop] = recipe[prop] * (servings/2);
	}
	return recipeAdapt;

}

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

console.log(scaleRecipe(recipe, 4));
// =>
// {
//   noodles: 400,
//   sauce: 1,
//   mozzarella: 2,
//   meat: 200,
// };

console.log(recipe);
// =>
// {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// };