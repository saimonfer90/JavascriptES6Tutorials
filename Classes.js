const newPoint = (x,y,z) => ({x,y,z})

var p1 = newPoint(1,2,3)
var p2 = newPoint(4,5,6)

console.log(p1, p2)

/*function constructor cannot defined like lambda, this throws an error when we call the function with the 'new' keyword*/
var newPointConstrWrong = (x, y, z) =>
{
    this.x = x;
    this.y = y;
    this.z = z;
}

/*following commented line get error*/
//var p3 = new newPointConstrWrong(1,2,3)

function newPointConstr (x, y, z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

var p3 = new newPointConstr(1,2,3)