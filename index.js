let username = document.getElementById("username");

function showRepositories() {
  let repos = JSON.parse(this.responseText);
  
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open(`https://api.github/users/${username}/repos`);
  req.send();
}

function displayCommits() {
  
}