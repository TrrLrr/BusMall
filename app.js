'use strict';


//global arrays
var productArr = ['img/bag.jpg', 'img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.jpg','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg'];

Product.allProducts = [];


//constructor function
function Product(filePath) {
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
