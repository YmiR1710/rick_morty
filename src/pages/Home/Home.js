import './Home.css';
import { useState } from 'react';
import Select from "../../components/Select";
import Header from "../../components/Header";
import Card from "../../components/Card";
import LogoHeader from "../../components/LogoHeader";
import PropTypes from "prop-types";

const statusOptions = [
    { value: "", label: "all" },
    { value: "Alive", label: "alive" },
    { value: "Dead", label: "dead" },
];

const genderOptions = [
    { value: "", label: "all" },
    { value: "Male", label: "male" },
    { value: "Female", label: "female" },
];

function Home({ characters }) {
    const renderCharacter = (character) => <Card key={character.id} {...character}/>

    const [gender, setGender] = useState("");

    const [status, setStatus] = useState("");

    const statusFilter = (character)  => character.status === status || status === "";

    const genderFilter = (character) => character.gender === gender || gender === "";

    return (
        <div className="App">
            <LogoHeader/>
            <Header/>
            <div className="App__filters">
                <Select label="Status" selectedOption={status => setStatus(status)} value={status} handleSelect={setStatus} options={statusOptions}/>
                <Select label="Gender" selectedOption={gender => setGender(gender)} value={gender} handleSelect={setGender} options={genderOptions}/>
            </div>
            <div className="App__resultContainer">
                <div className="App__cardList">
                    {characters?.filter(statusFilter).filter(genderFilter).map(renderCharacter)}
                </div>
            </div>
        </div>
  );
}

Home.propTypes = {
    characters: PropTypes.array.isRequired
};

export default Home;
