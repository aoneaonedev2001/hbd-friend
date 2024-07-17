import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { motion } from "framer-motion";
import F5 from "../img/front/f5.png";
import A1 from "../img/aleart/a1.png";
import A2 from "../img/aleart/a2.png";
import A3 from "../img/aleart/a3.png";
import A4 from "../img/aleart/a4.png";

import A5 from "../img/aleart/a5.png";
import A6 from "../img/aleart/a6.png";
import A7 from "../img/aleart/a7.png";
import F6 from "../img/front/f6.png";
import F3 from "../img/front/f3.png";

const Content4 = () => {
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShowSS, setIsShowSS] = useState(false);
  const [isShow3, setIsShow3] = useState(false);

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert("Browser doesn't support speech recognition.");
    }
  }, [browserSupportsSpeechRecognition]);

  const startBlow = async () => {
    await SpeechRecognition.startListening();

    if (isShow2) {
      setTimeout(() => {
        setIsShowSS(true);
      }, 6000);
      
      setTimeout(() => {
        setIsShow3(true);
      }, 10000);
    } else {
      setTimeout(() => {
        setIsShow1(true);
        setIsShow2(true);
      }, 7000);
    }
  };

  // const endBlow =  () => {
  //   SpeechRecognition.startListening();

  // };

  return (
    <div>
      {isShow3 ? (
        <Showfinal1 />
      ) : (
        <>
          <motion.img
            src={F5}
            alt=""
            className="py-[30px]"
            initial={{ y: -5 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.25,
            }}
          />

          <div className="relative flex flex-col items-center mb-[60px]">
            {isShowSS ? '' :
              <img src={A2} alt="" className="" />
            } 
            <img src={A1} alt="" className="w-[318px] h-[255px]" />

            <button
              onClick={startBlow}
              className="p-[10px] my-[30px] border-[1px] rounded-[10px]"
            >
              Start Blow
            </button>
            <p>Microphone: {listening ? "on" : "off"}</p>
            <p>{transcript}</p>

            {isShow1 && (
              <>
                <motion.img
                  src={A3}
                  alt=""
                  className="absolute z-10 left-0"
                  initial={{ opacity: 0, x: -75 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.img
                  src={A4}
                  alt=""
                  className="absolute z-20 bottom-0 left-[50px] cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 600, delay: 3 }}
                  onClick={() => setIsShow1(false)}
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const Showfinal1 = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <motion.img src={F6} alt="" className=""
         initial={{ opacity: 0}}
         animate={{ opacity: 1}}
         transition={{
               repeat: Infinity,
               repeatType: "reverse",
               duration: 0.25,
             }} 
         />
        <img src={F3} alt="" className="" />
      </div>
      <div className="relative h-[600px] w-[380px] inset-0">
        <motion.img src={A7} alt="" className="absolute z-10" />
        <motion.img
          src={A6}
          alt=""
          className="absolute z-20 left-[33px] top-[96px]"

        />
        <motion.img 
        src={A5} 
        alt="" 
        className="absolute z-20 left-[0px]"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.25,
            }} />
      </div>
    </div>
  );
};

export default Content4;
