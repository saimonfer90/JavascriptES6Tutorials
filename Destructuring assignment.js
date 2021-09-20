const user = { name: 'John Doe', age: 34 };

/*defines and assigns the variables name and age, because the variable names correspond to the property names are initialized*/
var { name, age } = user;

/*here surname is not a property, it reamins undefined*/
var { name, age, surname } = user;
console.log("1°: " + surname);

/*i can patch like this*/
var { name, age, surname ='Bianchi'} = user;
console.log("2°: " + surname);

/*name and age are object property, userName and userAge the new properties*/
var {name: userName, age: userAge} = user;

/*if i wanna get a non-existent property, surname will be undefined*/
var {name: userName, age: userAge, surname: surname } = user;
console.log("3°: " +  surname);

/*note: call a non-existent property on object return undefined*/
/*note: call a non-existent variable throw an exception*/
/*behavior on calling obj.NotExistent != calling NotExistent variable*/

/*DA can be done with annidated object too*/
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };

const {today: {low: lowToday, high:  highToday}} = LOCAL_FORECAST;
 console.log("4°: LowToday=" + lowToday + ", highToday=" + highToday)

  /*DA can be done also with array*/
var  [a, b,,, c] = [1, 2, 3, 4, 5, 6];

/*results: 1, 2, 5 (note: , is equals to: +"  " in string concatenation*/
console.log("5°: " + a, b, c);  

/*this is NOT array destructuring: this assign array to e and leaves d undefined*/
var d,e = [1,2]

console.log("6°: " + d,e)

/*array DA can be used to swap two variables values */
var d = 1;
var e = 2;

console.log("7°: " + d +", " + e);

[e,d] = [d,e]

console.log("8°: " + d +", " + e)
