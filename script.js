document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});

document.querySelector('.dropdown').addEventListener('click', function () {
  const content = this.querySelector('.dropdown-content');
  content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
});

let artVotes = 0;
let vandalismVotes = 0;
let totalVotes = 0;

function vote(choice) {
  if (choice === 'art') {
    artVotes++;
  } else if (choice === 'vandalism') {
    vandalismVotes++;
  }

  totalVotes++;

  updateResults();
}

function updateResults() {
  const artPercentage = Math.round((artVotes / totalVotes) * 100);
  const vandalismPercentage = Math.round((vandalismVotes / totalVotes) * 100);

  // Display percentages
  document.getElementById('art-count').textContent = artPercentage;
  document.getElementById('vandalism-count').textContent = vandalismPercentage;
}