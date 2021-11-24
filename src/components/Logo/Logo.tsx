import image from '../../assets/Logo.png'
import { Img, Tittle } from './style';

const Logo = () => {
    return (
    <Tittle><div>
        <Img src={image}></Img>
        </div>
    </Tittle>
    )
}

export default Logo;