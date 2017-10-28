import React from 'react';
import Data from './data';

// Functional components
//  - use if you dont need state or component did mount type things
//  - makes your code more functional so less mishaps


const Item = (props) => {

  const { id, name, eyes } = props.item;

  return (
    <li key={id}>
      <p>{name}</p>
      <p>{eyes}</p>
      <p>test</p>
    </li>
  )
}

const List = (props) => {
  const items = Data.map((item, idx) => <Item item={item} key={idx}/>)
  const { counterValue, increment } = props;
  return (
    <div>
      <p>Hello</p>
      <button onClick={() => increment()}>CLICK ME</button>
      <div>{counterValue}</div>
      <ul>
        {items}
      </ul>
    </div>
  )
  
}

export default List;

