fullInfo={
    name:'john',
    lastName:'doe',
    fullName:[this.name,this.lastName],
    age:20,
    isstudent:false,
    isAdult:true,
    hobbies:['reading','gaming'],
    address:{
        city:'newyork',
        state:'ny',
        country:'usa'
    },
}
console.log(fullInfo);

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
}
let arr1=person.skills;
longestCharacter=0;
let name3;
for(let i=0;i<arr1.length;i++){
    if(arr1[i].length>longestCharacter){
        longestCharacter=arr1[i].length;
        name3=arr1[i];
    }
}
console.log(name3);

const copyPerson = Object.assign({}, person)
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
