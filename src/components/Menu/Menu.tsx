import { Button, Limit, Title } from "./style";

interface props{
    updateState: (arg: string) => void;
    showCart: () => void;
    qtd: number
}

const Menu = ({updateState,showCart,qtd}:props) => {

    return (
        <Title>
            <Limit>
                {/*<Button onClick={() => updateState("comics")}>Quadrinhos</Button>*;}
                {/*<Button onClick={() => updateState("characters")}>Personagens</Button>*/}
                <Button onClick={() => showCart()}>Ver meu carrinho ({qtd})</Button>
            </Limit>
        </Title>
    );
}

export default Menu;
