'use strict';


//global arrays
var productArr = ['img/bag.jpg', 'img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg', 'img/wine-glass.jpg'];

Product.allProducts = [];

var lastShown = [];

var names = [];

var votesArr = [];

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

//remove pictures
function removeProducts() {
  productOne.innerHTML = '';
  productTwo.innerHTML = '';
  productThree.innerHTML = '';
}

//random product function
function ranNum() {
  return Math.floor(Math.random() * ((productArr.length-1) + 1));
}


//udpates lastshown arrays
function updateArr() {
  lastShown = [];

  lastShown.push(randomProductOne);
  lastShown.push(randomProductTwo);
  lastShown.push(randomProductThree);
}

//test for duplicates

function choiceTest() {
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
}

//#############################################
function renderProducts() {
  productOne.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductOne].filePath + '" name="first_img">';

  productTwo.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductTwo].filePath + '" name="second_img">';

  productThree.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductThree].filePath + '" name="third_img">';

}
//create the chart
function renderChart() {

  for(var i = 0; i < Product.allProducts.length; i++){
    names.push(Product.allProducts[i].name);
    votesArr.push(Product.allProducts[i].totalVotes);
  }


var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [{
      label: 'Votes',
      data: votesArr,
      backgroundColor: ['rgba(#cf44aa, 0.5)','rgba(28, 231, 237, 0.5)','rgba(#e3ee0c, 0.5)','rgba(#ff0000, 0.51)','rgba(0, 34, 255, 0.53)','rgba(#9e00ff, 0.5)','rgba(#ff9100, 0.49)','rgba(#ff0091, 0.5)','rgba(#96ff00, 0.51)','rgba(222, 44, 44, 0.51)','rgba(41, 57, 166, 0.52)','rgba(53, 207, 110, 0.55)','rgba(114, 57, 236, 0.54)','rgba(86, 189, 171, 0.54)','rgba(255, 230, 4, 0.55)','rgba(192, 28, 241, 0.48)','rgba(69, 195, 10, 0.57)','rgba(39, 42, 150, 0.52)','rgba(153, 38, 223, 0.53)','rgba(96, 190, 3, 0.46)']
    }]
  },
  options: {}


})

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

  if(voteCounter < 25) {

    Product.allProducts[randomProductOne].totalVotes++;
    voteCounter++;
    pass = false;

    choiceTest();
    renderProducts();
    updateArr();

    if(voteCounter >= 25) {
      renderChart();
      removeProducts();
    } else {
      console.log('keep truckin');
    }
  } else {
    console.log('voting complete');
  }

}







function mainSurveyTwo() {

  event.preventDefault();

  if(voteCounter < 25) {

    Product.allProducts[randomProductTwo].totalVotes++;
    voteCounter++;
    pass = false;

    choiceTest();
    renderProducts();
    updateArr();

    if(voteCounter >= 25) {
      renderChart();
      removeProducts();
    } else {
      console.log('keep truckin');
    }
  } else {
    console.log('voting complete');
  }

}



function mainSurveyThree() {

  event.preventDefault();

  if(voteCounter < 25) {

    Product.allProducts[randomProductThree].totalVotes++;
    voteCounter++;
    pass = false;

    choiceTest();
    renderProducts();
    updateArr();

    if(voteCounter >= 25) {
      renderChart();
      removeProducts();
    } else {
      console.log('keep truckin');
    }

  } else {
    console.log('voting complete');
  }
}





createProducts();
survey_start.addEventListener('submit', startSurvey);
productOne.addEventListener('click', mainSurveyOne);
productTwo.addEventListener('click', mainSurveyTwo);
productThree.addEventListener('click', mainSurveyThree);
