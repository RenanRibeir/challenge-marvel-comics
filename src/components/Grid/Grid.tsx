import { Generic } from "../../types";
import ComicItem from "../ComicItem/ComicItem";
import { Limit, StyledGrid } from "./style"


interface props{
  response: Generic[];
}

export function Grid({response}:props){

    return(
    <StyledGrid>
    <Limit>
      {response.map(
          response => {
          return(
          <ComicItem id={response.id} name={response.title} thumbnail={response.thumbnail}/>
          )}
      )}
      </Limit>
    </StyledGrid>
    )
}

export default Grid;