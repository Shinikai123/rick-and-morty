import "./Episode.css";

const Episode = ({ episode }) => {
    return (
        <div className="episode_card">
            <h3 className="episode_card_name">{episode.name}</h3>
            <hr></hr>
            <div className="episode_card_info">
                <p className="episode_card_number">{`Episode: ${episode.episode }`}</p>
                <p className="episode_card_date">{`Air date: ${episode.air_date}`}</p>
            </div>
            
        </div>
    );
}

export default Episode;