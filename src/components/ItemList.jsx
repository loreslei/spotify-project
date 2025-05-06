import React from 'react'
import SingleItem from './SingleItem'
const ItemList = ({title, items}) => {
  return (
      <div className="item-list">
        
        <div className="item-list__header">
        <h2>{title} Populares</h2>
          <a className="main__link" href="">
            Mostrar Tudo
          </a>
        </div>   

        <div className="item-list__container">
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
        </div>
      </div>
  )
}

export default ItemList
