const newPoint = (x, y, z) => ({
    x,
    y,
    z
})
var p1 = newPoint(1, 2, 3)

/*start with Obejct: this func creates an empty object with __proto__ set with the object passed as first parameter*/
/*create object without prototype, no __proto__ set*/
var obj = Object.create(null)
console.log("1°: ", obj, obj.__proto__)

/*create an empty object with empty prototype*/
/*in this case, the empty prototype will have standard prototype inside it (Object.prototype)*/
var obj = Object.create({})
console.log("2°: ", obj, obj.__proto__, obj.__proto__.__proto__)

/*above method doesn't show anything because only properties are printed, and obj.__proto__.__proto__*/
/*has onlny functions, for this following is fine*/
console.log("3°: ", obj, obj.__proto__, obj.__proto__.__proto__.toString)

/*this creates an empty object setting the passed object as __proto__*/
var obj = Object.create(p1)
console.log("4°: ", obj, obj.__proto__)

/*this creates objects with standard object prototype*/
var obj = {
    a: 1,
    b: 2,
    c: 3
}
var obj2 = {
    a: 1,
    b: 2,
    c: 3
}

/*it is possibile to add and remove object from prototype of object*/
Object.getPrototypeOf(obj).newField = "new field here!";

/*prototype is common for both objects obj, obj2*/
console.log("5°: ", obj, obj.__proto__.newField)
console.log("6°: ", obj2, obj2.__proto__.newField)
