import { List } from './statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <List>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback:{percentage}%</li>
    </List>
  );
};
