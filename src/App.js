//Libary Imports
import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Components Imports
import GlobalStyle from "./components/layout/GlobalStyles";
import Layout from "./components/layout/Layout";

//page imports
import ShowSpells from "./pages/ShowSpells"
import Welcome from "./pages/Welcome";
import AddSpell from "./pages/AddSpell";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  //Figure out the current screen width
  //Pass that to components 

  //Check if user is logged in within useEffect whenever the logged in value of the store is changed
  return (
    <Fragment>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path='/' exact>
            {/* Should redirect to welcome if the user is not logged in
            Or to spell-list if the user is logged in*/}
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/show-spells'>
            <ShowSpells />
          </Route>
          <Route path='/add-spell'>
            <AddSpell />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
