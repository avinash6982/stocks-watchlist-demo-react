import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Watchlist from "./screens/Watchlist";
import PageNotFound from "./screens/PageNotFound";

const appRoutes = [
  {
    path: "/",
    component: <HomeScreen />,
  },
  {
    path: "watchlist",
    component: <Watchlist />,
  },
];

const AppNavigator = () => {
  return (
    <Routes>
      {appRoutes.map((item, key) => (
        <Route exact path={item.path} element={item.component} />
      ))}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppNavigator;
