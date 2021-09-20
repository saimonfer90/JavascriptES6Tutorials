var point = {
    x:1,
    y:2,
    z:3
}

/*this is the property shorthand from variables to object*/
var duplicate = (x,y,z) => ({x: x ,y: y, z: z})
console.log("1°: ", duplicate(point.x, point.y, point.z))

/*this is standard mode to passing from object to new object*/
console.log("2°: ", duplicate(point.x, point.y, point.z))

/*or*/
var duplicate = (point) => ({x : point.x, y : point.y, z : point.z})
console.log("3°: ", duplicate(point))

/*also in  destructuring assignment*/
var duplicate = ({x,y,z}) => ({x: x ,y : y, z: z})
console.log("4°: ", duplicate(point));

/*shorthand property allow to omit fields value  in declaration statement*/
var duplicate = ({x,y,z}) => ({x, y, z})
console.log("5°: ", duplicate(point));

/*also partial*/
var duplicate = ({x,y,z}) => ({x, y, z : z})
console.log("6°: ", duplicate(point));


