import './LogoHeader.css';
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";

const LogoHeader = () => {
    return <h1 className="LogoHeader">
            <span>
                Surf the
            </span>
            <Logo className="LogoHeader__logo"/>
            <span>
                Universe
            </span>
    </h1>
}

export default LogoHeader;