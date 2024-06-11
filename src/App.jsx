import { useState } from 'react';
import UploadImageForm from './UploadImageForm.jsx';
import './App.css';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  const [count, setCount] = useState(0);

  function incrCount() {
    setCount(count => count + 1);
  }

  return (
    <div className="App">
      <UploadImageForm />
    </div>
  );
};

export default App;
