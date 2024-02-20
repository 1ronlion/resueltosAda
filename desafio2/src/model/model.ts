interface Forecastday {
    day: Day;
}

interface Forecast {
    forecastday: Forecastday[];
}

interface Data {
    forecast: Forecast;
}

interface Day{
    mintemp_c: number,
    maxtemp_c: number
}


function setMessage(min: number, max: number, city: string){

    return `La temperatura maxima de los ultimos 3 dias de ${city} fue ${max}ºC y la temperatura minima fue de ${min}ºC`

}


function getApiUrl (key: string, city:string, day:string) {

 
    let min = 100
    let max = 0

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
        


    data.forEach((e: Data) => {

        e.forecast.forecastday.forEach((forecastDay)=>{

            if(forecastDay.day.maxtemp_c > max){

                max = forecastDay.day.maxtemp_c

            }
            
            if(forecastDay.day.mintemp_c < min){

                min = forecastDay.day.mintemp_c

            }

        })
        
    })	

    let finalData = setMessage(min, max, city)
    console.log("🚀 ~ .then ~ finalData:", finalData)

})

}





export default { getApiUrl }