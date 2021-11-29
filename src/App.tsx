import { useEffect, useState } from 'react';
import Grid from './components/Grid/Grid';
import List from './components/List/List';
import Loading from './components/Loading/Loading';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Modal from './components/Modal/Modal';
import api from './services/api';
import GlobalStyle from './styles/global';
import { Container } from './styles/style';
import { Generic } from './types';
const App:React.FC = () => { 

  const [menu,setMenu] = useState<string>("comics");
  const [item,setItem] = useState<Generic>({id: ' ',title:' ',thumbnail:{path:' ',extension:' '} });
 
  const updateName = (name: string):void => {
    setMenu(name);
    console.log(name);
  }

  const updateItem = (item:Generic):void => {
    setItem(item);
    setModal(true);
  }

  const [response,setResponse] = useState<Generic[]>([]);
  const [loading,setLoading] = useState<boolean>(true);
  const [modal,setModal] = useState<boolean>(false);

    useEffect(() => {
      setLoading(true)
      api
      .get(`/${menu}?offset=30`)
      .then(response => {
        setResponse(response.data.data.results);
      })
      console.log(response);
      setLoading(false)
    },[menu]);


  return (
  <>
    <GlobalStyle>
    <Container>
      <Logo/>
      <Menu updateState={updateName}/>
      <Modal visible={modal} data={item}/>
      {menu === "characters"?
      <List updateState={updateItem} response={response}/>
      :
      <Grid updateState={updateItem} response={response}/>}
      <Loading show={loading}/>
    </Container>
    </GlobalStyle>
  </>
    );
};

export default App;