
import { useEffect } from "react";
import { Generic } from "../../types";
import { StyledModal,Container,Button,Title, ButtonC, Name, ButtonSend, Img } from "./style";

interface props{
    data: Generic[];
    visible: boolean;
    updateState: () => void;
    getItem: (data:Generic) => void;
}

const Cart = ({updateState,getItem,visible,data}:props) =>{

    let modal;

    if(visible){
        modal = (
        <>
            <StyledModal>
                <div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-between',width: '404px',marginBottom: '10px'}}>
                    <ButtonC onClick={updateState}>X</ButtonC>
                    <Title>Seu Carrinho</Title>
                </div>
            <Container>
                {data.map(e => 
                {return(
                    <div style={{display: 'flex',flexDirection: 'row',width: '300px'}}>
                        <Img src={e.thumbnail.path+"."+e.thumbnail.extension}/>
                        <div style={{display: 'flex',flexDirection: 'column'}}>
                            <Name>{e.title}</Name>
                            <Name>Quantidade: {e.qtd}</Name>
                            <Button onClick={() => {getItem(e)}}>Remover</Button>
                        </div>
                    </div>
                )})}
                </Container>
            
            <ButtonSend>Enviar-me</ButtonSend>
            </StyledModal>
        </>
        ) 
    }

    return ( 
        <> 
        {modal}
        </>
    )

};


export default Cart;