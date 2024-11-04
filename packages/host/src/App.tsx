import './App.css';

// @ts-expect-error
import Button from 'remote/Button';

const App = () => {
  return (
    <div className="content">
      <h1>
        Rsbuild with React <b>Host</b>
      </h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button />
    </div>
  );
};

export default App;
