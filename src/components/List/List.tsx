import { useEffect, useState } from "react";
import api from "../../services/api";
import { Character } from "../../types";
import Item from "../Item/Item";
import { StyledList } from "./style"

const List = () =>{

    const [characters,setCharacters] = useState<Character[]>([]);

    useEffect(() => {
      api
      .get(`/characters`)
      .then(response => {
        setCharacters(response.data.data.results);
        console.log(response.data.data);
      })
  
    },[]);
    
    return(
        <StyledList>
            {characters.map(
                character => {
                return(
                <Item id={character.id} title={character.title} name={character.name} thumbnail={character.thumbnail}/>
                )}
            )}
        </StyledList>
    );
}

export default List;