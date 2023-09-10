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
    return (
        <>
            <h1>Total countries : {countries.length}</h1>
            <div className="countries">

                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country >)
                }
            </div >
        </>
    );
};
export default Countries;