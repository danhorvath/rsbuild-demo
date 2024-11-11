import './App.css';


// @ts-expect-error
import Remote2Button from 'remote2/Remote2Button';
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
      <Remote2Button />
    </div>
  );
};


export default App;
