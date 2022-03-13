/* Code written and developed by Mohd Muneeb */

console.log("Hello");

//Steps for this to work

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



function getImages() {

}

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
    // console.log(images);
}

//Calling random function

randomizer();

//Load to HTML page and assign functionality

function display() {

    //load elements to html

    for (i = 0; i <= images.length - 1; i++) {
        var passwordChoices = document.createElement('li');
        passwordChoices.innerHTML = images[i];
        // console.log(images[i]);
        document.getElementById("list").appendChild(passwordChoices)

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

// console.log(copyImages);

const submit = document.getElementById('submitBtn');

submit.addEventListener("click", () => {

    if (copyImages.toLocaleString() == finalArray.toLocaleString()) {
        console.log("they cool lmao");
        solved();

    }
    else {
        console.log("bruh fuck off")
        wrongPassword();
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

function wrongPassword() {


}