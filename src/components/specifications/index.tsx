import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";


export default function SpecificationsArea() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-120% end", "center 80%"], // Ativa a animação ao entrar na tela
  });

  // Animações baseadas no scroll
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="bg-gradient-to-b from-black to-[#1B1B1B] h-auto   bg-black w-full flex justify-center pt-[100px]  ">
      <div className="">
      <motion.div
      ref={ref}
      style={{
        x,
        opacity}} className="flex max-w-[100%] justify-center items-center pt-[100px]">
          <div className="flex flex-col justify-center items-center gap-3">
            <img className="w-[15%]" src="./src/assets/checkedicon.svg" alt="" />
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-left " style={{ fontFamily: "MontSerrat, sans-serif" }}>
              <span className="relative text-white text-[30px]">
                Tipo
                <span className="absolute mt-[1px] left-0 bottom-[-7px] w-full h-1.5 bg-orange-500"></span>
              </span>
            </h1>
            <p className="text-white font-[MontSerrat] mt-5 max-w-[60%] text-center"> Rack metálico desmontável para empilhamento de pallets</p>
          </div>
        </motion.div>
        <motion.div
      ref={ref}
      style={{
        x,
        opacity}} className="flex max-w-[100%] justify-center items-center py-[100px]">
          <div className="flex flex-col justify-center items-center gap-3">
            <img className="w-[15%] " src="./src/assets/checkedicon.svg" alt="" />
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-left " style={{ fontFamily: "MontSerrat, sans-serif" }}>
              <span className="relative text-white text-[30px]">
                Tipo
                <span className="absolute mt-[1px] left-0 bottom-[-7px] w-full h-1.5 bg-orange-500"></span>
              </span>
            </h1>
            <p className="text-white font-[MontSerrat] mt-5 max-w-[60%] text-center"> Rack metálico desmontável para empilhamento de pallets</p>
          </div>
        </motion.div>

      </div>

      <motion.img
      ref={ref}
      style={{
        x,
        opacity
      }}
       // Substitua pela URL da sua imagem
      alt="Imagem Animada"  className="w-[30%]" src="./src/assets/rackimage.svg" alt="" />

      <div>
      <motion.div
      ref={ref}
      style={{
        x,
        opacity}} className="flex max-w-[100%] justify-center items-center pt-[100px]">
          <div className="flex flex-col justify-center items-center gap-3">
            <img className="w-[15%]" src="./src/assets/checkedicon.svg" alt="" />
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-left " style={{ fontFamily: "MontSerrat, sans-serif" }}>
              <span className="relative text-white text-[30px]">
                Tipo
                <span className="absolute mt-[1px] left-0 bottom-[-7px] w-full h-1.5 bg-orange-500"></span>
              </span>
            </h1>
            <p className="text-white font-[MontSerrat] mt-5 max-w-[60%] text-center"> Rack metálico desmontável para empilhamento de pallets</p>
          </div>
        </motion.div>

        <div className="flex max-w-[100%] justify-center items-center pt-[100px]">
        <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }} // Começa da direita e invisível
      animate={{ x: 0, opacity: 1 }} // Anima para a posição normal
      transition={{ duration: 1, ease: "easeOut" }} // Suaviza a transição
      style={{opacity, x}} className="flex flex-col justify-center items-center gap-3 max-w-[60% ]" >
            <img className="w-[15%] " src="./src/assets/checkedicon.svg" alt="" />
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-left " style={{ fontFamily: "MontSerrat, sans-serif" }}>
              <span className="relative text-white text-[30px]">
                Tipo
                <span className="absolute mt-[1px] left-0 bottom-[-7px] w-full h-1.5 bg-orange-500"></span>
              </span>
            </h1>
            <p className="text-white font-[MontSerrat] mt-5 max-w-[60%] text-center"> Rack metálico desmontável para empilhamento de pallets</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
