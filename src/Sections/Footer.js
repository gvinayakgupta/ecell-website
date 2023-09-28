import React from "react";
import Social from "../Components/Social";

function Footer() {
    return (
        <div className="footer">
            <img src="./assets/Logos/ecell-white.png" alt="E-cell VIT" />
            <span className="iia">IDEATE. INNOVATE. ACTUATE.</span>
            <a href="mailto:helloecellvit@gmail.com">helloecellvit@gmail.com</a>
            <a href="tel:+91 6306 311 799">+91 6306 311 799</a>
            <Social position="bottom" />
        </div>
    );
}

export default Footer;
