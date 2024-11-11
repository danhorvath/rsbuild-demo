import { useEffect, version } from 'react';

const Button = () => {
  useEffect(() => {
    console.log('Remote React version is:', version);
  }, []);
  return <div>
    <button>Button</button>;
    </div>
};

export default Button;
