// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {

    let avg = (0);
    let sum = (0);
    for (i = 0; i< (data.length); i++){
      sum += (data[i].price);
    }
    avg= sum / (data.length)
    return avg.toFixed(2)
}

console.log(question1())


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let range = 0;
  let newArray = []
  for (i= 0; i <=18; i++){
  range = i>= 14;
  newArray.push(range);
  return newArray;
  colsole.log(newArray)
  //
  //
  //
  // }
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:

  //Object 10 + Title
// for (i = 0; i< (data.length); i++)
//
//
//
//   if currency_code = GBP
//
//
//
//
//
//   return title and price
}


// 4: Display a list of all items who are made of wood.
function question4 () {
// for (i = 0; i< (data.length); i++)
//
//
//
// if materials = wood
// return object or title
}




// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
// let materials =0
// for (i = 0; i< (data.length); i++)
//
//
//
//  if materials >= 8
//
//  lotsOf.push(materials)
//
//  return "lotsof.length" and materials list???
//

}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {

  // for (i = 0; i< (data.length); i++)
  // // Answer:
  //
  // if who_made = i_did
  //  "iDid.push()"
  // return iDid.length
//}
