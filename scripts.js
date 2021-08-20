let myButton = document.getElementById("btn")
let myInput = document.getElementById("inputFLD")
let myParagraph = document.getElementById("my-paragraph")

function strReversal(){
    // Display paragraph
    // myParagraph.innerText = "hello"

    // Getting user input
    let myText = myInput.value

    // If condition!
    if(myText.length == 0){
        myParagraph.innerText = "Ups! Input field is empty!"
    }else{
    
    // Reversing strings
    let newReversedString = myText.split("").reverse()

    // Joining strings & output to paragraph!
    let joinString = newReversedString.join("")
    myParagraph.innerText = joinString
}
}


