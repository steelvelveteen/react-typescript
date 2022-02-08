import { useEffect, useState } from 'react';

import './App.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const arrayElementNewLineEslintTest = [
  'First element',
  'Second element',
  'Third element',
  'Fourth element',
];

const App = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [resourceType, setResourceType] = useState<string>('posts');
  const [items, setItems] = useState<[]>([]);

  const handleResize = (): void => setWindowWidth(window.innerWidth);

  /* A hook to monitor window resize events */
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  /* */
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(res => res.json())
      .then(json => setItems(json));
  }, [resourceType]);

  return (
    <>
      <h1>Current width: {windowWidth}</h1>
      <div>
        <button onClick={() => setResourceType('posts')} type="button">
          Posts
        </button>
        <button onClick={() => setResourceType('users')} type="button">
          Users
        </button>
        <button onClick={() => setResourceType('comments')} type="button">
          Comments
        </button>
      </div>
      <h1>Items</h1>
      {items.map(item => (
        <p>{JSON.stringify(item)}</p>
      ))}
    </>
  );
};

export default App;
