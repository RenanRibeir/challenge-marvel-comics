import { Character } from '../../types'
import { Card, Img , Name} from './style';

const Item = ({id,name,thumbnail}:Character) => {
    return (
    <Card>
        <Img src={`${thumbnail.path}.${thumbnail.extension}`}/>
        <Name>{name}</Name>
    </Card>
    );
}

export default Item;