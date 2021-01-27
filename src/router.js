import characters from './assets/json/stubCharacters.json';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser";
import DetailedUserHeader from "./components/DetailedUserHeader";

const Router = () => {
    const charactersList = characters.results;

    const getCharacterById = (id) => charactersList.find(character => character.id === id);

    return <BrowserRouter>
        <Switch>
            <Route exact path="/search">
                <Home characters={ charactersList }/>
            </Route>
            <Route exact path="*">
                <div>
                    <DetailedUserHeader/>
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