import './Tag.css'
import PropTypes from "prop-types";

const Tag = ({value}) => {
    return <div className="Tag">{value}</div>
}

Tag.propTypes = {
    value: PropTypes.string.isRequired
};

export default Tag;