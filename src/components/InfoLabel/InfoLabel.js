import './InfoLabel.css';
import PropTypes from "prop-types";

const InfoLabel = ({text, className}) => {
    return <p className={`InfoLabel ${className}`}>{text}</p>
}

InfoLabel.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default InfoLabel;