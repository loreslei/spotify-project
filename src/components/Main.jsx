import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* Item list de artistas */}
      <ItemList title='Artistas' items={4}/>
      {/* Item list de musicas */}
      <ItemList title='Músicas' items={8}/>
    </div>
  );
};

export default Main;
