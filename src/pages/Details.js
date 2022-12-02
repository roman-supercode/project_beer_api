import { useParams } from "react-router-dom";
import DetailsCard from "../components/detailsCard/DetailsCard";
import { useState, useEffect } from "react";


function Details() {
    const [beerItems, setBeerItems] = useState([]);
    const params = useParams();

    // console.log(beer);

    // useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => response.json())
        .then(BeerArray => {
            setBeerItems(BeerArray);
            console.log(BeerArray);
        });
    // }, []);

    // console.log(params);
    console.log(beerItems);
    const beer = beerItems[params.id];



    return (
        <>
            <DetailsCard
                alt={beer.name}
                imgURL={beer.image_url}
                name={beer.name}
                tagline={beer.tagline}
                firstBrewed={beer.first_brewed}
                level={beer.attenuation_level}
                key={beer._id}
                description={beer.description}
            />
        </>
    );
}

export default Details;