import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const newLink = links.map((link) => {
    return <a key= {link} href={"#" + link}>{link}</a>
  })
  
  return( 
    <nav>
      {newLink}
    </nav>
  )
}

export default NavBar;
