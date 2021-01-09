import React from "react";

import Link from "./Link";

const Header = () => {
  return (
      
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Home
      </Link>
      <Link href="/AnimalCrossing" className="item">
        AnimalCrossing
      </Link>
      <Link href="/Animalia" className="item">
        Animalia
      </Link>
      <Link href="/Api" className="item">
        Api
      </Link>
      <Link href="/All" className="item">
        All
      </Link>
    </div>
  );
};

export default Header;