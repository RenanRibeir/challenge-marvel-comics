import { Generic } from "../../types";
import { StyledModal,Container,Button,Content, Img } from "./style";

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
                <Button>Enviar para</Button>
                <span>{data.title}</span>
                <span>{data.title}</span>
                <span>{data.title}</span>
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