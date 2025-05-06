import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const SingleItem = () => {
  return (
    <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174a291b99de1602566f8d57725"
                  alt="Imagem do Artista X"
                />
                <FontAwesomeIcon
                  className="single-item__icon"
                  icon={faCirclePlay}
                />
              </div>
            </div>
            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Gustavo Mioto</p>
              </div>
              <p className="single-item__type">Artista</p>
            </div>
          </div>
  )
}

export default SingleItem
