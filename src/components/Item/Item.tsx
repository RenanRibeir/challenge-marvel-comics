import { Generic } from '../../types';
import { Card, Column, Desc, Img , Name} from './style';

interface props{
    updateState: (arg: Generic) => void;
    data: Generic;
}

const Item = ({updateState,data}:props) => {

    return (
    <Card onClick={() => updateState(data)}>
        <Img src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
        <Column>
            <Name>{data.name}</Name>
            <br/><br/>
            <Desc>{data.description}</Desc>
        </Column>
    </Card>
    );
}

export default Item;