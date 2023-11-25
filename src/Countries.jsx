import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css';
const Countries = () => {
    const [countries, setCountries]=useState([]);
    const [visitedCountries, setVisitedCountries]=useState([]);
    const [flags,setFlags]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    const handleVisitedCountry=country=>{
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleFlags=flag=>{
        console.log('flag adding')
        const newFlag=[...flags,flag];
        setFlags(newFlag);
    }
    return (
        <div >
           <h2>Countries:{countries.length}</h2> 
           <div>
            <h4>Visited Country:{visitedCountries.length}</h4>
            <ul>
               {
                visitedCountries.map(country=><li key={country.cca3}> {country.name.common}</li>)
               }
            </ul>
           </div>
           <div className="flag-container">
            {
                flags.map((flag, idx)=> <img key={idx} src={flag}></img>)
            }
           </div>
          <div className="country-container">
          {
           countries.map(country=><Country key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleFlags={handleFlags}
             country={country}></Country>)
           }
          </div>
        </div>
    );
};

export default Countries;