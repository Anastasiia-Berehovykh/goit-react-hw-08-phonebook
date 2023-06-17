import { ButtonFilter } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <ButtonFilter
      style={
        selected === false
          ? { backgroundColor: `#00FFFF`, color: `#000` }
          : { backgroundColor: `#00FFFF`, color: `red`,
              border: 'solid' }
      }
      type={type}
      {...otherProps}
    >
      {children}
    </ButtonFilter>
  );
};