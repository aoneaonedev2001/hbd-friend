import React from "react";
import C2 from "../img/content/c2.png";
import C3 from "../img/content/c3.png";
import C5 from "../img/content/c5.png";
import { motion } from "framer-motion";

const Content2 = () => {
 
  return (
    <div className="mt-[100px] h-[640px] w-full relative  inset-0 ">
      <motion.img
        src={C2}
        alt=""
        className=" absolute c "
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 600,delay: 0.5  }}
      />
      <motion.img
        src={C3}
        alt=""
        className=" absolute right-0 "
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 600,delay: 1 }}
      />
      <motion.img
        src={C5}
        alt=""
        className=" absolute right-0 bottom-[0px] left-[0px] "
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5}}
      />
    </div>
  );
};

export default Content2;
