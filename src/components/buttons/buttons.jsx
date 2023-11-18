import { Buttons } from './buttons.styled';

export const Button = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => (
        <Buttons key={option} onClick={evt => onLeaveFeedback(option)}>
          {option}
        </Buttons>
      ))}
    </div>
  );
};
