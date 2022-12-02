import "./HomeComp.css";
import { Link } from "react-router-dom";



function HomeComp(props) {
    return (
        <article>
            <Link to={props.link}>
                {/* <div className=""> */}
                <img src={props.img} />
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
                {/* </div> */}
            </Link>
        </article>
    );
}

export default HomeComp;