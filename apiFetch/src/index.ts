//import fetchData from "./public-api";
import fetchData from "./public-api-catch"

let data =    {
    country: "us", 
    category:"sports",
    source: "MLB Trade Rumors"
}



console.log("🚀 ~ fetchData(data):", fetchData(data))
// .then((data) => console.log(data))
// .catch((error)=> console.log(error))