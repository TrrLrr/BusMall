'use strict';


//global arrays
var productArr = ['img/bag.jpg', 'img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg', 'img/wine-glass.jpg'];

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

var pass = false;

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


  productOne.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductOne].filePath + '" name="first_img">';

  while(randomProductTwo === randomProductOne) {
    randomProductTwo = ranNum();
  }

  productTwo.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductTwo].filePath + '" name="second_img">';

  while(randomProductThree === randomProductTwo || randomProductThree === randomProductOne) {
    randomProductThree = ranNum();
  }

  productThree.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductThree].filePath + '" name="third_img">';

  lastShown.push(randomProductOne);
  lastShown.push(randomProductTwo);
  lastShown.push(randomProductThree);


}

function mainSurveyOne() {

  event.preventDefault();



  Product.allProducts[randomProductOne].totalVotes++;
  voteCounter++;
  pass = false;

  while(pass === false) {
    randomProductOne = ranNum();
    randomProductTwo = ranNum();
    randomProductThree = ranNum();

    while(randomProductTwo === randomProductOne) {
      randomProductTwo = ranNum();
    }

    while(randomProductThree === randomProductTwo || randomProductThree === randomProductOne) {
      randomProductThree = ranNum();
    }

    for(var i = 0; i < lastShown.length; i++) {
      if(randomProductOne === lastShown[i]) {
        pass = false;
        console.log(pass);
        break;
      } else if (randomProductTwo === lastShown[i]) {
        pass = false;
        console.log(pass);
        break;
      } else if (randomProductThree === lastShown[i]) {
        pass = false;
        console.log(pass);
        break;
      } else {
        pass = true;
      }
    }

  }
  productOne.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductOne].filePath + '" name="first_img">';

  productTwo.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductTwo].filePath + '" name="second_img">';

  productThree.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductThree].filePath + '" name="third_img">';

  lastShown = [];

  lastShown.push(randomProductOne);
  lastShown.push(randomProductTwo);
  lastShown.push(randomProductThree);




}

function mainSurveyTwo() {

  event.preventDefault();

  Product.allProducts[randomProductTwo].totalVotes++;
  voteCounter++;
  pass = false;


  while(pass === false) {
    randomProductOne = ranNum();
    randomProductTwo = ranNum();
    randomProductThree = ranNum();

    while(randomProductTwo === randomProductOne) {
      randomProductTwo = ranNum();
    }

    while(randomProductThree === randomProductTwo || randomProductThree === randomProductOne) {
      randomProductThree = ranNum();
    }

    for(var i = 0; i < lastShown.length; i++) {
      if(randomProductOne === lastShown[i]) {
        pass = false;
        break;
        console.log(pass);
      } else if (randomProductTwo === lastShown[i]) {
        pass = false;
        break;
        console.log(pass);
      } else if (randomProductThree === lastShown[i]) {
        pass = false;
        console.log(pass);
        break;
      } else {
        pass = true;
      }
    }

  }
  productOne.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductOne].filePath + '" name="first_img">';

  productTwo.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductTwo].filePath + '" name="second_img">';

  productThree.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductThree].filePath + '" name="third_img">';

  lastShown = [];

  lastShown.push(randomProductOne);
  lastShown.push(randomProductTwo);
  lastShown.push(randomProductThree);



}

function mainSurveyThree() {

  event.preventDefault();

  Product.allProducts[randomProductThree].totalVotes++;
  voteCounter++;
  pass = false;


  while(pass === false) {
    randomProductOne = ranNum();
    randomProductTwo = ranNum();
    randomProductThree = ranNum();

    while(randomProductTwo === randomProductOne) {
      randomProductTwo = ranNum();
    }

    while(randomProductThree === randomProductTwo || randomProductThree === randomProductOne) {
      randomProductThree = ranNum();
    }

    for(var i = 0; i < lastShown.length; i++) {
      if(randomProductOne === lastShown[i]) {
        pass = false;
        console.log(pass);
        break;
      } else if (randomProductTwo === lastShown[i]) {
        pass = false;
        console.log(pass);
        break;
      } else if (randomProductThree === lastShown[i]) {
        pass = false;
        console.log(pass);
        break;

      } else {
        pass = true;
        console.log(pass);
      }
    }

  }
  productOne.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductOne].filePath + '" name="first_img">';

  productTwo.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductTwo].filePath + '" name="second_img">';

  productThree.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductThree].filePath + '" name="third_img">';

  lastShown = [];

  lastShown.push(randomProductOne);
  lastShown.push(randomProductTwo);
  lastShown.push(randomProductThree);



}



createProducts();
survey_start.addEventListener('submit', startSurvey);
productOne.addEventListener('click', mainSurveyOne);
productTwo.addEventListener('click', mainSurveyTwo);
productThree.addEventListener('click', mainSurveyThree);
