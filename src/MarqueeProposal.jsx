import React, { useState, useEffect } from "react";

const MarqueeProposal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sentences = [
    "Aap meri duniya ko ek alag si roshni deti hain. ✨",
    "Aapke saath har pal shaant aur khaas lagta hai. 🌸",
    "Aapke hone se meri duniya zyada poori si lagti hai. 🤍",
    "Aapki presence se dil mein ek pyaari si khushi mehsoos hoti hai. 😊",
    "Jab aap paas hoti hain, sab kuch zyada achha lagta hai. 🌷",
    "Future mein bhi main aapko apni zindagi ka hissa dekhna chahta hoon. 💛",
    "Aapko yaad karte hi mera din achha ho jaata hai. ☀️",
    "Aap meri zindagi ka woh khaas hissa hain jo sab kuch poora sa mehsoos karata hai. 😊",
    "Aap meri duniya ko aur zyada roshan aur khush bana deti hain.✨",
    "Aap ek aisa khwab hain jise main kabhi khatam hote hue nahi dekhna chahta.🤍",
    "Kya aap meri zindagi ki hamesha ke liye saathi banna pasand karengi? 💓",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 9000); // Change sentence every 9 seconds
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div
      style={{
        width: "50%",
        height: "75px",
        margin: "50px auto",
        borderRadius: "25px",
        overflow: "hidden",
        position: "relative",
        background: "transparent",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "4px solid #ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          position: "absolute",
          animation: "marquee 10s linear infinite",
        }}
        key={currentIndex}
      >
        <span
          style={{
            fontSize: "2rem",
            fontFamily: "Charm, serif", 
            // fontFamily: "Beau Rivage, serif", 
            fontStyle: "normal",
            fontWeight: "700",
            color: "#191a19",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          {sentences[currentIndex]}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%); /* Start fully off-screen to the right */
          }
          100% {
            transform: translateX(-100%); /* End fully off-screen to the left */
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeProposal;
