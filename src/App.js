import Discord from './Discord';
import DiscordRedirect from './DiscordRedirect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Discord />
          </Route>
          <Route exact path='/discord/redirect/'>
            <DiscordRedirect />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
