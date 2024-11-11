import { useEffect, version } from 'react';

const Remote2Button = () => {
  useEffect(() => {
    console.log('Micro-frontend React version is:', version);
    // window.location.reload();
  }, []);
  return <button>Remote 2 button</button>;
};

export default Remote2Button;
