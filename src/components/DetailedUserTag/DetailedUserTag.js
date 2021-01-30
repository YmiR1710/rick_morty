import './DetailedUserTag.css'
import PropTypes from "prop-types";

const DetailedUserTag = ({value}) => {
    return <div className="DetailedUserTag">
        {value}
    </div>
}

DetailedUserTag.propTypes = {
    value: PropTypes.string.isRequired
};

export default DetailedUserTag;