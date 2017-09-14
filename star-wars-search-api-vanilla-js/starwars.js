
let search = ""

const fetchCharacters = (searchResult) => {
  console.log(searchResult.data)
  if (searchResult.data === null) {
    search = search.slice(0, search.length - 1)
  } else {
    search += searchResult.data
  }
  fetch(`https://swapi.co/api/people/?search=${search}`)
  .then( response => { return response.json() } )
  .then( characters => renderList(characters))
}

const renderList = (characters) => {
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


searchBar.addEventListener('input', (searchResult) => fetchCharacters(searchResult))
