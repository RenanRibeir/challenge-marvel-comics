import image from '../../assets/Logo.png'
import Menu from '../Menu/Menu';
import { Img, Tittle } from './style';

interface props{
    showCart: () => void;
    qtd: number
}

const Logo = ({showCart,qtd}:props) => {
    return (
        <Tittle>
            <Img src={image}></Img>
            <Menu qtd={qtd} showCart={showCart}/>
        </Tittle>
    )
}

export default Logo;