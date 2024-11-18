var randomNumber = Math.trunc(Math.random() * 6 + 1);
var quote = document.getElementById("quote");
var author = document.getElementById("author");

var quotes = [
  {
    quoteMessage: "“Be yourself; everyone else is already taken.”",
    authorOfQuote: "Oscar Wilde",
  },
  {
    quoteMessage:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    authorOfQuote: "Marilyn Monroe",
  },
  {
    quoteMessage:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    authorOfQuote: "Albert Einstein",
  },
  {
    quoteMessage: "“A room without books is like a body without a soul.”",
    authorOfQuote: "Marcus Tullius Cicero",
  },
  {
    quoteMessage:
      "“You only live once, but if you do it right, once is enough.”",
    authorOfQuote: "Mae West",
  },
  {
    quoteMessage: "“Be the change that you wish to see in the world.”",
    authorOfQuote: "Mahatma Gandhi",
  },
];
function getquote() {
  randumNumber = Math.trunc(Math.random() * 6 + 1);
  
  switch (randumNumber) {
    case 1:
      quote.innerHTML = quotes[0].quoteMessage;
      author.innerHTML = quotes[0].authorOfQuote;
      
      break;
    case 2:
      quote.innerHTML = quotes[1].quoteMessage;
      author.innerHTML = quotes[1].authorOfQuote;
      break;

    case 3:
      quote.innerHTML = quotes[2].quoteMessage;
      author.innerHTML = quotes[2].authorOfQuote;
      break;
    case 4:
      quote.innerHTML = quotes[3].quoteMessage;
      author.innerHTML = quotes[3].authorOfQuote;
      break;
    case 5:
      quote.innerHTML = quotes[4].quoteMessage;
      author.innerHTML = quotes[4].authorOfQuote;
      break;
    case 6:
      quote.innerHTML = quotes[5].quoteMessage;
      author.innerHTML = quotes[5].authorOfQuote;
      break;
    default:
      break;
  }
  console.log(randomNumber);
}
