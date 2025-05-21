import './style.css'
import { motion } from "framer-motion";

export default function CallToActionArea(){
  return(
    <motion.div
    initial={{ x: -200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="container-button">
        <button className="button-buy-type2"><a href="">Compre via OLX</a></button>
        <button className="button-buy-type1"><a href=""> Mercado Livre</a></button>
    </motion.div>

  );
}
