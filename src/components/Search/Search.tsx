import { useState } from "react";

interface props{
    searcha: (arg: string) => void;
}

const Search = ({searcha}:props) => {

    const [text,setText] = useState<string>();
    
    const onSearch = (q:string) =>{
        setText(q);
        searcha(q);
    }

    return (
        <section>
            <form>
                <input type="text"
                placeholder="Digite um personagem"
                autoFocus
                onChange={(e) => onSearch(e.target.value)}
                value={text}/>
            </form>
        </section>
    );
}

export default Search;