import ICard from '../../../../common/interfaces/ICard';
import { Card } from '../Card/Card';
import { Button } from '../Button';
import './list.scss';

export interface IList {
  id?: number;
  title: string;
  cards: ICard[];
}

export function List({ title, cards }: IList) {
  const cardsItem = cards.map((el) => <Card key={el.id} title={el.title} />);
  return (
    <div className="list">
      <h2> {title} </h2>
      <div className="listTitles">{cardsItem} </div>
      <Button name={'Add card'} />
    </div>
  );
}
