let arr = []
let n = Math.floor(Math.random()*(10))
for (let i = 0; i < n; i++) {
    arr[i]=Math.floor( Math.random()*(10))
}
console.log(arr)
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    
}
console.log(`Сума чисел ${sum}`)
console.log(`Всього чисел ${arr.length}`)

let minElement = arr[0]
for(let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i]
    }
}
console.log(`Найменше число ${minElement}`)

let maxElement = arr[0]
for(let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement)  {
        maxElement = arr[i]
    }
}

console.log(`Найбільше число ${maxElement}`)

const numbers = arr
const sums = numbers.reduce((acc, curr) => acc + curr);
const average = sums / numbers.length;
console.log (Math.floor(average));














/*let colors = ["Михайло", "Андрій", "Рома", "Мартін" , "Юра" ,"Галина","Софія"]
let search = prompt("Введіть своє Імя")
let searchStatus = false 

for ( let color of  colors){
    if( color == search){
        searchStatus = true
    }
}

if(searchStatus == true){
    console.log('Ми найшли ваше імя в базі')
} else{
    console.log('Ми не найшли ваше імя в базі')
}*/

