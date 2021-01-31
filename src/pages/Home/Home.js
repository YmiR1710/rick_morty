import './Home.css';
import Select from "../../components/Select";
import Header from "../../components/Header";
import Card from "../../components/Card";
import LogoHeader from "../../components/LogoHeader";
import PropTypes from "prop-types";
import Pagination from "../../components/Pagination";

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

function Home({
                  characters,
                  getIdByName,
                  gender,
                  setGender,
                  status,
                  setStatus,
                  name,
                  setName,
                  currentPage,
                  setCurrentPage,
                  totalPages
              }) {

    const renderCharacter = (character) => <Card key={character.id} {...character}/>

    return (
        <div className="App">
            <LogoHeader/>
            <Header getIdByName={getIdByName} characterName={name} setCharacterName={setName}/>
            <div className="App__filters">
                <Select label="Status" selectedOption={status => setStatus(status)} value={status}
                        handleSelect={setStatus} options={statusOptions}/>
                <Select label="Gender" selectedOption={gender => setGender(gender)} value={gender}
                        handleSelect={setGender} options={genderOptions}/>
            </div>
            <div className="App__resultContainer">
                <div className="App__cardList">
                    {characters?.map(renderCharacter)}
                </div>
                <Pagination pages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </div>
    );
}

Home.propTypes = {
    characters: PropTypes.array,
    getIdByName: PropTypes.func.isRequired
};

export default Home;
