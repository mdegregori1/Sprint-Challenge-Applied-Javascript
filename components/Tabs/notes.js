const foods = ["apple", "banana", "orange", "peanut", "gummies"]
// add 'this is' in front of every word
// map = "mutate"
const newFoods = foods.map(function (string){
    console.log(string);
    return  `This is a ${string}`
    //has to return something in .map

})
console.log(foods);
console.log(newFoods);

// function newFunc(string){

// }
// const newFunc2 = string =>{

// }

const obj = {
    name: "john",
    age: "23",
    "favorite-drink": "pepsi"
}
console.log(obj.name);
console.log(obj["favorite-drink"]);