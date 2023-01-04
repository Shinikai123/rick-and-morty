import "./Character.css";

const Character = ({ character }) => {
    return (
        <div className="character_card">
            <img src={character.image} alt={character.name} className="card_image"></img>
            <h3 className="card_name">{character.name}</h3>
            <p className="card_species">{`Species: ${character.species}`}</p>
            <p className="card_gender">{`Gender: ${character.gender}`}</p>
            <p className="card_origin">{`Origin: ${character.origin && character.origin.name}`}</p>
            <p className="card_status">{`Status: ${character.status}`}</p>
        </div>
    );
}

export default Character;