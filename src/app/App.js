//Own Module Imports
import Navbar from "../components/Navbar";
import { rootChildren } from "../routes";
import SSRouter from '../SSRouter/components/Router/SSRouter';

function App() {
  return (
    <div className="container">
      <Navbar />
      <SSRouter routes={rootChildren} />
    </div>
  );
}

export default App;
