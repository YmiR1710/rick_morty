import './InfoValue.css';
import PropTypes from "prop-types";

const InfoValue = ({text, className}) => {
    return <p className={`InfoValue ${className}`}>{text}</p>
}

InfoValue.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default InfoValue;