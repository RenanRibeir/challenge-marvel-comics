import { Generic } from '../../types';
import { Card, Img , Name} from './style';

interface props{
    updateState: (arg: Generic) => void;
    data: Generic;
}

const ComicItem = ({updateState,data}:props) => {
    return (
        
    <Card onClick={() => updateState(data)}>
        <Img src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
        <Name>{data.title}</Name>
    </Card>
    );
}

export default ComicItem;