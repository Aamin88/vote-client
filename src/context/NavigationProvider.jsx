import { createContext, useState } from "react";

export const NavContext = createContext();

function NavigationProvider({ children }) {
  const [toogle, setToogle] = useState(
    JSON.parse(localStorage.getItem("toggle_nav")) || true
  );

  const [toogleGridView, setToogleGridView] = useState(
    typeof JSON.parse(localStorage.getItem("election-card-view")) !== "boolean"
      ? true
      : JSON.parse(localStorage.getItem("election-card-view"))
  );

  const handleListView = function () {
    setToogleGridView(false);
    return localStorage.setItem("election-card-view", JSON.stringify(false));
  };

  const handleGridView = function () {
    setToogleGridView(true);
    return localStorage.setItem("election-card-view", JSON.stringify(true));
  };

  return (
    <NavContext.Provider
      value={{
        setToogle,
        toogle,
        toogleGridView,
        setToogleGridView,
        handleGridView,
        handleListView,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export default NavigationProvider;
