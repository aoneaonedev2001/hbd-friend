import React from "react";
import { motion } from "framer-motion";
import F1 from "../img/front/f1.png";
import F2 from "../img/front/f2.png";
import F3 from "../img/front/f3.png";

import C1 from "../img/content/c1.png";


const Content1 = () => {
  return (
    <div className="">
      <div>
        <div className="flex pt-[50px]  ">
          <motion.img 
          src={F1} 
          alt="" 
          className="w-[168px] h-[45px]"
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
           />
          <motion.img 
          src={F2} 
          alt="" 
          className="w-[168px] h-[45px]"
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
           />
        </div>
        <motion.img 
        src={F3} 
        alt="" 
        className="mx-[30px]"
        initial={{ opacity: 0, y: -75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }} />
      </div>
      <motion.img src={C1} alt="" className=""
      initial={{  x: -10 }}
      animate={{  x: 10}}
      
      transition={{ repeat:Infinity,repeatType:"reverse",duration: 1}}
        />
      
    </div>
  );
};

export default Content1;
