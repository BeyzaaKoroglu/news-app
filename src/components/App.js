import React from "react";
import "../App.css";
import Navi from "./Navi";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as topicsActions from "../redux/actions/topicsActions";
import { useEffect, useState } from "react";
import SearchDash from "./SearchDash";
import Detail from "./Detail";

function App() {
  const x = useSelector((state) => state.searchWordReducer);

  const dispatch = useDispatch();

  const { searchWord } = bindActionCreators(topicsActions, dispatch);

  return (
    <Router>
      <div>
        <Navi />

        <Switch>
          <Route path="/" exact children={<Dashboard url={"i"} />} />

          <Route path="/news" exact children={<Dashboard url={"news"} />} />

          <Route path="/sport" exact children={<Dashboard url={"sport"} />} />

          <Route path="/tech" exact children={<Dashboard url={"tech"} />} />

          <Route path="/world" exact children={<Dashboard url={"world"} />} />

          <Route path="/finance" exact children={<Dashboard url={"finance"} />} />

          <Route path="/politics" exact children={<Dashboard url={"politics"} />} />

          <Route path="/business" exact children={<Dashboard url={"business"} />} />

          <Route path="/economics" exact children={<Dashboard url={"economics"} />} />

          <Route path="/entertainment" exact children={<Dashboard url={"entertainment"} />} />

          <Route path="/beauty" exact children={<Dashboard url={"beauty"} />} />

          <Route path="/gaming" exact children={<Dashboard url={"gaming"} />} />

          <Route path="/search/:search_param" exact children={<SearchDash />} />

          <Route path="/detail/:title" exact children={<Detail />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
