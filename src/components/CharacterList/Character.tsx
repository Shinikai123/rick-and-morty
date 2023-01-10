import "./Character.css";
import React, { useState } from 'react';

const CharacterCard = ({ character }) => {
    const { id, name, image, gender, location, origin, species, status } = character;
    return (
        <div className="character_card">
            <img src={image} alt={name} className="card_image"></img>
            <h2 className="card_name">
            <span>#{id}</span> {name}
            </h2>
            <hr></hr>
            <div className="card_info">
            <p className="card_species">{`Species: ${species}`}</p>
            <p className="card_gender">{`Gender: ${gender}`}</p>
            <p className="card_origin">{`Origin: ${origin && origin.name}`}</p>
            <p className="card_location">{`Location: ${location.name}`}</p>
            <p className="card_status">{`Status: ${status}`}</p>
            </div>
            </div>
    );
}

export default CharacterCard;