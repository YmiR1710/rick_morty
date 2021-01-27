import './Header.css'
import Search from "../Search";
import { useState } from 'react';

const Header = () => {
    const [characterName, setCharacterName] = useState("");

    return <div className="Header">
        <Search className="Header__Search" value={characterName} setValue={setCharacterName}/>
    </div>
}

export default Header;