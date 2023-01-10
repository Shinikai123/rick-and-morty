import "./Location.css";

const Location = ({ location }) => {
    return (
        <div className="location_card">
            <h3 className="location_card_name">{location.name}</h3>
            <hr></hr>
            <div className="location_card_info">
                <p className="location_card_type">{`Type: ${location.type}`}</p>
                <p className="location_card_dimension">{`Dimension: ${location.dimension}`}</p>
            </div>
            </div>
    );
}

export default Location;