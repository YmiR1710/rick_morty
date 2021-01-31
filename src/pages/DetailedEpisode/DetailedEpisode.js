import './DetailedEpisode.css';
import {NavLink, useParams} from "react-router-dom";
import InfoLabel from "../../components/InfoLabel";
import InfoValue from "../../components/InfoValue";
import {parse, format} from "date-fns";
import {getEpisode} from "../../api";
import {useEffect, useState} from "react";

const DetailedEpisode = () => {
    const {id} = useParams();

    const [episode, setEpisode] = useState("");
    const [airDate, setAirDate] = useState(format(new Date(), 'MMMM d, yyyy'));

    useEffect(() => {
        loadEpisode(id);
    }, [id]);

    const loadEpisode = async (id) => {
        const item = await getEpisode(id);
        if (item.error) {
            console.log(item.error);
        } else {
            setEpisode(item);
            setAirDate(item.air_date);
        }
    }

    const renderCharacters = (characterReference) => {
        const id = characterReference.split('/').slice(-1)[0];
        return <NavLink className="DetailedEpisode__character_link" key={id} exact to={`/character/${id}`}>
            <InfoValue text={characterReference}/>
        </NavLink>
    }

    console.log(episode.characters)

    return <div className="DetailedEpisode">
        <div className="DetailedEpisode__imageContainer">
            <div className="DetailedEpisode__links">
                <NavLink exact to="/" className="DetailedEpisode__link"
                         activeClassName="DetailedUser__link DetailedEpisode__link_active">
                    Home >
                </NavLink>
                <NavLink className="DetailedEpisode__link" activeClassName="DetailedEpisode__link DetailedEpisode__link_active"
                         exact to={`/episode/${episode.id}`}>
                    Episode: #{episode.episode}
                </NavLink>
            </div>
            <div className="DetailedEpisode__image">
                <h2 className="DetailedEpisode__image_text">
                    #{episode.episode}
                </h2>
            </div>
        </div>

        <div className="DetailedEpisode__description">
            <h1 className="DetailedEpisode__name">{episode.name}</h1>
            <div className="DetailedEpisode__mainInfo">
                <InfoLabel text="Air date"/>
                <InfoValue text={format(parse(airDate.toString(), 'MMMM d, yyyy', new Date()), 'dd MMM yyyy')}/>
            </div>
            <div className="DetailedEpisode__characters">
                <InfoLabel text="Characters:"/>
                {episode.characters?.map(renderCharacters)}
            </div>
        </div>
    </div>
}

export default DetailedEpisode;