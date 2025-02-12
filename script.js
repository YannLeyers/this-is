document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});

document.querySelector('.dropdown').addEventListener('click', function () {
  const content = this.querySelector('.dropdown-content');
  content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
});

// Load votes from local storage
let votes = JSON.parse(localStorage.getItem('votes')) || { art: 0, vandalism: 0 };

function vote(option) {
  votes[option]++;
  localStorage.setItem('votes', JSON.stringify(votes));
  updateResults();
}

function updateResults() {
  let totalVotes = votes.art + votes.vandalism;
  let artPercentage = totalVotes === 0 ? 0 : ((votes.art / totalVotes) * 100).toFixed(1);
  let vandalismPercentage = totalVotes === 0 ? 0 : ((votes.vandalism / totalVotes) * 100).toFixed(1);

  document.getElementById('art-count').textContent = artPercentage;
  document.getElementById('vandalism-count').textContent = vandalismPercentage;
}

// Update on load
updateResults();