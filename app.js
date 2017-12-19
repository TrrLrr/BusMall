'use strict';


//global arrays
var productArr = ['img/bag.jpg', 'img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg'];

Product.allProducts = [];

var lastShown = [];

//product variables
var productOne = document.getElementById('product_one');

var productTwo = document.getElementById('product_two');

var productThree = document.getElementById('product_three');

//random product variables
var randomProductOne = ranNum();

var randomProductTwo = ranNum();

var randomProductThree = ranNum();

//vote counter
var voteCounter = 0;

//constructor function
function Product(filePath) {
  this.filePath = filePath;
  this.path = filePath.split('/')[1];
  this.name = this.path.split('.')[0];
  this.totalVotes = 0;
  this.beenShown = false;
  Product.allProducts.push(this);
}


//creates instances
function createProducts() {
  for(var i = 0; i < productArr.length; i++) {
    new Product(productArr[i]);
  }
}

//random product function
function ranNum() {
  return Math.floor(Math.random() * ((productArr.length-1) + 1));
}

//survey start
function startSurvey() {


  event.preventDefault();


  productOne.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductOne].filePath + '">';

  while(randomProductTwo === randomProductOne) {
    randomProductTwo = ranNum();
  }

  productTwo.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductTwo].filePath + '">';

  while(randomProductThree === randomProductTwo || randomProductThree === randomProductOne) {
    randomProductThree = ranNum();
  }

  productThree.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductThree].filePath + '">';

  lastShown.push(randomProductOne);
  lastShown.push(randomProductTwo);
  lastShown.push(randomProductThree);


}

function mainSurvey() {

  event.preventDefault();



}

createProducts();
survey_start.addEventListener('submit', startSurvey);
