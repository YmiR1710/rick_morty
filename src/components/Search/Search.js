import characters from '../../assets/json/stubCharacters.json';
import './Search.css';
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

const Search = ({ className, value, setValue }) => {
    const handleChange = ({ target : { value } }) => {
        setValue(value);
    };

    let history = useHistory();

    const redirect = () => {
        history.push(`/character/${getIdByName(value)}`);
    }

    const getIdByName = (name) => characters.results.find(character => character.name.toLowerCase() === name.toLowerCase())?.id;

    return <div className={`Search ${className}`}>
        <input className="Search__input" placeholder="search by name" value={value} onChange={handleChange}/>
        <button onClick={redirect} className="Search__button">Find Character</button>
    </div>
}

Search.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default Search;