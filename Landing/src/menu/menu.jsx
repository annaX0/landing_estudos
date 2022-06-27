import "./menu.css";
import bg from "../assets/bg.png";

function Menu() {
  return (
    <div className="container">
      <img className="back" src={bg}></img>
      <div className="menu">
        <a>Home</a>
        <a>Sobre</a>
        <a>Planos</a>
        <a>Contato</a>
      </div>
      <div className="txtBanner">
        <h2>Landing de estudos</h2>
        <button className="bntSaiba">Saiba Mais</button>
      </div>
    </div>
  );
}
export default Menu;