import './UserNotFound.css';
import {ReactComponent as Logo} from "../../assets/icons/not_found.svg";

const UserNotFound = () => {
    return <div className="UserNotFound">
        <h2 className="UserNotFound__info">404: Character Not Found</h2>
        <Logo className="UserNotFound__image"/>
    </div>;
};

export default UserNotFound;