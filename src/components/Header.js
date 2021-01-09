import React from "react";

import Link from "./Link";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link href="/" className="navbar-brand">
                Home
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link href="/AnimalCrossing" className="nav-link">
                            AnimalCrossing
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/Animalia" className="nav-link">
                            Animalia
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/Api" className="nav-link">
                            Api
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/All" className="nav-link">
                            All
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Header;