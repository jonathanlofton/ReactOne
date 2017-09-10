
let search = ""

const fetchCharacters = (go) => {
  search += go.data
  console.log(go)
  fetch(`https://swapi.co/api/people/?search=${search}`)
  .then( response => { return response.json() } )
  .then( characters => renderList(characters))
}

const renderList = (characters) => {
  console.log(characters.value)
  const html = characters.results.map(character => {
    return `
      <li>
        <span class="name">${character.name}</span>
      </li>
    `
  }).join('');
  characterList.innerHTML = html;
}


let searchBar = document.querySelector('.search')
let characterList = document.querySelector('.characterList')


searchBar.addEventListener('input', (go) => fetchCharacters(go))
