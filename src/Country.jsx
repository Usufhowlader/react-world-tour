
import { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountry,handleFlags}) => {
    console.log(country);
 const {name,flags,population,area,cca3}=country;
 const [visited,setVisited]=useState(false)
 const handleVisited=()=>{
    setVisited(!visited);
 }
 
    return (
        <div className={`country ${visited && 'visited-2'}`}>
            <h3 style={{color:visited? 'purple':'red'}}>Name:{name?.common}</h3>
            <h3>Official-Name:{name?.official}</h3>
             <img src={flags.png} alt="" />
             <h2>Population:{population}</h2>
             <h3>Area:{area}</h3>
             <p><small>Code:</small>{cca3}</p>
             <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
             <button onClick={()=>handleFlags(country.flags.png)}>Add flag</button>
             <br/>
             <button className='visited' onClick={handleVisited}>{ visited ? 'Visited' : 'Going'}</button>
             {visited ? 'I have visited this country': 'I want to visited'}
        </div>
    );
};

export default Country;