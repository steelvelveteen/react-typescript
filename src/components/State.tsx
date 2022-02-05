import { useState } from 'react';

type NumberOrString = number | string;

const State = (): JSX.Element => {
  const [someNumber, setSomeNumber] = useState<NumberOrString>(55);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeNumber = (): void => setSomeNumber('66');

  // Usage of useState for arrays of objects
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [people, setPeople] = useState([
    {
      name: 'Joey',
      surname: 'Vico',
      age: 47,
    },
    {
      name: 'Larissa',
      surname: 'Schneider',
      age: 35,
    },
  ]);

  return (
    <>
      <p>{someNumber}</p>
      {people.forEach(p => (
        <p>{p.name}</p>
      ))}
      {people.map(p => (
        <p>{p.name}</p>
      ))}
    </>
  );
};

export default State;
