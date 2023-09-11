import { useEffect, useState } from "react";
import Country from "../country/country";
import './countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])
    const [visitedcountries, setvisited] = useState([])
    console.log(visitedcountries, "out")
    const Visited = (para) => {
        console.log(para)
        console.log(visitedcountries, 'inside')
        const newcountries = [...visitedcountries, para.name.common]
        setvisited(newcountries)
        // console.log(newcountries.length, newcountries)
    }
    return (
        <>
            <h1>Total countries : {countries.length}</h1>
            <h4>Number of Countries Visited:{visitedcountries.length}</h4>
            <div className="flag-container"></div>
            <div>
                {

                    visitedcountries.map(i => <li>{i}</li>)
                }
            </div>
            <div className="countries">

                {
                    countries.map(country => <Country key={country.cca3} country={country} Visited={Visited}></Country >)
                }

            </div >
        </>
    );
};
export default Countries;