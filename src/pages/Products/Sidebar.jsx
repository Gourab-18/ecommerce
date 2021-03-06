import React from "react";
import Search from "./components/Search";
import Category from "./components/Category";
import Colors from "./components/Colors";
import Range from "./components/Range";
import Checklist from "./components/Checklist";
const Sidebar = ({ data, changeData }) => {
  return (
    <>
      <div className="flex flex-col ml-6 mt-12">
        <Search />

        <Category data={data} changeData={changeData} />

        <Colors />
        <Range />
        <Checklist />
      </div>
    </>
  );
};

export default Sidebar;
