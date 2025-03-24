import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AtributesArea(){
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible)

  useEffect(() => {
    setIsVisible(true); // Ativa a animação quando o componente é montado
  }, []);
	return(
    <motion.div
    initial={{ y: 100, opacity: 0 }} // Começa de baixo e invisível
    animate={{ y: 0, opacity: 1 }} // Anima para a posição normal
    transition={{ duration: 1, ease: "easeOut" }}
    className="max-w-[100%] justify-center absolute bottom-[25px]  items-center">
			<ul className="flex flex-row items-center justify-center">
				<li className="flex flex-row items-center justify-center">
					<img  className="w-[80px]" src="../src/assets/paleteicon.svg" alt="" />
					<p className="pl-[25px] w-[45%] text-white font-[MontSerrat] text-[14px]  font-[200]">Racks feitos em metal galvanizado, garantindo longa vida útil e máxima segurança para o seu estoque.</p>
				</li>
				<li className="flex flex-row items-center justify-center">
					<img className="w-[80px]"  src="../src/assets/economiaicon.svg" alt="" />
					<p className="pl-[25px]  w-[50%] text-white font-[MontSerrat]  text-[14px] font-[200]">Compatível com diferentes tipos de cargas e mercadorias paletizadas.</p>
				</li>
				<li className="flex flex-row items-center justify-center">
				<img className="w-[80px]"  src="../src/assets/eficienciaicon.svg" alt="" />
				<p className="pl-[25px]  w-[55%] text-white font-[MontSerrat]  text-[14px]  font-[200]">Produto usado com excelente funcionalidade, garantindo economia sem comprometer a eficiência.</p>
				</li>
			</ul>
		</motion.div>
	);
}
