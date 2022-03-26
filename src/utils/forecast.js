const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9baf86fe9a8ec69cac44aeb7c3c115e7&query=' + latitude +',' + longitude + '&units=f'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weatherstack server!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out. and humidity is ${body.current.humidity}.` )
        }
    }) 
}

module.exports = forecast



// const url = 'http://api.weatherstack.com/current?access_key=9baf86fe9a8ec69cac44aeb7c3c115e7&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true}, (error, response) => {
    
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`)
//     }
    
// }) 