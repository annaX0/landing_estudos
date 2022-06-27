import "./menu.css";
import bg from "../assets/bg.png";

function Menu() {
  return (
    <div className="container">
      <div className="back">
        <div className="b1"></div>
        <div className="b2"></div>
        <div className="b3"></div>
        <div className="b4"></div>
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#plano">Planos</a>
        <a href="#contato">Contato</a>
      </div>
      <div className="txtBanner">
        <h2>Landing de estudos</h2>
        <button className="bntSaiba">Saiba Mais</button>
      </div>
    </div>
  );
}
export default Menu;
