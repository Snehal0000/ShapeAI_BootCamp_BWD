import React from "react";

var currYr = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p> Copyright @ {currYr} </p>
    </footer>
  );
}

export default Footer;
