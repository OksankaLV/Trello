import { useState } from 'react';
import { titleStart, listsStart } from '../../utils/data/Lists';
import { List } from './components/Lists/List';
import { Button } from './components/Button';
import './board.scss';

export const Board = function () {
  const [title, setTitle] = useState(titleStart);
  const [lists, setLists] = useState(listsStart);

  document.title = title;
  const listItems = lists.map((el) => <List key={el.id} title={el.title} cards={el.cards} />);
  return (
    <div className="wrapper">
      <div className="header">
        <Button name={'Home'} />
        <h1>{title}</h1>
      </div>
      <div className="lists">{listItems} </div>
      <Button name={'Add list'} className="listButton" />
    </div>
  );
};
