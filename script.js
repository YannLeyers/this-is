document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});

document.querySelector('.dropdown').addEventListener('click', function () {
  const content = this.querySelector('.dropdown-content');
  content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
});

// Load votes from local storage or initialize a structure for all categories
let votes = JSON.parse(localStorage.getItem('votes')) || {};

// Ensure each category has its own object in votes
const categories = ['traffic', 'graffiti']; // Add more categories as needed
categories.forEach(category => {
  if (!votes[category]) {
    votes[category] = { art: 0, vandalism: 0 };
  }
});

function vote(category, option) {
  if (!votes[category]) {
    votes[category] = { art: 0, vandalism: 0 };
  }

  votes[category][option]++;
  localStorage.setItem('votes', JSON.stringify(votes));
  updateResults(category);
}

function updateResults(category) {
  let totalVotes = votes[category].art + votes[category].vandalism;
  let artPercentage = totalVotes === 0 ? 0 : ((votes[category].art / totalVotes) * 100).toFixed(1);
  let vandalismPercentage = totalVotes === 0 ? 0 : ((votes[category].vandalism / totalVotes) * 100).toFixed(1);

  document.getElementById(`${category}-art-count`).textContent = artPercentage;
  document.getElementById(`${category}-vandalism-count`).textContent = vandalismPercentage;
}

// Update results on load
categories.forEach(updateResults);
