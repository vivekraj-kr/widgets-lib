import React from 'react';
import Link from "./Link";

const Header = () => {
    return(
        <header className="ui secondary pointing menu">
            <Link className="item" href="/"> Accordion </Link>
            <Link className="item" href="/search"> Wiki search </Link>
            <Link className="item" href="/dropdown"> Dropdown </Link>
            <Link className="item" href="/translate"> Translate </Link>
        </header>
    )
}

export default Header;