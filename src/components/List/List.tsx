
import { Generic } from "../../types";
import Item from "../Item/Item";
import { StyledList } from "./style"

interface props{
  response: Generic[];
  updateState: (arg: Generic) => void;
}

function List({updateState,response}:props){

  const dataItem = (item: Generic):void => {
        updateState(item);
  }

      return( 
      <StyledList>
          {response.map(
              response => {
              return(
              <Item updateState={dataItem} data={{id: response.id,name: response.name,thumbnail:response.thumbnail}}/>
              )}
          )}
      </StyledList>)
}

export default List;