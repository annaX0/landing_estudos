import Menu from "../../menu/menu";
import bg from '../../assets/bg.png'
import About from "../about/about";
import Planos from "../planos/planos";

function Header(){
    return(
        <div>
        <Menu>
        </Menu>

        <About>

        </About>

        <Planos></Planos>
        </div>
    )
}
export default Header;