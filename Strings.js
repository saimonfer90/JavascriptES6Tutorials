const str = " Hi, "

const obj = {x: "Hello", y: "World"}

/*print the object's parameters*/
console.log(obj)

/*print 2 arguments separated by space, the first as string, second as object like above*/
console.log(str, obj)

/*+ operator over str and object, "consoloe.log"  the object, the object standard casting to string is like [object Object] /*/
console.log(str + obj)

/*you can do interpolated strings with `` (altGr + ? )*/
console.log(`${str}${obj}`)

