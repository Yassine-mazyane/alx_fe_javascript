// Initial array of quotes
const quotes = [
  { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Success is not in what you have, but who you are.", category: "Success" },
];

// Function to display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `<strong>${quote.text}</strong> <br><em>(${quote.category})</em>`;
}

// Function to add a new quote dynamically
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newQuote = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (newQuote && newCategory) {
    quotes.push({ text: newQuote, category: newCategory });

    // Clear input fields
    textInput.value = "";
    categoryInput.value = "";

    alert("Quote added successfully!");
  } else {
    alert("Please enter both quote and category.");
  }
}

// Attach event listener to the button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Display a quote initially
showRandomQuote();
