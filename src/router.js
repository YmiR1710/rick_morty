import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import _ from 'lodash';
import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser";
import DetailedUserHeader from "./components/DetailedUserHeader";
import {useEffect, useState, useCallback} from "react";
import {getCharacters} from "./api";

const Router = () => {
    const [characters, setCharacters] = useState();
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [queryName, setQueryName] = useState("");

    const delayedQuery = useCallback(_.debounce(setQueryName, 500), [setQueryName]);

    const onNameChange = (value) => {
        setName(value);
        delayedQuery(value);
    };

    useEffect(() => {
        loadCharacters({
            ...(queryName && {name: queryName}),
            ...(gender && {gender}),
            ...(status && {status})
        });
    }, [queryName, gender, status]);

    const loadCharacters = async params => {
        const items = await getCharacters(params);
        if (items.error) {
            console.log(items.error);
        } else {
            setCharacters(items?.results);
        }
    }

    const getIdByName = (name) => characters.find(character => character.name.toLowerCase() === name.toLowerCase())?.id;

    const getCharacterById = (id) => characters.find(character => character.id === id);

    return <BrowserRouter>
        <Switch>
            <Route exact path="/search">
                <Home characters={characters} getIdByName={getIdByName} gender={gender} setGender={setGender}
                      status={status} setStatus={setStatus} characterName={name}
                      setCharacterName={onNameChange}/>
            </Route>
            <Route exact path="*">
                <div>
                    <DetailedUserHeader getIdByName={getIdByName}/>
                    <Switch>
                        <Route exact path="/character/:id">
                            <DetailedUser selectCharacter={getCharacterById}/>
                        </Route>
                        <Route exact path="*">
                            <Redirect to="/search"/>
                        </Route>
                    </Switch>
                </div>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;