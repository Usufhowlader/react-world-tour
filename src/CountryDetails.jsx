import CountryData from "./CountryData";


// const CountryDetails = ({country,handleVisitedCountry,handleFlags}) => {
//     return (
//         <div>
//             <h3>Country Details:</h3>
//             <CountryData
//               country={country}
//               handleVisitedCountry={handleVisitedCountry}
//               handleFlags={handleFlags}
//             ></CountryData>
//         </div>
//     );
// };
const CountryDetails = (props) => {
    return (
        <div>
            <h3>Country Details:</h3>
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;

