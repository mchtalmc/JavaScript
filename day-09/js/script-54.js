
import { countries } from "../data/countries.js";

const loadData = () => { 
    let options = "";
    for(let country of countries){
        options += `<option> ${ country.name.official }</option>`;
    }
    const ddlCountries= document.querySelector("#ddlCountries");
    ddlCountries.innerHTML = options;
 };

 loadData();

 arr.sort((a, b) => {
     return a.name.official.localeCompare(b.name.official);
 })
