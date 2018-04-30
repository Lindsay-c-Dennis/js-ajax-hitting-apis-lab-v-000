

function displayRepositories() {
  let repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = '<ul>' + repos.map(repos => {
    const dataUsername = 'data-username="' + repo.owner.login + '"';
    const dataRepoName = 'data-repository="' + repo.name + '"';
    return (
      )
    '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + ' data-username="' + r.owner.login +  '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`;
  document.getElementById("repositories").innerHTML = repoList;
}

function getRepositories() {
  let username = document.getElementById("username").value;
  let url = "https://api.github.com/users/" + username + "/repos";
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories);
  req.open("GET", url);
  req.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`;
  document.getElementById("details").innerHTML = commitsList;
}

function getCommits(el) {
  const name = el.dataset.repo;
  const username = el.dataset.username;
  const req = new XMLHttpRequest();
  const uri = 'https://api.github.com/repos' + username + '/' + name  + '/commits';
  req.addEventListener("load", displayCommits);
  req.open("GET",uri);
  req.send();
}