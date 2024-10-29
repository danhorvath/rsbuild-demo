import './App.css';

import { lazy, Suspense } from 'react';

// @ts-ignore
const Button = lazy(() => import('remote/Button'));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React <b>Host</b></h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
      </Suspense>
    </div>
  );
};

export default App;
