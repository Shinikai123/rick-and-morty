import "./Location.css";

const Location = ({ location }) => {
    return (
        <div className="location_card">
            <h3 className="location_card_name">{location.name}</h3>
            <p className="location_card_type">{`Type: ${location.type}`}</p>
            <p className="location_card_date">{`Dimension: ${location.dimension}`}</p>
        </div>
    );
}

export default Location;