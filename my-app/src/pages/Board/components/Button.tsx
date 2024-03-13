interface IButton {
  name: string;
  className?: string;
}

export const Button = ({ name, className }: IButton) => (
  <button type="button" className={className}>
    {' '}
    {name}{' '}
  </button>
);
