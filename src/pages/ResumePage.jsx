import React, { useEffect } from "react";
import ANPResume from "../assets/resume/ANPResume.pdf";

const Portfolio = () => {
  useEffect(() => {
    const resizeEmbed = () => {
      const embed = document.getElementById("pdfEmbed");
      if (embed) {
        const windowHeight = window.innerHeight;
        embed.style.height = `${windowHeight}px`;
      }
    };

    resizeEmbed();
    window.addEventListener("resize", resizeEmbed);
    return () => window.removeEventListener("resize", resizeEmbed);
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <embed
        id="pdfEmbed"
        src={ANPResume}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default Portfolio;
