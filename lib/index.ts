export async function getCityData (city: string) {
    const API_KEY = process.env.API_KEY
    const res = await fetch (`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
    console.log(res)
    return res.json()
}