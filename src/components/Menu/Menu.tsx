import { Button, Limit, Title } from "./style";

interface props{
    updateState: (arg: string) => void;
    showCart: () => void;
}

const Menu = ({updateState,showCart}:props) => {

    return (
        <Title>
            <Limit>
                {/*<Button onClick={() => updateState("comics")}>Quadrinhos</Button>*;}
                {/*<Button onClick={() => updateState("characters")}>Personagens</Button>*/}
                <Button onClick={() => showCart()}>Ver meu carrinho</Button>
            </Limit>
        </Title>
    );
}

export default Menu;
