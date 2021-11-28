import { useEffect, useState } from 'react';
import Grid from './components/Grid/Grid';
import List from './components/List/List';
import Loading from './components/Loading/Loading';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Modal from './components/Modal/Modal';
import api from './services/api';
import { Container } from './styles/style';
import { Generic } from './types';
const App:React.FC = () => { 

  const [menu,setMenu] = useState<string>("comics");
 
  const updateName = (name: string):void => {
    setMenu(name);
    console.log(name);
  }

  const [response,setResponse] = useState<Generic[]>([]);
  const [loading,setLoading] = useState<boolean>(true);

    useEffect(() => {
      setLoading(true)
      api
      .get(`/${menu}`)
      .then(response => {
        setResponse(response.data.data.results);
      })
      setLoading(false)
    },[menu]);


  return (
  <>
    <Container>
      <Logo/>
      <Menu updateState={updateName}/>
      <Modal visible={true} data={response[5]}/>
      {menu === "characters"?
      <List response={response}/>
      :
      <Grid response={response}/>}
      <Loading show={loading}/>
    </Container>
  </>
    );
};

export default App;