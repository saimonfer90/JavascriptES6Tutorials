/*with promise I get a callable object at the end of the execution of an asynchronous function*/

console.log("prima frase scritta")

let obj = Promise(() => {
    /*setTimeout is asynchronous interning, it launches a thread that counts n milliseoonds, after which it executes the callback */
    setTimeout(() => {console.log("ultima frase scritta: per ascincronicità")}, 2000)
    console.log("seconda frase scritta: quella sopra è delegata a un altro thread che la scriverà passati 3s")
})

console.log("-------------2-------------")

let f1 = () => {
    setTimeout(() => {console.log("A")}, 2000)
    console.log("B")
}

let f2 = () => {
    setTimeout(() => {console.log("C")}, 2000)
    console.log("D")
}

Promise.all(f1, f2).catch(err => console.log('error: ' + err))
