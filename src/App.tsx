import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Grid from './components/Grid/Grid';
//import List from './components/List/List';
import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import api from './services/api';
import {GlobalStyle} from './styles/global';
import { Container,Button,Input, Center } from './styles/style';
import { Generic } from './types';
import React from 'react';

const App:React.FC = () => { 

  //const [menu,setMenu] = useState<string>("comics");
  const [item,setItem] = useState<Generic>({id: ' ',title:' ',thumbnail:{path:' ',extension:' '},qtd:0});
  const [response,setResponse] = useState<Generic[]>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const [modal,setModal] = useState<boolean>(false);
  const [modalCart,setModalCart] = useState<boolean>(false);
  const [search,setSearch] = useState<string>('?');
  const [text,setText] = useState<string>('');
  const [offset,setOffset] = useState<number>(0);
  const [total,setTotal] = useState<number>(0);
  const [cart,setCart] = useState<Generic[]>([]);
  const limit = 16;

  // const updateMenu = (name: string):void => {
  //   //setMenu(name);
  //   setOffset(0);
  // }

  const updateItem = (item:Generic):void => {
    setItem(item);
    setModal(true);
  }

  const closeModal = ():void =>{
    setModal(false);
    setModalCart(false);
  }

  const addCart = (comic:Generic):void =>{
      if(!cart.find((e) => e.id === comic.id)){
        comic.qtd = 1;
        setCart(cart => [...cart,comic]);
      }else{
        cart.forEach(function(e){if(e.id === comic.id)e.qtd++});
      }    
      window.scroll(0,-10000);
  }

  const removeCart = (comic:Generic):void =>{
    if(cart[cart.indexOf(comic)].qtd === 1)
      setCart(cart.filter((_, i) => i !== cart.indexOf(comic)));
    else{
      cart.forEach((e) => {if(e.id === comic.id) e.qtd--})
      setCart(cart => [...cart]);
    }
  }

  const incrementOffset = ():void =>{
    if(total>offset+limit)setOffset(offset+limit);
    console.log(offset);

    window.scroll(0,-10000);
  }
  
  const decrementOffset = ():void =>{
    if(0<offset-limit)setOffset(offset-limit);

    window.scroll(0,-10000);
  }

  const showCart = ():void =>{
      setModalCart(true);
  }


  function Search (){
    let temp = '?';
    setOffset(0);

    if(text.length !== 0){
    // if(menu === "characters" ){
    //   temp =`?nameStartsWith=${e}&`
    // }else{
      temp =`?titleStartsWith=${text}&`;
   // }
    }

    setSearch(temp);

  }

  useEffect(() => {
    
  },[cart]);

  useEffect(() => {
    setLoading(true)
    api
    .get(`/${"comics"}${search}offset=${offset}&limit=${limit}`)
    .then(e => {
      setTotal(e.data.data.total);
      setResponse(e.data.data.results);
      setLoading(false)
    })
  },[search,offset]);

  return (
  <>
    <GlobalStyle>
      <Container>
        <Navbar qtd={cart.length} showCart={showCart}/>
        <Cart updateState={closeModal} getItem={removeCart} visible={modalCart} data={cart}/> 
        <Center>
                    <Input type="text"
                    placeholder="Digite o nome de uma HQ e pressione Enter"
                    autoFocus
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={function(e){if(e.key === 'Enter')Search()}}
                    value={text}
                    />
                   <Button onClick={Search}>Pesquisar</Button>
        </Center>
        <Modal updateState={closeModal} visible={modal} data={item}/>
        <Loading show={loading}/>
        {/*menu === "characters"
        <List updateState={updateItem} response={response}/>
        :*/}
        <Grid visible={loading} updateState={updateItem} addCart={addCart} response={response}/>
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