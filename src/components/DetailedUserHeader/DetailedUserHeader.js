import './DetailedUserHeader.css'
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import Search from "../Search";
import {Link} from "react-router-dom";
import { useState } from 'react';

const DetailedUserHeader = () => {
    const [characterName, setCharacterName] = useState("");

    return <div className="DetailedUserHeader">
        <div className="DetailedUserHeader__logoContainer">
            <Link to="/">
                <Logo className="DetailedUserHeader__logo"/>
            </Link>
        </div>
        <div className="DetailedUserHeader__searchContainer">
            <Search className="DetailedUserHeader__search" value={characterName} setValue={setCharacterName}/>
        </div>
    </div>
}

export default DetailedUserHeader;