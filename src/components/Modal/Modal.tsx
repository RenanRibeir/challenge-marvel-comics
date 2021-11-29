import { Generic } from "../../types";
import { StyledModal,Container,Button,Content,Title,Img } from "./style";

interface props{
    visible: boolean;
    data: Generic;
}

const Modal = ({visible,data}: props) =>{

    let modal;

    console.log(data);

    if(visible){
        modal = (
        <StyledModal>
            <Img src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
            <Container>
                <Title>{data.title}</Title>
                <br/><br/>
                <Content>{data.description}</Content>
                <Button>Enviar para</Button>    
            </Container>
        </StyledModal>) 
    } 

    return ( 
        <> 
        {modal}
        </>
    )

};

export default Modal;