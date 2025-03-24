import FormInput from "../forminput";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function FormArea() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 80%"], // A animação começa quando a div entra na tela
  });

  // Animações para a div com base no scroll
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]); // Sai da direita para a posição final
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Aumenta a opacidade conforme rola

  return (
    <div style={{overflow:"hidden"}} className="bg-[url('./src/assets/orangelement.svg')] bg-cover bg-no-repeat flex h-[100vh] w-full ">
      <div className="  flex -z-3 top-0 left-0 w-full h-full bg-gradient-to-t from-black to-[#1B1B1B]"></div>
      <div>
      </div>
      <div className=" absolute w-full h-[100%] z-3 flex items-center">
        <div className=" flex flex-col bg-white w-[30%]  h-[70%] ml-[14%] mt-[8%] rounded-4xl shadow-[0_0_35px_10px_rgb(155,155,155)]">
          <div className="w-full flex ml-[7%] pt-[10%] text-[25px] font-[montserrat] ">
            <h1 >Entre em contato conosco</h1>
          </div>
          <form className="flex flex-col gap-[70px] items-center pt-[30px] " action="">
            <FormInput placeholder="Seu Nome"></FormInput>
            <FormInput placeholder="Seu Email"></FormInput>
            <FormInput placeholder="Seu Número (opcional)"></FormInput>
            <button className="w-[90%] h-[70px] bg-[#FF8800] rounded-[50px] text-2xl font-[montserrat] text-white transition duration-300 hover:bg-amber-700 ">Enviar</button>
          </form>
        </div>

        <div className=" w-[60%]  h-full flex items-center justify-center pt-[80px] ">
        <motion.div
       ref={ref}
       initial={{ x: 100, opacity: 0 }} // Começa da direita e invisível
       animate={{ x: 0, opacity: 1 }} // Anima para a posição normal
       transition={{ duration: 1, ease: "easeOut" }} // Suaviza a transição
       style={{
        opacity,
        x,


        }}  className="  w-[70%] max-w-[50%]  flex h-[50%]  flex-col gap-[20px]  ">
            <h1 className=" font-[montserrat] text-[30px] text-[#FF8800] ">Condição</h1>
            <p className=" font-[montserrat] text-[20px] text-white " >Os racks podem apresentar sinais de desgaste, como riscos, amassados e ferrugem superficial. Apesar disso, garantimos que todos estão estruturalmente funcionais e prontos para uso.</p>
            <h1 className=" font-[montserrat] text-[30px] text-[#FF8800] " >Valor unitário</h1>
            <p className=" font-[montserrat] text-[20px] text-white ">O preço informado refere-se a uma unidade do rack. Caso tenha interesse em adquirir múltiplas unidades, entre em contato para negociações e possíveis descontos.</p>
            <h1 className=" font-[montserrat] text-[30px] text-[#FF8800] "> Paletes não Inclusos:</h1>
            <p className=" font-[montserrat] text-[20px] text-white ">A venda é exclusivamente dos racks metálicos, sem os paletes de madeira ou plástico mostrados em algumas imagens ilustrativas.</p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
