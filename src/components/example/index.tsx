import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExampleArea() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 90%"], // Ativa a animação ao entrar na tela
  });


  // Animações baseadas no scroll
  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="w-full bg-[#1B1B1B] overflow-y-hidden">
       <motion.div
    ref={ref}
    style={{
      x,
      opacity}} className="flex w-full justify-center">
        <h1 className="text-white font-[montserrat] text-[40px] font-[400] py-10">Exemplos de uso</h1>
      </motion.div>
      <motion.div
    ref={ref}
    style={{
      x,
      opacity}} className="flex justify-center items-center" >
        <div className="flex content-around justify-around  w-[80%] ">
          <div className="w-[25%] flex justify-center flex-col">
            <img className="w-[99%]" src="./src/assets/exemplo1.png" alt="" />
            <div className="flex h-[80px] bg-[#E2E2E2] justify-center w-[99%] items-center rounded-b-[20px]">
              <h1 className="text-center font-[montserrat text-[30px] font-[400]">Organização</h1>
            </div>
          </div>
          <div className="w-[25%] flex justify-center flex-col">
            <img className="w-[100%]" src="./src/assets/exemplo2.png" alt="" />
            <div className="flex h-[80px] bg-[#E2E2E2] justify-center w-[99%] items-center rounded-b-[20px]">
              <h1 className="text-center font-[montserrat text-[30px] font-[400]">Praticidade</h1>
            </div>
          </div>
          <div className="w-[25%] flex justify-center flex-col">
            <img className="w-[99%]" src="./src/assets/exemplo3.png" alt="" />
            <div className="flex h-[80px] bg-[#E2E2E2] justify-center w-[99%] items-center rounded-b-[20px]">
              <h1 className="text-center font-[montserrat text-[30px] font-[400]">Eficiência</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
