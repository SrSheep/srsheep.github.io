fetch("https://api.github.com/users/alvarofilho/repos")
  .then(response => response.json())
  .then(data => data.forEach((repo) => createCard(repo)))
  .catch(err => console.error('Failed retrieving information', err));

function createCard(repo) {
  if (!repo.fork) {
    const card = document.getElementById("cards")
    const link = document.createElement('a')
    link.setAttribute('class', 'card')
    link.setAttribute('target', '_blank')
    link.setAttribute('href', repo.html_url)

    const article = document.createElement('article')
    const name = document.createElement('h3')
    name.innerText = repo.name
    const desc = document.createElement('p')
    desc.innerText = repo.description

    article.appendChild(name)
    article.appendChild(desc)
    link.appendChild(article)
    card.appendChild(link)
  }
}