

//The code Ik will work

/* Code written and developed by Mohd Muneeb */
//Steps for this to work

console.log("Hello");

//----------------------------------------//
//Get images to load
//Copy the images in an array
//Get the images in a random order
//Display randomized order
//Get final output
//---> work on Selecting and Deselecting
//Compare copy and final output function
//After Effects of solving
//-->We need to work this shit
//---------------------------------------//

//Uncomment here to get start the random generator

// var images = [];

function titleGenerator() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    imageTitle = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
    imageTitle += charset.charAt(Math.floor(Math.random() * n));
  }
  // console.log(imageTitle);
  images.push(imageTitle);
  // console.log(images);
}

function getImages() {
  for (i = 0; i <= 11; i++) {
    titleGenerator();
  }
  // console.log(images);
}

// console.log(images);


// getImages();

const images = ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5', 'Number 6', 'Number 7', 'Number 8', 'Number 9'];
// const images = ['random', 'fucking', 'bullshit', 'go', 'brr', 'skrrrrt', 'idk', 'whyami', 'doing', 'thislmao']
var copyImages = [];
var finalArray = [];
// console.log(images);

function randomizer() {

  //copy retrieved images into a temp array copy

  let i = 0;
  images.forEach(element => {
    copyImages[i] = element;
    i++;
  });

  //randomize original array

  for (var k = images.length - 1; k > 0; k--) {

    // Generate random number
    var j = Math.floor(Math.random() * (k + 1));

    var temp = images[k];
    images[k] = images[j];
    images[j] = temp;

  }

  //Shuffled titles of the images in the original array
  // console.log(images);
}

//Calling random function

randomizer();

//Load to HTML page and assign functionality

function display() {

  //load elements to html

  for (i = 0; i <= images.length - 1; i++) {
    var passwordChoices = document.createElement('option');

    //EDIT THIS TO DISPLAY THEM IMAGES MUNEEB , For Fucks Sake

    passwordChoices.innerHTML = images[i];

    // passwordChoices.innerHTML = <img src="test-images/image2.jpg"></img>;
    // console.log(images[i]);
    document.getElementById("option-holder").appendChild(passwordChoices)

    //Setting properties

    Object.assign(passwordChoices, {
      className: 'my-image-class',
      id: images[i],

      // src: ''

      //Add Event Listeners

      onclick: function () {

        if (finalArray.length <= copyImages.length - 1) {

          finalArray.push(this.id);
          console.log(finalArray);
          this.setAttribute("class", "selected");
        }
        else {
          alert("array is full bruh lmao");
        }

      }
    })
  }
}

display();

class CustomSelect {
  constructor(originalSelect) {
    this.originalSelect = originalSelect;
    this.customSelect = document.createElement("div");
    this.customSelect.classList.add("select");

    let convertableOptions = (this.originalSelect.querySelectorAll("option"));

    for(i = 0 ; i <= images.length - 1; i++){
      const itemElement = document.createElement("div");

      itemElement.classList.add("select__item");
      itemElement.setAttribute("id" , convertableOptions[i].innerHTML);
      // console.log(formItems[0].children);
      itemElement.textContent = convertableOptions[i].textContent;
      this.customSelect.appendChild(itemElement);

      if (convertableOptions[i].selected) {
        this._select(itemElement);
      }

      itemElement.addEventListener("click", () => {
        if (
          this.originalSelect.multiple &&
          itemElement.classList.contains("select__item--selected")
        ) {
          this._deselect(itemElement);
        } else {
          this._select(itemElement);
        }
      });
    }

    // this.originalSelect.querySelectorAll("option").forEach((optionElement) => {
    //   const itemElement = document.createElement("div");

    //   itemElement.classList.add("select__item");
    //   // itemElement.setAttribute('id' , );
    //   // console.log(formItems[i].id);
    //   itemElement.textContent = optionElement.textContent;
    //   this.customSelect.appendChild(itemElement);

    //   if (optionElement.selected) {
    //     this._select(itemElement);
    //   }

    //   itemElement.addEventListener("click", () => {
    //     if (
    //       this.originalSelect.multiple &&
    //       itemElement.classList.contains("select__item--selected")
    //     ) {
    //       this._deselect(itemElement);
    //     } else {
    //       this._select(itemElement);
    //     }
    //   });
    // });

    this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
    this.originalSelect.style.display = "none";
  }

  _select(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);

    if (!this.originalSelect.multiple) {
      this.customSelect.querySelectorAll(".select__item").forEach((element) => {
        element.classList.remove("select__item--selected");
      });
    }

    this.originalSelect.querySelectorAll("option")[index].selected = true;
    itemElement.classList.add("select__item--selected");

    if (finalArray.length <= copyImages.length - 1) {

      //I am pushing shit from here Bro

      finalArray.push(images[index]);
      console.log(finalArray);
      // this.setAttribute("class", "selected");
    }
    else {
      alert("array is full bruh lmao");
    }

  }

  _deselect(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);

    this.originalSelect.querySelectorAll("option")[index].selected = false;
    itemElement.classList.remove("select__item--selected");
  }
}

// document.querySelectorAll(".custom-select").forEach((selectElement) => {
//   new CustomSelect(selectElement);
// });

//This is to make those elements

const formItems = document.querySelectorAll(".custom-select")
// console.log(formItems);

for( i = 0 ; i <= images.length - 1; i++){
  new CustomSelect(formItems[i]);
}
// console.log(copyImages);

const submit = document.getElementById('submitBtn');

submit.addEventListener("click", () => {

  if (copyImages.toLocaleString() == finalArray.toLocaleString()) {
    console.log("they cool lmao");
    solved();

  }
  else {
    console.log("bruh fuck off")
    // wrongPassword();
  }

}

);

//Deselect of a element

// let selectedItem = document.getElementsByClassName("selected");
// selectedItem.addEventListener("click", deselect())

// function deselect() {
//         // this.setAttribute
//         console.log("clicked on selected items")
// }

//On solving

function solved() {


}

//On getting password wrong

// function wrongPassword() {


// }

// function encrypter(titleText){

// }