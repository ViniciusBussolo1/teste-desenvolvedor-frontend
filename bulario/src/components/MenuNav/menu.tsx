import { FaCircleHalfStroke } from "react-icons/fa6";
import './stylemenu.scss'

export const MenuNav = () => {
  return (
    <>
      <div>
        <header className="menu-nav">
          <div>
            <img src="/logo.png" alt="" />
          </div>
          <div>
            <button>Buscar</button>
            <button>Sobre nos</button>
          </div>

          <div>
            <button><FaCircleHalfStroke /></button>
          </div>
        </header>
      </div>

    </>
  );
};