interface Forecast {

    forecastday:string

}


interface Data {

    forecast :Forecast 

}

interface Day {

    day:string

}




function getApiUrl (key: string, city:string, day:string){

    
    const splitDays = day.split("-")
    const day1 = `${splitDays[0]}-${splitDays[1]}-${parseInt(splitDays[2])}`
    const day2 = `${splitDays[0]}-${splitDays[1]}-${parseInt(splitDays[2]) - 1}`
    const day3 = `${splitDays[0]}-${splitDays[1]}-${parseInt(splitDays[2]) - 2}`


    const url1 = `https://api.weatherapi.com/v1/history.json?key=${key}&q=${city}&dt=${day1}&lang=es`
    const url2 = `https://api.weatherapi.com/v1/history.json?key=${key}&q=${city}&dt=${day2}&lang=es`
    const url3 = `https://api.weatherapi.com/v1/history.json?key=${key}&q=${city}&dt=${day3}&lang=es`


    let data1 = fetch(url1).then((res) => res.json())
    let data2 = fetch(url2).then((res) => res.json())
    let data3 = fetch(url3).then((res) => res.json())

    Promise.all([data1, data2, data3])

    .then((data) => {
        

    let finalData = data.map((e: Data) => e.forecast.forecastday)

        	
    })

}

export default { getApiUrl }