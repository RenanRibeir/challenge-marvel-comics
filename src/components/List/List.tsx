import { Generic } from "../../types";
import Item from "../Item/Item";
import { StyledList } from "./style"


interface props{
  response: Generic[];
}

function List({response}:props){

      return( 
      <StyledList>
          {response.map(
              response => {
              return(
              <Item id={response.id} name={response.name} thumbnail={response.thumbnail}/>
              )}
          )}
      </StyledList>)
}

export default List;