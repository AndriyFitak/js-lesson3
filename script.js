/*let arr = []
let n = 10


for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random()*(100-50))

}

console.log(arr)

let minelement = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minelement){
        minelement = arr[i]
    }
}
console.log(minelement)*/
/*for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}*/
/*let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    //
}
console.log (sum)*/

let colors = ["red" , "blue", "green", "yellow"]
/*let searchColor = 'red'
let searchStatus = false 

for(let color of colors){
    if(color == searchColor){
        searchStatus = true
    }
}
if(searchStatus == true){
    console.log('We  found color')  
}else {
    console.log("We not found color")
}*/
if(colors.indexOf("blue") != -1){
  console.log("We found color")
}else{
    console.log("We not found color")

}