import './DetailedUser.css';
import { format } from 'date-fns';
import DetailedUserTag from '../../components/DetailedUserTag';
import InfoValue from '../../components/InfoValue';
import InfoLabel from '../../components/InfoLabel';
import { NavLink, useParams } from "react-router-dom";
import { useState } from 'react';
import PropTypes from "prop-types";
import UserNotFound from "../../components/UserNotFound";

const DetailedUser = ({ selectCharacter }) => {
    const {id} = useParams();

    const characterInfo = selectCharacter(Number(id));

    const birthDay = Number(characterInfo?.created.substring(8, 10));
    const birthMonth = Number(characterInfo?.created.substring(5, 7)) - 1;
    const birthYear = Number(characterInfo?.created.substring(0, 4));

    const [statusOption, genderOption] = useState(null);

    return characterInfo ? (<div className="DetailedUser">

        <div className="DetailedUser__imageContainer">
            <div className="DetailedUser__links">
                <NavLink exact to="/" className="DetailedUser__link" activeClassName="DetailedUser__link DetailedUser__link_active">
                    Home >
                </NavLink>
                <NavLink className="DetailedUser__link" activeClassName="DetailedUser__link DetailedUser__link_active" exact to={`/character/${characterInfo.id}`}>
                    {characterInfo.name}
                </NavLink>
            </div>
            <img alt={characterInfo.name} src={characterInfo.image} className="DetailedUser__image"/>
        </div>

        <div className="DetailedUser__description">
            <h1 className="DetailedUser__name">#{characterInfo.id} {characterInfo.name}</h1>
            <div className="DetailedUser__tagsList">
                <DetailedUserTag value={characterInfo.status}/>
                <DetailedUserTag value={characterInfo.gender}/>
            </div>
            <div className="DetailedUser__mainInfo">
                <InfoLabel text="Species"/>
                <InfoValue text={characterInfo.species}/>
                <InfoLabel text="Origin"/>
                <InfoValue text={characterInfo.origin.name}/>
                <InfoLabel text="Birthday"/>
                <InfoValue text={format(new Date(birthYear, birthMonth, birthDay), "dd MMM yyyy")}/>
                <InfoLabel text="Last known location:"/>
                <InfoValue text={characterInfo.location.name}/>
                <InfoLabel text="First seen in:"/>
                <InfoValue text={characterInfo.origin.name}/>
            </div>
            <div className="DetailedUser__episodes">
                <InfoLabel text="Episodes:"/>
                <InfoValue text="S03E07: The Ricklantis Mixup"/>
                <InfoValue text="S01E10: Close Rick-counters of the Rick Kind"/>
                <InfoValue text="S03E07: The Ricklantis Mixup"/>
                <InfoValue text="S01E10: Close Rick-counters of the Rick Kind"/>
            </div>
        </div>
    </div>) : <UserNotFound/>;
}

DetailedUser.propTypes = {
    selectCharacter: PropTypes.func.isRequired
};

export default DetailedUser;