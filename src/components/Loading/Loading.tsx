import image from '../../assets/marvel_comics.png'
import { Img, Tittle } from './style';

interface Props{
    show: boolean;
}

const Loading = ({show}:Props) => {

    function showLoading(visible:boolean){

        if(visible){
         return (
             <Tittle>
             <div>
             <Img src={image}></Img>
             </div>
             </Tittle>)
         }
     
     }

    return (
        <div>
            {showLoading(show)}
        </div>
        )
}

export default Loading  ;