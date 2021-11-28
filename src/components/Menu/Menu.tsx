import { Button, Limit, Title } from "./style";

interface props{
    updateState: (arg: string) => void;
}

const Menu = ({updateState}:props) => {

    return (
        <Title>
            <Limit>
                <Button onClick={() => updateState("comics")}>Quadrinhos</Button>
                <Button onClick={() => updateState("characters")}>Personagens</Button>
                <Button onClick={() => updateState("events")}>Eventos</Button>
            </Limit>
        </Title>
    );
}

export default Menu;
