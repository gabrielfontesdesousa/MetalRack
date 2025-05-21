import './style.css';
import logoheader from '../../assets/logo-header.png'
export function Header(){
  return(
    <header className=" w-full h-[105px] flex z-0">
      <img className="w-[80px] h-[80px] ml-[30px] mt-[20px]" src={logoheader} alt="" />
        <div className="w-full h-[105px] flex justify-end">
          <div className="flex w-2/5 h-[105px] items-center justify-center">
            <nav className="flex w-4/5 h-[105px] justify-around">
              <button className="button-header">
                <a href="">Informações</a>
              </button>
              <button className="button-header">
                  <a href="">Orçamentos</a>
              </button>
              <button className="button-header">
                <a href="">Contato</a>
              </button>
            </nav>
          </div>
        </div>
    </header>
  );
}
export default Header;
