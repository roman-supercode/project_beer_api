import "./HomeComp.css";

function HomeComp(props) {
    return (
        <article>
            <img src={props.img} />
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
        </article>
    );
}

export default HomeComp;