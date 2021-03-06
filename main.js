// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {

    let avg = (0);
    let sum = (0);
    for (i = 0; i< data.length; i++){
      sum += (data[i].price);
    }
    avg = sum / (data.length)
    return avg.toFixed(2)
}

console.log(question1())


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:

  let newArray = [];
  for (i= 0; i <data.length; i++) {
  if(data[i].price >= 14 && data[i].price <= 18){
    newArray.push(data[i]);
  }
}
return newArray
}
  console.log(question2())






// // 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
let GBP = "";
for (i= 0; i <data.length; i++){
if(data[i].currency_code === "GBP"){
  GBP += data[i].title + " " + data[i].price;
}
}
console.log(GBP + " " +"pounds")
}
// }
//
// // 4: Display a list of all items who are made of wood.
function question4 () {

  let madeOf = data.reduce(function(a,b){
    if (b.materials.indexOf("wood")!== -1){
      return a + 1
  }else {
    return a
    }
} , 0)
console.log(madeOf)
}

//
// // 5: Which items are made of eight or more materials?
// //    Display the name, number of items and the items it is made of.
function question5 () {

let manyMats = ""
for (let i = 0; i < data.length; i++){
if (data[i].materials.length > 7) {
manyMats = manyMats + data[i].title + "\n"
  }
  }
console.log(manyMats)
 }

//
// // 6: How many items were made by their sellers?
// // Answer:
function question6 () {
let iDid = 0
   for (let i= 0; i <data.length; i++){
   if(data[i].who_made === "i_did"){
     iDid++
  }
}
console.log(iDid  + " items were made by sellers");
}
