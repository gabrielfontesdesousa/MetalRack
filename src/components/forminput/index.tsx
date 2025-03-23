
type FormProps = {placeholder:string}


export default function FormInput({placeholder}:FormProps ){
  return(
      <input className="w-[90%] bg-[#E6E6E6] rounded-[50px] h-[70px] indent-5 font-[montserrat] text-[20px]   " type="text"placeholder={placeholder} />
  );
}
