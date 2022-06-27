import Menu from "../../menu/menu";
import bg from '../../assets/bg.png'
import About from "../about/about";
import Planos from "../planos/planos";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

function Header(){
    return(
        <div>
        <Menu>
        </Menu>

        <About>

        </About>

        <Planos></Planos>

        <Contact></Contact>
        <Footer></Footer>
        </div>
    )
}
export default Header;