import './DetailedUserHeader.css'
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import Search from "../Search";
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {QUOTES} from "../../utils";

const DetailedUserHeader = ({getIdByName}) => {
    const [characterName, setCharacterName] = useState("");
    const [currentQuote, setCurrentQuote] = useState(QUOTES[Math.floor(Math.random() * QUOTES.length)]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
        }, 30000);
        return () => clearInterval(interval);
    }, [currentQuote]);

    return <div className="DetailedUserHeader">
        <div className="DetailedUserHeader__logoContainer">
            <Link to="/">
                <Logo className="DetailedUserHeader__logo"/>
            </Link>
        </div>
        <div className="DetailedUserHeader__quote">
            <h2 className="DetailedUserHeader__quote_text">
                {currentQuote}
            </h2>
        </div>
        <div className="DetailedUserHeader__searchContainer">
            <Search getIdByName={getIdByName} className="DetailedUserHeader__search" value={characterName}
                    setValue={setCharacterName}/>
        </div>
    </div>
}

DetailedUserHeader.propTypes = {
    getIdByName: PropTypes.func.isRequired
}

export default DetailedUserHeader;