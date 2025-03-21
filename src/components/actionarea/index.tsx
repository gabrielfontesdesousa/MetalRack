import ProductFigureHome from "../productfigurehome";
import CallToActionArea from "../calltoactionarea";
export default function ActionArea(){
  return(
    <div className='flex'>
      <div className="ml-[200px] mt-[100px] flex text-white px-6 max-w-[40%]">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-left " style={{fontFamily: "MontSerrat, sans-serif"}}>
          <span className="relative">
              Organize
              <span className="absolute mt-[1px] left-0 bottom-[-7px] w-full h-1 bg-orange-500"></span>
              </span> seu espaço com <br />
            eficiência e <span className="relative">
              segurança!
              <span className="absolute left-0 bottom-[-7px] w-full h-1 bg-orange-500"></span>
            </span>
          </h1>
          <p className="mt-10 text-[#A7A7A7] text-[20px] text-left" style={{ fontFamily: "MontSerrat, sans-serif", fontWeight: 400 }}>
            Nossos racks metálicos para paletes são a solução ideal para otimizar
            seu espaço, aumentar a produtividade e garantir a segurança do seu
            estoque. Peça já o seu!
          </p>
          <CallToActionArea></CallToActionArea>
        </div>
      </div>
       <ProductFigureHome></ProductFigureHome>
    </div>
  );
}
