import { useEffect, version } from 'react';

const Button = () => {
  useEffect(() => {
    window.location.reload();
    console.log('Micro-frontend React version is:', version);
  }, []);
  return <button>Button</button>;
};

export default Button;
