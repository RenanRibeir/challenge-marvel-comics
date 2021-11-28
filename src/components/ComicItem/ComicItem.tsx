import { Generic } from '../../types';
import { Card, Img , Name} from './style';

const ComicItem = ({id,name,thumbnail}:Generic) => {
    return (
        
    <Card>
        <Img src={`${thumbnail.path}.${thumbnail.extension}`}/>
        <Name>{name}</Name>
    </Card>
    );
}

export default ComicItem;