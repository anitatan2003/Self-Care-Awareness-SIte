/* .js files add interaction to your website */

var factList = [
  "1 in 5 adults experience a mental illness each year.",/*0*/
  "High School students with depression are more than twice as likely to drop out.",/*1*/
  "Suicude is the 2nd leading cause of death for people between the ages of 10-34.",/*2*/
  "90% of people who comit suicide show symptoms of a mental health conditon."/*3*/
  ];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}
function displayFact() {
  fact.innerHTML = factList [count];
  count++; /*adds 1, also means count + 1 */
  if (count == factList.length) /*Works with array & returns back number of indexes */ {
    count = 0;
  }
}