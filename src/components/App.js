//import Home from './Home/Home';
import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
//import Todo from './Todo/Todo';
//import Timer from './Pomodoro/Timer';
//import Coins from './Criptocoins/Coins.js';
//import Charthome from './Chart/Charthome';
//import Animation from './Animating/Animation';
//import Numbers from './PureComponent/Numbers';
//import Calculator from './Calculator/Calculator';
import Person from './Forms/Person';
import Popup from 'react-popup';

function App() {
  return (
    <div className="App">
      <Header title="Header" url="https://github.com/" />
      
      <Content>
        <Person />
      </Content>

      <Popup />
      
      <Footer />
    </div>
  );
}

export default App;