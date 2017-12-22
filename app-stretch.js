'use strict';


//global arrays
var productArr = ['img/bag.jpg', 'img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg', 'img/wine-glass.jpg'];

Product.allProducts = [];

var lastShown = [];

var names = [];

var votesArr = [];

var timesShownArr = [];

//product variables
var productOne = document.getElementById('product_one');

var productTwo = document.getElementById('product_two');

var productThree = document.getElementById('product_three');

var button = document.getElementById('button');

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

  this.timesShown = 0;
  Product.allProducts.push(this);
}

//saves completed survey to local storage
function saveComplete() {
  localStorage.completed = true;
  localStorage.names = names;
  localStorage.votes = votesArr;
}

//saves partial survey to local local
function savePartial() {
  localStorage.voteCount = voteCounter;

  votesArr = [];
  for(var i = 0; i < Product.allProducts.length; i++){
    votesArr.push(Product.allProducts[i].totalVotes);
  }

  localStorage.votes = votesArr;
  localStorage.lastShown = lastShown;
}

//load a partial survey
function loadPartial() {
  
  lastShown = localStorage.lastShown.split(',');
  votesArr = localStorage.votes.split(',');
  voteCounter = localStorage.voteCount;

  for(var i = 0; i < Product.allProducts.length; i++) {
    Product.allProducts[i].totalVotes = parseInt(votesArr[i]);
  }

  randomProductOne = lastShown[0];
  randomProductTwo = lastShown[1];
  randomProductThree = lastShown[2];
  renderProducts();
}



//gets data on load
function getData() {
  //names = localStorage.names.split(',');
  votesArr = localStorage.votes.split(',');
}

//checks for completion on load
function load() {
  if(localStorage.completed) {
    button.innerHTML = '';
    getData();
    renderChart();
  } else if(localStorage.votes) {
    loadPartial();
  }
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
  productOne.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductOne].filePath + '">';

  productTwo.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductTwo].filePath + '">';

  productThree.innerHTML = '<input type="image" src="' + Product.allProducts[randomProductThree].filePath + '">';

}
//create the chart
function renderChart() {

  for(var i = 0; i < Product.allProducts.length; i++){
    names.push(Product.allProducts[i].name);
    //votesArr.push(Product.allProducts[i].totalVotes);
    timesShownArr.push(Product.allProducts[i].timesShown);
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
      backgroundColor: ['rgba(242, 75, 75, 0.4)','rgba(255, 176, 0, 0.4)','rgba(242, 255, 0, 0.4)','rgba(74, 255, 0, 0.4)','rgba(0, 56, 255, 0.4)','rgba(128, 0, 255, 0.4)','rgba(255, 0, 0, 0.4)','rgba(255, 130, 0, 0.4)','rgba(227, 255, 0, 0.4)','rgba(36, 255, 0, 0.4)','rgba(0, 33, 255, 0.4)','rgba(119, 0, 252, 0.41)','rgba(255, 0, 0, 0.4)','rgba(255, 191, 0, 0.4)','rgba(242, 255, 0, 0.4)','rgba(0, 255, 33, 0.41)','rgba(0, 56, 255, 0.4)','rgba(89, 0, 255, 0.39)','rgba(255, 0, 0, 0.43)','rgba(255, 222, 0, 0.41)']
    }]
  },

  options: {}


})

}


//survey start
function startSurvey() {


  event.preventDefault();

  localStorage.votes = votesArr;
  localStorage.voteCount = voteCounter;
  localStorage.lastShown = lastShown;

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

  Product.allProducts[randomProductOne].timesShown++;
  Product.allProducts[randomProductTwo].timesShown++;
  Product.allProducts[randomProductThree].timesShown++;


  button.innerHTML = '';


}

function mainSurveyOne() {

  event.preventDefault();

  if(voteCounter < 25) {

    Product.allProducts[randomProductOne].totalVotes++;
    Product.allProducts[randomProductOne].timesShown++;
    voteCounter++;
    pass = false;

    choiceTest();
    renderProducts();
    updateArr();
    savePartial();


    if(voteCounter >= 25) {
      renderChart();
      removeProducts();
      saveComplete();
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
    Product.allProducts[randomProductTwo].timesShown++;
    voteCounter++;
    pass = false;

    choiceTest();
    renderProducts();
    updateArr();
    savePartial();

    if(voteCounter >= 25) {
      renderChart();
      removeProducts();
      saveComplete();
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
    Product.allProducts[randomProductThree].timesShown++;
    voteCounter++;
    pass = false;

    choiceTest();
    renderProducts();
    updateArr();
    savePartial();

    if(voteCounter >= 25) {
      renderChart();
      removeProducts();
      saveComplete();
    } else {
      console.log('keep truckin');
    }

  } else {
    console.log('voting complete');
  }
}



//initialize application
createProducts();
load();
survey_start.addEventListener('submit', startSurvey);
productOne.addEventListener('click', mainSurveyOne);
productTwo.addEventListener('click', mainSurveyTwo);
productThree.addEventListener('click', mainSurveyThree);
