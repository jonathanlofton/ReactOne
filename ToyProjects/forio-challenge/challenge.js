// DOM Manipulation question on JSFiddle

<ul>
  <li>5</li>
  <li>8</li>
  <li>3</li>
  <li>12</li>
  <li>-2</li>
</ul>

// given the elements above, edit it to have the final form look like

// have a maximum of 2 list tags in a ul and make sure the values are sorted
<ul>
  <li>-2</li>
  <li>3</li>
</ul>
<ul>
  <li>5</li>
  <li>8</li>
</ul>
<ul>
  <li>12</li>
</ul>


// 2nd problem
// sort the values RGB inline O(n) 

const array = [ 'R', 'G', 'B', 'R', 'R', 'G', 'G', 'B'] 
// => [R,R,G,G,G,B,B]

// Solution

const arr = ['R', 'R', 'G', 'G', 'R', 'R', 'B', 'R', 'B', 'B', 'G'];

function sortRBG(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'G') {
      let x = arr.splice(i, 1)
      arr.push(x)
      i -= 1
    } else if (arr[i] === 'R') {
      let y = arr.splice(i, 1)
      arr.unshift(y)
      i -= 1
    }
  }
  return arr;
}

document.body.append(sortRBG(arr));

// R, R, R, R, R, B, B, B, G, G