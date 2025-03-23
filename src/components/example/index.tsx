export default function ExampleArea() {
  return (
    <div className="w-full bg-[#1B1B1B]">
      <div className="flex w-full justify-center">
        <h1 className="text-white font-[montserrat] text-[40px] font-[400] py-10">Exemplos de uso</h1>
      </div>
      <div className="flex justify-center items-center" >
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
      </div>
    </div>
  );
}
