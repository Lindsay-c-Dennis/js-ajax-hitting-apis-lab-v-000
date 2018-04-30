

function showRepositories() {
  let repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`;
  document.getElementById("repositories").innerHTML = repoList;
}

function getRepositories() {
  let username = document.getElementById("username");
  let url = "https://api.github.com/users/" + username + "/repos";
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open(`https://api.github/users/${username}/repos`);
  req.send();
}

function displayCommits() {
  
}