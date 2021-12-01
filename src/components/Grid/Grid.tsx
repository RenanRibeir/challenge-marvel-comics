import { Generic } from "../../types";
import ComicItem from "../ComicItem/ComicItem";
import { Limit, StyledGrid } from "./style"

interface props{
  response: Generic[];
  updateState: (arg: Generic) => void;
  addCart: (arg: Generic) => void;
}


export function Grid({updateState,addCart,response}:props){
  const dataItem = (item: Generic):void => {
    updateState(item);
}

    return(
    <StyledGrid>
    <Limit>
      {response.map(
          response => {
          return(
          <ComicItem updateState={dataItem} addCart={addCart} data={{id: response.id,title: response.title,thumbnail:response.thumbnail,description: response.description,qtd: response.qtd}}/>
          )}
      )}
      </Limit>
    </StyledGrid>
    )
}

export default Grid;