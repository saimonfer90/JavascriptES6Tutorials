const X = (...args) =>
 {
     console.log("args: ", args)
     console.log("single elements: ")

     args.forEach(element => {
          console.log(element);
     });
}

const Y = (args) =>
 {
     console.log("args: ", args)
     console.log("single elements: ")

     args.forEach(element => {
          console.log(element);
     });
}

array = [1,2,3]

console.log("-------------0-------------")

/*here args inside X is equal to: [[1,2,3]]*/
console.log("-------------1-------------")

/*here args inside X is equal to: [[1,2,3],"2",3]*/
X(array, "2", 3)
console.log("-------------2-------------")

/*here args inside Y is equal to: [1,2,3] */
console.log("-------------3-------------")

/*here args inside X is equal to: [1,2,3,"a","b"]"*/
X(...array, "a", "b")

/*summary*/
/*...args in locals parameters saYs everY arguments on calling will be a element of args array*/
/*...args in actuals parameters saYs everY element of args array was spreaded into a themeself elements' sequence: [1,2,3] is compiled as 1,2,3 into brakets*/ 


