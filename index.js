let username = document.getElementById("username");

function getRepositories() {
  const req = new XMLHttpRequest();
  req.open(`https://api.github/${username}/`)
}