let username = document.getElementById("username");

function getRepositories() {
  const req = new XMLHttpRequest();
  req.open(`https://api.github/users/${username}/repos`);
  req.send();
}

function displayCommits() {
  
}