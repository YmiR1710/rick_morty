import './Home.css';
import Select from "../../components/Select";
import Header from "../../components/Header";
import Card from "../../components/Card";
import LogoHeader from "../../components/LogoHeader";
import PropTypes from "prop-types";
import Pagination from "../../components/Pagination";
import {useState} from "react";

const statusOptions = [
    {value: "", label: "all"},
    {value: "Alive", label: "alive"},
    {value: "Dead", label: "dead"},
];

const genderOptions = [
    {value: "", label: "all"},
    {value: "Male", label: "male"},
    {value: "Female", label: "female"},
];

function Home({characters, getIdByName, gender, setGender, status, setStatus, characterName, setCharacterName, pages}) {

    const renderCharacter = (character) => <Card key={character.id} {...character}/>

    const statusFilter = (character) => character.status === status || status === "";

    const genderFilter = (character) => character.gender === gender || gender === "";

    const nameFilter = (character) => character.name.toLowerCase().includes(characterName.toLowerCase());

    const [page, setPage] = useState(0);

    return (
        <div className="App">
            <LogoHeader/>
            <Header getIdByName={getIdByName} characterName={characterName} setCharacterName={setCharacterName}/>
            <div className="App__filters">
                <Select label="Status" selectedOption={status => setStatus(status)} value={status}
                        handleSelect={setStatus} options={statusOptions}/>
                <Select label="Gender" selectedOption={gender => setGender(gender)} value={gender}
                        handleSelect={setGender} options={genderOptions}/>
            </div>
            <div className="App__resultContainer">
                <div className="App__cardList">
                    {characters?.filter(statusFilter).filter(genderFilter).filter(nameFilter).map(renderCharacter)}
                </div>
                <Pagination pages={7} setCurrentPage={setPage} currentPage={page}/>
            </div>
        </div>
    );
}

Home.propTypes = {
    characters: PropTypes.array,
    getIdByName: PropTypes.func.isRequired
};

export default Home;
