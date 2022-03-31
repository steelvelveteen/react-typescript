import { useContext } from 'react';

import { ThemeContext } from '../App';

const yes = false;
type PropsType = { title: string };

const Header = (props: PropsType): JSX.Element => {
  const { title } = props;
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Header component</p>
      <p>
        {title} <br />
        {yes ? 'Yes' : 'No'}
      </p>
      <p>Current users theme is: {theme}</p>
    </div>
  );
};

export default Header;
