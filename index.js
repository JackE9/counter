


let count = 0

let numberOfPeople = document.getElementById("count-el")

function increment() {

    count = count + 1
    numberOfPeople.innerText = count
}

let savedItems = document.getElementById("save-el")

function save() {
    let countStr = count + " - "
    savedItems.textContent += countStr
    //.textContent was used here instead of .innerText because the latter doesn't work with some characters such as spaces

    //I don't think there is any reason to use .innerText going forward

    count = 0
    numberOfPeople.textContent = 0
}