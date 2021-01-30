import './Header.css'
import Search from "../Search";
import PropTypes from "prop-types";

const Header = ({characterName, setCharacterName, getIdByName}) => {

    return <div className="Header">
        <Search className="Header__Search" value={characterName} setValue={setCharacterName} getIdByName={getIdByName}/>
    </div>
}

Header.propTypes = {
    getIdByName: PropTypes.func.isRequired
}

export default Header;