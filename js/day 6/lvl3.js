//Question 4
//dispaly countries that contain 'land'
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);