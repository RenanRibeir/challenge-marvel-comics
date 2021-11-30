
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
            <Container>
                    <ButtonC onClick={updateState}>X</ButtonC>
                    <Title>Seu Carrinho</Title>
                {data.map(e => 
                {return(
                    <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
                        <Img src={e.thumbnail.path+"."+e.thumbnail.extension}/>
                        <div style={{display: 'flex',flexDirection: 'column'}}>
                            <Name>{e.title}</Name>
                            <Button onClick={() => getItem(e)}>Remover</Button>
                        </div>
                    </div>
                )})}
                </Container>
            
            <ButtonSend>Enviar-me</ButtonSend>
            </StyledModal>)
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