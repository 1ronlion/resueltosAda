const API_KEY = '64b8a73f88064c898539139cdf32bf6e';

const API_BASE_URL = new URL(
	`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=ar&pageSize=1`
);

console.log("Primer log");

fetchData()

console.log("Tercer log");

async function getData() {
    console.log("Sexto log");
	
    const response = await fetch(API_BASE_URL);
	console.log("Octavo log", response);
    
	console.log("Noveno log");
    
	const result = await response.json();
	console.log("Decimo", result);
    
	console.log("Ultimo log");
}

    console.log("Cuarto log")

function fetchData(){

    console.log("Segundo log")

fetch(API_BASE_URL)
    .then((res) => {
        console.log("FETCH")
        res.json()
    })
    .then(() => console.log('DATOS OBTENIDOS CON THEN'));
}

console.log("Quinto log");

getData();

console.log("Septimo log")





