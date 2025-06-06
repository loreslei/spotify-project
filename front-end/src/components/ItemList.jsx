import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  
  const {pathname} = useLocation();

  const isHome = pathname === '/';
  const finalItems = isHome? items : Infinity;
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>
        {isHome ? (<Link className="main__link" to={path}>
          Mostrar Tudo
        </Link>) : <></>}
        
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem  idPath={idPath} {...currObj} key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
