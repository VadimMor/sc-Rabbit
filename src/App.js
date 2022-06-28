import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
