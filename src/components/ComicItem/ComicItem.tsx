import { Generic } from '../../types';
import { Button, Card, Img , Name} from './style';

interface props{
    updateState: (arg: Generic) => void;
    addCart: (arg: Generic) => void;
    data: Generic;
}

const ComicItem = ({updateState,addCart,data}:props) => {
    return (
        
    <Card >
        <Img onClick={() => updateState(data)} src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
        <Name onClick={() => updateState(data)}>{data.title}</Name>
        <Button onClick={() => addCart(data)}>Adicionar ao carrinho</Button>
    </Card>
    );
}

export default ComicItem;