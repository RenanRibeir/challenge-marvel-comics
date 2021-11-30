import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Grid from './components/Grid/Grid';
import List from './components/List/List';
import Loading from './components/Loading/Loading';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Modal from './components/Modal/Modal';
import api from './services/api';
import {GlobalStyle} from './styles/global';
import { Container,Button,Input, Center } from './styles/style';
import { Generic } from './types';

const App:React.FC = () => { 

  const [menu,setMenu] = useState<string>("comics");
  const [item,setItem] = useState<Generic>({id: ' ',title:' ',thumbnail:{path:' ',extension:' '} });
  const [response,setResponse] = useState<Generic[]>([]);
  const [loading,setLoading] = useState<boolean>(true);
  const [modal,setModal] = useState<boolean>(false);
  const [modalCart,setModalCart] = useState<boolean>(false);
  const [search,setSearch] = useState<string>('?');
  const [text,setText] = useState<string>('');
  const [offset,setOffset] = useState<number>(0);
  const [total,setTotal] = useState<number>(0);
  const [cart,setCart] = useState<Generic[]>([]);
  const limit = 16;

  const updateMenu = (name: string):void => {
    //setMenu(name);
    Search(text);
    setOffset(0);
  }

  const updateItem = (item:Generic):void => {
    setItem(item);
    setModal(true);
  }

  const closeModal = ():void =>{
    setModal(false);
    setModalCart(false);
  }

  const addCart = (comic:Generic):void =>{
      setCart(cart => [...cart,comic]);
  }

  const removeCart = (comic:Generic):void =>{
   
    setCart( cart.filter((_, i) => i !== cart.indexOf(comic)));
    console.log(cart);
  }

  const incrementOffset = ():void =>{
    if(total>offset+limit)setOffset(offset+limit);
    console.log(offset);
  }
  
  const decrementOffset = ():void =>{
    if(0<offset-limit)setOffset(offset-limit);
  }

  const showCart = ():void =>{
      setModalCart(true);
  }


  function Search (e:string){
    let temp = '?';
    if(text !== ' '){
    if(menu === "characters" ){
      temp =`?nameStartsWith=${e}&`
    }else{
      temp =`?titleStartsWith=${e}&`;
    }}

    setText(e);
    setSearch(temp);
  }

  async function get() {

    await api
    .get(`/${menu}${search}offset=${offset}&limit=${limit}`)
    .then(e => {
      setTotal(e.data.data.total);
      setResponse(e.data.data.results);
    })
  }

    useEffect(() => {
      setLoading(true)
      updateMenu("comics")
      get();
      setLoading(false);
      Search(text);
    },[menu,loading,search,offset,cart]);


  return (
  <>
    <GlobalStyle>
      <Container>
        <Logo/>
        <Cart updateState={closeModal} getItem={removeCart} visible={modalCart} data={cart}/> 
        <Menu showCart={showCart} updateState={updateMenu}/>
        <Center>
            <section>
                <form>
                    <Input type="text"
                    placeholder="Digite o nome de um personagem"
                    autoFocus
                    onChange={(e) => Search(e.target.value)}
                    value={text}/>
                </form>
            </section>
        </Center>
        <Modal updateState={closeModal} visible={modal} data={item}/>
        {menu === "characters"?
        <List updateState={updateItem} response={response}/>
        :
        <Grid updateState={updateItem} addCart={addCart} response={response}/>}
        <Loading show={loading}/>
        <Center>
          <Button onClick={decrementOffset}>Anterior</Button>
          <Button onClick={incrementOffset}>Proximo</Button>
        </Center>
      </Container>
    </GlobalStyle>
  </>
    );
};

export default App;