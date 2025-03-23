export default function Footer() {
  return (
    <footer className=" h-[400px] w-full bg-[#272727]  absolute ">
      <div className="flex w-[100%] h-[400px]">
        <div className=" w-[30%] h-[100%] flex items-center ml-[1%]">
          <img className="w-[25%]" src="./src/assets/logo-header.png" alt="" />
        </div>
        <div className=" w-[20%] h-[100%] flex justify-center items-center">
            <ul className="flex flex-col gap-5" >
              <li className="font-[montserrat] text-[25px] text-white" >Seções:</li>
              <li><a className="font-[montserrat] text-[20px] text-[#AEAEAE] hover:text-[#6A6A6A]" href="">Início</a></li>
              <li><a className="font-[montserrat] text-[20px] text-[#AEAEAE] hover:text-[#6A6A6A]" href="">Entrar em Contato</a></li>
              <li><a className="font-[montserrat] text-[20px] text-[#AEAEAE] hover:text-[#6A6A6A]" href="">Informações</a></li>
            </ul>
        </div>
        <div className=" w-[20%] flex  justify-center items-center h-[100%]">
            <ul className="flex flex-col gap-5" >
              <li className="font-[montserrat] text-[25px] text-white" >Contato:</li>
              <li><a className="font-[montserrat] text-[20px] text-[#AEAEAE] hover:text-[#6A6A6A] " href="">+55 (11) 91426-2903</a></li>
              <li><a className="font-[montserrat] text-[20px] text-[#AEAEAE] hover:text-[#6A6A6A]" href="">gabrielfontesdesousa@gmail.com</a></li>
            </ul>
        </div>
        <div className=" w-[20%] h-[100%] flex  justify-center items-center ">
            <ul className="flex flex-col gap-5" >
              <li className="font-[montserrat] text-[25px] text-white" >Comprar</li>
              <li><a className="font-[montserrat] text-[20px] text-[#AEAEAE] hover:text-[#6A6A6A]" href="">Anuncio OLX</a></li>
              <li><a className="font-[montserrat] text-[20px] text-[#AEAEAE] hover:text-[#6A6A6A]" href="">Mercado Livre</a></li>
            </ul>
          </div>
        </div>
    </footer>
  );
}
