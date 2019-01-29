var p = [];
var quotes = [{
        quote: 'As we grow old…the beauty steals inward.',
        source: 'Ralph Waldo Emerson',
        citation: '',
        year: ''
    },
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: 'Dr. Seuss',
        citation: '',
        year: ''
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        source: 'J.K. Rowling',
        citation: 'Harry Potter and the Goblet of Fire',
        year: '2000'
    },
    {
        quote: 'Without music, life would be a mistake.',
        source: 'Friedrich Nietzsche',
        citation: 'Twilight of the Idols',
        year: ''
    },
    {
        quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that',
        source: 'Martin Luther King Jr',
        citation: '',
        year: '1986'
    }
];

function getRandomQuote(quo) {
    var q = 1; //q is equal to one so that the first while loop does not run which means that quotes will never be repeated (untill they all been ran through)
    while (p.indexOf(q) >= 0) { //if the value is is there then a number >= 0 will generate and code will run to make sure it does not repeat quote.
        q = Math.floor(Math.random() * quo.length); // generate a random number between 0 and the length of the selected function.
    }
    p.push(q); // this will only push in numbers that are not in the array becasue of the if function
    if (p.length >= 5) {
        p = []
    }; // this is making sure that the array is reset once it hits 5 numbers
    return quo[q];
}

function printQuote() {
    var gq = getRandomQuote(quotes) // this variable will make it easier to write the code and much neater.
    var yer; // a variable for adding year into the text
    var cit; // a variable for adding citation into the text
    if (gq.citation !== '') {
        cit = '<span class="citation">' + gq.citation + '</span>'
    } else cit = ''; //conditional to make sure that citation has something in it, if not, then it will not show
    if (gq.year !== '') {
        yer = '<span class="year">' + gq.year + '</span>'
    } else yer = ''; // same thing but with year
    var q = '<p class="quote">' + gq.quote + '</p>';
    q += '<p class="source">' + gq.source + cit + yer + '</p>';

    document.getElementById('quote-box').innerHTML = q;
}

function rgbColor() {
    var r = Math.floor(Math.random() * 256); // generating random numbers for random colors
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")"; // the code needed to change a color

    document.body.style.background = bgColor; // changing the background color with the variable bgColor
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", rgbColor, false); // added more events for color on click
document.getElementById('loadQuote').addEventListener(setInterval(printQuote, 20000), printQuote, false); // event for quote changing on its own every 20 seconds
document.getElementById('loadQuote').addEventListener(setInterval(rgbColor, 20000), rgbColor, false); // event for color changing on its own every 20 seconds
