import { Generic } from '../../types';
import { Card, Img , Name} from './style';

interface props{
    updateState: (arg: Generic) => void;
    data: Generic;
}

const Item = ({updateState,data}:props) => {

    return (
        <button onClick={() => updateState(data)}>
    <Card >
        <Img src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
        <Name>{data.name}</Name>
    </Card>
    </button>
    );
}

export default Item;