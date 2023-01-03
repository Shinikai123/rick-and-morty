import "./Character.css";

const Character = ({ character }) => {
    return (
        <div className="character_card">
            <img src={character.image} alt={character.name} className="card_image"></img>
            <h3 className="card_name">{character.name}</h3>
            <p className="card_info">{`Origin: ${character.origin && character.origin.name}`}</p>
        </div>
    );
}

export default Character;