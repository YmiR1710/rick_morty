import './DetailedUserHeader.css'
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import Search from "../Search";
import {Link} from "react-router-dom";
import {useState} from 'react';
import PropTypes from "prop-types";

const DetailedUserHeader = ({getIdByName}) => {
    const [characterName, setCharacterName] = useState("");

    return <div className="DetailedUserHeader">
        <div className="DetailedUserHeader__logoContainer">
            <Link to="/">
                <Logo className="DetailedUserHeader__logo"/>
            </Link>
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