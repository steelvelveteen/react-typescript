const yes = false;

const Header = (props: { title: string }): JSX.Element => {
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
