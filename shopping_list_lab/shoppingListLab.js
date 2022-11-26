let shoppingList = [
  [`broccoli`, 1],
  [`milk`, 1],
  [`apples`, 3],
];
console.log(shoppingList);
let someList = shoppingList;
console.log(someList.find(i => i === itemToAdd));

function addToList(someList, someItem) {
  // your code here
  // should add someItem to someList
  
  // if the someItem exists, increment the quantity by 1
  let itemToAdd = someItem;
  console.log(someList.find(i => i === itemToAdd));
  // if(!someList[someItem]) {
  //   console.log("hello, it's working");
  //   return (shoppingList[someItem, ])};
  // if // find the item in the list, change quantity value ++
  // else // push the item and quantity to the end of the list
}
addToList('peaches', 1);
console.log(shoppingList);
// addToList(`apples`, 1);
function removeFromList(someList, someItem) {
  // your code here
  // search someList for someItem and remove it
  // rearrange the rest of the items within the Array
  // so that there are no gaps within the Array

}

function updateQuantity(someList, someItem, newQuantity) {
  // your code here
  // search someList for someItem and
  // change the quantity to the newQuantity value
}
