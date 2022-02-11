const yes = false;
type PropsType = { title: string };

const Header = (props: PropsType): JSX.Element => {
  const { title } = props;
  return (
    <div>
      <p>Header component</p>
      <p>
        {title} <br />
        {yes ? 'Yes' : 'No'}
      </p>
    </div>
  );
};

export default Header;
