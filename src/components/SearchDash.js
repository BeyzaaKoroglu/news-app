import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as topicsActions from "../redux/actions/topicsActions";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";

function SearchDash() {
  let { search_param } = useParams();

  const allTopics = useSelector((state) => state.topicsReducer);

  const dispatch = useDispatch();

  const { getTopics } = bindActionCreators(topicsActions, dispatch);

  useEffect(() => {
    getTopics(search_param);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  return <Dashboard url={search_param} />;
}

export default SearchDash;
