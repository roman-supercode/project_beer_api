import "./DetailsCard.css";

function DetailsCard(props) {
    return (
        <div>
            <img src={props.imgURL} alt={props.name}></img>
            <article>
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>
                <p className="grey">{props.firstBrewed}</p>
                <p className="grey">{props.level}</p>
                <p>{props.description}</p>
                <Link to={"/uebersicht"} className="returnButton"></Link>
            </article>
        </div>
    );
}

export default DetailsCard;