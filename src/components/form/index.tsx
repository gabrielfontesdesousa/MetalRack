import FormInput from "../forminput";
export default function FormArea() {
  return (
<div className="bg-[url('./src/assets/orangelement.svg')] bg-cover bg-no-repeat  h-screen w-full relative">
<div className=" absolute -z-3 top-0 left-0 w-full h-full bg-gradient-to-t from-black to-[#1B1B1B]">
  <div className="absolute bg-white justify-center flex items-center w-full">
          <h1></h1>
          <form action="" className="z-2">
            <FormInput placeholder="Seu Nome" />
            <FormInput placeholder="Seu nome" />
            <FormInput placeholder="Seu Nome" />
          </form>
        </div>
      </div>
    </div>
  );
}
