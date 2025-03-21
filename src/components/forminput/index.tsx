
type FormProps = {placeholder:string}


export default function FormInput({placeholder}:FormProps ){
  return(
      <input type="text"placeholder={placeholder} />
  );
}
