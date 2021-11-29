import { Generic } from "../../types";
import ComicItem from "../ComicItem/ComicItem";
import { Limit, StyledGrid } from "./style"

interface props{
  response: Generic[];
  updateState: (arg: Generic) => void;
}


export function Grid({updateState,response}:props){
  const dataItem = (item: Generic):void => {
    updateState(item);
}

    return(
    <StyledGrid>
    <Limit>
      {response.map(
          response => {
          return(
          <ComicItem updateState={dataItem} data={{id: response.id,title: response.title,thumbnail:response.thumbnail,description: response.description}}/>
          )}
      )}
      </Limit>
    </StyledGrid>
    )
}

export default Grid;