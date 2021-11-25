import List from './components/List/List';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';

const App:React.FC = () => { 

  return (
    <>
      <Logo/>
      <Menu/>
      <List type={"events"}/>
    </>
    );
};

export default App;