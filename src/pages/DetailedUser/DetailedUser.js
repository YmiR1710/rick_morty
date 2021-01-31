import './DetailedUser.css';
import {format} from 'date-fns';
import DetailedUserTag from '../../components/DetailedUserTag';
import InfoValue from '../../components/InfoValue';
import InfoLabel from '../../components/InfoLabel';
import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import UserNotFound from "../../components/UserNotFound";
import {getCharacter, getEpisode} from "../../api";

const DetailedUser = () => {
    const {id} = useParams();

    const [character, setCharacter] = useState();

    useEffect(() => {
        loadCharacter(id);
    }, [id]);

    const loadCharacter = async (id) => {
        const item = await getCharacter(id);
        if (item.error) {
            console.log(item.error);
        } else {
            setCharacter(item);
        }
    }

    const renderEpisodes = (episodeReference) => {
        const id = episodeReference.split('/').slice(-1)[0];
        return <NavLink className="DetailedUser__episode_link" key={id} exact to={`/episode/${id}`}>
            <InfoValue text={episodeReference}/>
        </NavLink>
    }

    const birthDay = Number(character?.created.substring(8, 10));
    const birthMonth = Number(character?.created.substring(5, 7)) - 1;
    const birthYear = Number(character?.created.substring(0, 4));

    return character ? (<div className="DetailedUser">

        <div className="DetailedUser__imageContainer">
            <div className="DetailedUser__links">
                <NavLink exact to="/" className="DetailedUser__link"
                         activeClassName="DetailedUser__link DetailedUser__link_active">
                    Home >
                </NavLink>
                <NavLink className="DetailedUser__link" activeClassName="DetailedUser__link DetailedUser__link_active"
                         exact to={`/character/${character.id}`}>
                    {character.name}
                </NavLink>
            </div>
            <img alt={character.name} src={character.image} className="DetailedUser__image"/>
        </div>

        <div className="DetailedUser__description">
            <h1 className="DetailedUser__name">#{character.id} {character.name}</h1>
            <div className="DetailedUser__tagsList">
                <DetailedUserTag value={character.status}/>
                <DetailedUserTag value={character.gender}/>
            </div>
            <div className="DetailedUser__mainInfo">
                <InfoLabel text="Species"/>
                <InfoValue text={character.species}/>
                <InfoLabel text="Origin"/>
                <InfoValue text={character.origin.name}/>
                <InfoLabel text="Birthday"/>
                <InfoValue text={format(new Date(birthYear, birthMonth, birthDay), "dd MMM yyyy")}/>
                <InfoLabel text="Last known location:"/>
                <InfoValue text={character.location.name}/>
                <InfoLabel text="First seen in:"/>
                <InfoValue text={character.origin.name}/>
            </div>
            <div className="DetailedUser__episodes">
                <InfoLabel text="Episodes:"/>
                {character.episode?.map(renderEpisodes)}
            </div>
        </div>
    </div>) : <UserNotFound/>;
}

export default DetailedUser;