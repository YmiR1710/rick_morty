import './Card.css'
import Tag from '../Tag'
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import InfoLabel from "../InfoLabel";
import InfoValue from "../InfoValue";
import PropTypes from 'prop-types';

const Card = ({id, name, status, species, type, gender, origin, location, image, episode, url, created}) => {
    const history = useHistory();

    const handleClick = () => history.push('/character/${id}');

    return <div className="Card">
        <Link to={`/character/${id}`}>
            <div className="Card__imageHolder">
                <img alt={name} className="Card__image" src={image}/>
            </div>
        </Link>
        <div className="Card__content">
            <Link className="Card__link" to={`/character/${id}`}>
                <div onClick={handleClick}>
                    <h1 className="Card__name">{name}</h1>
                </div>
            </Link>
            <div className="Card__tags">
                <Tag value={status}/>
                <Tag value={gender}/>
            </div>
            <div className="Card__mainInfo">
                <InfoLabel className = "Card__infoLabel" text="Last known location:"></InfoLabel>
                <InfoValue className = "Card__infoValue" text={location?.name}></InfoValue>
                <InfoLabel className = "Card__infoLabel" text="First seen in:"></InfoLabel>
                <InfoValue className = "Card__infoValue" text={origin?.name}></InfoValue>
            </div>
        </div>
    </div>
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Alive', 'Dead', 'unknown',]).isRequired,
    gender: PropTypes.oneOf(['Male', 'Female', 'unknown', 'Genderless']).isRequired,
    origin: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    location: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Card;