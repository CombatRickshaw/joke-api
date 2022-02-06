const dadJoke = document.querySelector('.joke-type-dad');
const dankJoke = document.querySelector('.joke-type-dank');
const emoji = document.querySelector('.image-content');
const jokeSetup = document.querySelector('.setup');
const jokeDelivery = document.querySelector('.delivery');

let url = "https://v2.jokeapi.dev/joke/Pun?type=twopart";//setting the initial joke to dad joke
let string = "";
let where = "";
var setup = "";
var delivery = "";
let emojiClickCount = 0;
let joktype = "";


dadJoke.addEventListener('click', () => {

    url = "https://v2.jokeapi.dev/joke/Programming,Pun?type=twopart";
    emoji.textContent = "😐";
    console.log(url);
    jokeSetup.textContent = "Click on the emoji to see jokes";
    jokeDelivery.textContent = "";
    joktype = "dad";
    dadJoke.setAttribute('style', 'color: #66E6AE;');
    dankJoke.setAttribute('style', 'color: white;');
});

dankJoke.addEventListener('click', () => {

    url = "https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?type=twopart";
    emoji.textContent = "😈";
    jokeSetup.textContent = "Click on the emoji to see jokes";
    jokeDelivery.textContent = "";
    joktype = "dank";
    dankJoke.setAttribute('style', 'color: #66E6AE;');
    dadJoke.setAttribute('style', 'color: white;');
    console.log(url);

});

emoji.addEventListener('click', () => {
    emojiClickCount += 1;

    console.log(emojiClickCount)

    if (emojiClickCount == 1) {

        if (joktype === "dad") {
            emoji.textContent = "😐";
        }
        
        else if (joktype === "dank") {
            emoji.textContent = "😈";
        }

        getJokeAndWriteToDom();

    }

    else if (emojiClickCount == 2) {
        jokeDelivery.classList.remove('hide');

        if (joktype === "dad") {
            emoji.textContent = "🤭";
        }
        else if (joktype === "dank") {
            emoji.textContent = "💀";
        }
        emojiClickCount = 0;

    }
});


async function getJokeAndWriteToDom() {

    try {

        const response = await fetch(url);
        const jokeJson = await response.json();
        var setup = jokeJson.setup;
        var delivery = jokeJson.delivery;
        console.log(jokeJson)

        writeToDom(setup, delivery);

    } catch (err) {
        console.log(err)
    }

}


function writeToDom(setupToJoke, deliveryToJoke) {

    jokeSetup.textContent = setupToJoke;
    jokeDelivery.textContent = deliveryToJoke;
    jokeDelivery.classList.add('hide');

}


function clearDom() {
    jokeSetup.textContent = "";
    jokeDelivery.textContent = "";
}