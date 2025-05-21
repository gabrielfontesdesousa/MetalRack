import { motion } from "framer-motion";
import empilhadeira from '../../assets/Empilhadeira.svg'
export default function ProductFigureHome(){
  return(
    <motion.div
    initial={{ y: 400, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="pl-[08%] items-end">
      <img className="w-[90%]"  src={empilhadeira} alt="" />
    </motion.div>
  );
}
