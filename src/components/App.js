import Home from './Home/Home';
import Header from '../shared/layout/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Mi App" url="https://github.com/" />
      <Home />
    </div>
  );
}

export default App;
