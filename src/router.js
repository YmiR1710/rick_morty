import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import _ from 'lodash';
import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser";
import DetailedUserHeader from "./components/DetailedUserHeader";
import {useCallback, useEffect, useState} from "react";
import {getCharacters} from "./api";

const Router = () => {
    const [characters, setCharacters] = useState();
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [queryName, setQueryName] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const delayedQuery = useCallback(_.debounce(setQueryName, 500), [setQueryName]);

    const onNameChange = (value) => {
        setName(value);
        delayedQuery(value);
    };

    useEffect(() => {
        setCurrentPage(0);
    }, [queryName, gender, status])

    useEffect(() => {
        loadCharacters(currentPage, {
            ...(queryName && {name: queryName}),
            ...(gender && {gender}),
            ...(status && {status})
        });
    }, [queryName, gender, status, currentPage]);

    const loadCharacters = async (page = 0, params) => {
        setIsLoading(true);
        const items = await getCharacters(page + 1, params);
        setIsLoading(false);
        if (items.error) {
            console.log(items.error);
        } else {
            setCharacters(items?.results);
            setPages(items?.info?.pages || 0);
        }
    }

    const getIdByName = (name) => characters.find(character => character.name.toLowerCase() === name.toLowerCase())?.id;

    const getCharacterById = (id) => characters.find(character => character.id === id);

    return <BrowserRouter>
        <Switch>
            <Route exact path="/search">
                <Home characters={characters} getIdByName={getIdByName} gender={gender} setGender={setGender}
                      status={status} setStatus={setStatus} name={name}
                      setName={onNameChange} currentPage={currentPage} setCurrentPage={setCurrentPage}
                      totalPages={pages}/>
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