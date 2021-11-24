import { useEffect, useState } from "react";
import api from "../../services/api";
import { Character } from "../../types";
import Item from "../Item/Item";

const List = () =>{

    const [characters,setCharacters] = useState<Character[]>([]);

    useEffect(() => {
      api
      .get(`/characters`)
      .then(response => {
        setCharacters(response.data.data.results);
      })
  
    },[]);
    
    return(
        <ul>
            {characters.map(
                character => {
                return(
                <Item id={character.id} name={character.name} thumbnail={character.thumbnail}/>
                )}
            )}
        </ul>
    );
}

export default List;