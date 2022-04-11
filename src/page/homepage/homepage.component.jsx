import axios from 'axios'

import Logohomepage from '../../homepage.png'
import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import {useEffect} from "react";

const Homepage = () => {
    //
    // useEffect(() => {
    //     fetch('http://localhost:1337/api/restaurants', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'mode':'no cors'
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data));
    // })
    let CompanyName = 'How We Deliver\n';
    return (
        <RapperHeaderComponent className={'container'}>
            <img src={Logohomepage} alt={"HomePage"}/>
            <h1>
                {CompanyName.toUpperCase()}
            </h1>
            <span className={"blueLine"}></span>
            <h3>
                Through our diversity of knowledge in multiple domains, we do it right! We deliver business and
                technology transformation from start to finish, via agile methodologies, and strong customer alliance
                and involvement techniques, engineering excellence tools as well as hybrid teams, we deliver the best
                solutions that dissolve both business challenges and breakpoints via technology.
            </h3>
        </RapperHeaderComponent>
    )
}
export default Homepage;