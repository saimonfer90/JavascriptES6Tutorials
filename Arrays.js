let arr = [0, 1, 2, 3]

/*splice allows to delete element from array from startPosition for n character)*/
/*the function returns an array with the deleted elements, it is destructive, that is, it deletes from the original array*/
console.log("-------------0-------------")
console.log("1° elementi tolti: ", arr.splice(0, 2))
console.log("2° elemento rimasti (array originale modificato): ", arr)

let newarr = ['DarkSalmon', 'BlanchedAlmond']
arr = ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick'];

/*all parameters over the second one are replaced in the delete characters' spaces*/
/*notare che con spliace è possibile rimpiazzare gli elementi eliminati con dei nuovi*/
let dropped = arr.splice(0, 2, ...newarr, true)

console.log("-------------1-------------")
console.log("2° elementi tolti: ", dropped)
console.log("3° elementi rimasti piu i rimpiazzati: ", arr)

  
/*slice, defferently from splice, get as parameters the startPosition and the endPosition (that is excluded)*/
/*slice returns indicated elements without modify original array*/
console.log("-------------2------------")
arr  = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];
console.log("4° elementi selezionati (non tolti dall array orig): ", arr.slice(2,4));
console.log("5°array originale rimasto invariato:", arr);

/*funzioni reduce, map etc..*/
console.log("-------------3-------------")

var array = [1,2,3,4,5]

/*reduce passes a pair, current element and next element of the sequence to the passed lambda, resulting element*/
/*will be the current of the next iteration*/
var result = array.reduce((curr,next) => (curr > next) ? curr : next);
console.log(result)

/*LINQ DIFF: */
/*find(func) -> firstOrDefault(func)*/
/*map(func) -> select(func)*/
/*filter(func) -> where(func)*/


/*similar to reduce which takes two sequential elements we have sort*/
/*instead of passing the result of the function to the next current, swap*/
console.log("-------------4-------------")

array = [5,4,3,2,1]
console.log(array.sort((curr, next) => curr < next))
