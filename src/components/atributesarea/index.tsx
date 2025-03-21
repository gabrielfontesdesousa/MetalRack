export default function AtributesArea(){
	return(
		<div className="max-w-[100%] justify-center items-center">
			<ul className="flex flex-row items-center justify-center bg-black">
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
		</div>
	);
}
