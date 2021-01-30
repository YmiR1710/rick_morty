import './Search.css';
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

const Search = ({className, value, setValue, getIdByName}) => {
    const handleChange = ({target: {value}}) => {
        setValue(value);
    };

    let history = useHistory();

    const redirect = () => {
        history.push(`/character/${getIdByName(value)}`);
    }

    return <div className={`Search ${className}`}>
        <input className="Search__input" placeholder="search by name" value={value} onChange={handleChange}/>
        <button onClick={redirect} className="Search__button">Find Character</button>
    </div>
}

Search.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    getIdByName: PropTypes.func.isRequired
}

export default Search;