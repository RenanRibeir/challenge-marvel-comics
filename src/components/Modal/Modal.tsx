import { Generic } from "../../types";
import { StyledModal,Container,Content,Title,Img } from "./style";

interface props{
    id?: string;
    visible: boolean;
    data: Generic;
    updateState: () => void;
}

const Modal = ({id = 'modal',updateState,visible,data}: props) =>{

    let modal;

    if(visible){
        modal = (
        <StyledModal onClick={updateState}>
            <Img src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
            <Container>
                <Title>{data.title}</Title>
                <br/><br/>
                <Content>Description:{data.description?data.description:" No description"}</Content>
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