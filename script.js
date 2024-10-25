// script.js

// Dictionary of "honest" quotes
const honestQuotes = {
    "self_doubt": [
        "Why bother? You're not that special.",
        "Confidence? Not in this lifetime.",
        "Why try when it's easier to fail?"
    ],
    "procrastination": [
        "You’ll probably do it tomorrow…or next year.",
        "Deadlines are just suggestions, right?",
        "Maybe if you ignore it, it’ll go away."
    ],
    "fitness": [
        "Abs are overrated. Have a donut.",
        "Lifting the remote counts as exercise.",
        "Why run when you can sit?"
    ]
};

// Function to fetch a random quote for the selected category
function fetchQuote() {
    const category = document.getElementById('categoryDropdown').value;
    const quotes = honestQuotes[category];
    if (quotes) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quoteOutput').textContent = `"${randomQuote}"`;
    } else {
        document.getElementById('quoteOutput').textContent = "Category not found.";
    }
}
