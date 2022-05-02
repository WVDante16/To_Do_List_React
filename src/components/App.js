//import Home from './Home/Home';
import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
//import Todo from './Todo/Todo';
//import Timer from './Pomodoro/Timer';
import Coins from './Criptocoins/Coins.js';

function App() {
  return (
    <div className="App">
      <Header title="Header" url="https://github.com/" />
      
      <Content>
        <Coins />
      </Content>
      
      <Footer />
    </div>
  );
}

export default App;