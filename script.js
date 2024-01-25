console.log('working')

const apiKey = '429d2d282af1407fb47141044242501'
const button = document.querySelector('#submitButton')


const getWeather = async () => {
    const weather = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=429d2d282af1407fb47141044242501&q=${inputBar.value}&days=7&aqi=no&alerts=no`)
}

button.addEventListener('click', async (event) => {
    event.preventDefault()
    const inputBar = document.querySelector('#inputBar').value
    const cityName = document.querySelector('#cityName')
    const region = document.querySelector('#region')
    const cfImage = document.querySelector('#cf-image')
    const temp = document.querySelector('#temp')
    const feelsLike = document.querySelector('#feels-like')
    const maxTemp = document.querySelector('#max-temp')
    const minTemp = document.querySelector('#min-temp')
    const precip = document.querySelector('#precip_in')
    const ffImage1 = document.querySelector('#ff-image1')
    const ffDay1 = document.querySelector('#ff-day1')
    const ffImage2 = document.querySelector('#ff-image2')
    const ffDay2 = document.querySelector('#ff-day2')
    const ffImage3 = document.querySelector('#ff-image3')
    const ffDay3 = document.querySelector('#ff-day3')
    const ffImage4 = document.querySelector('#ff-image4')
    const ffDay4 = document.querySelector('#ff-day4')
    const ffImage5 = document.querySelector('#ff-image5')
    const ffDay5 = document.querySelector('#ff-day5')


    let textInput = inputBar
    
    let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=429d2d282af1407fb47141044242501&q=${textInput}&days=7&aqi=no&alerts=no`).catch(e => e)

    cityName.innerText = response.data.location.name
    region.innerText = response.data.location.region
    cfImage.src = response.data.current.condition.icon
    temp.innerText = `${response.data.current.temp_f}°F`
    feelsLike.innerText = `Feels like ${response.data.current.feelslike_f}°`
    maxTemp.innerText = `${response.data.forecast.forecastday [0].day.maxtemp_f}°`
    minTemp.innerText = `${response.data.forecast.forecastday [0].day.mintemp_f}°`
    precip.innerText = `${response.data.current.precip_in} in`
    ffImage1.src = response.data.forecast.forecastday [1].day.condition.icon
    ffDay1.innerText = response.data.forecast.forecastday [1].date
    ffImage2.src = response.data.forecast.forecastday [2].day.condition.icon
    ffDay2.innerText = response.data.forecast.forecastday [2].date
    ffImage3.src = response.data.forecast.forecastday [3].day.condition.icon
    ffDay3.innerText = response.data.forecast.forecastday [3].date
    ffImage4.src = response.data.forecast.forecastday [4].day.condition.icon
    ffDay4.innerText = response.data.forecast.forecastday [4].date
    ffImage5.src = response.data.forecast.forecastday [5].day.condition.icon
    ffDay5.innerText = response.data.forecast.forecastday [5].date

console.log(response)
})
// getWeather()