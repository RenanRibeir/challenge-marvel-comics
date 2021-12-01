import { Button, Limit, Title } from "./style";
import image from '../../assets/cart.png'
import imagen from '../../assets/cart-new.png'

interface props{
    //updateState?: (arg: string) => void;
    showCart: () => void;
    qtd: number
}

const Menu = ({showCart,qtd}:props) => {

    return (
        <Title>
            <Limit>
                {/*<Button onClick={() => updateState("comics")}>Quadrinhos</Button>*;}
                {/*<Button onClick={() => updateState("characters")}>Personagens</Button>*/}
                <Button onClick={() => showCart()}>
                    {qtd === 0?
                    <img src={image} style={{width: '36px',marginRight: '10px'}}/> 
                    :
                    <img src={imagen} style={{width: '36px',marginRight: '10px'}}/> }
                </Button>
            </Limit>
        </Title>
    );
}

export default Menu;
