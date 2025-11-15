what i can do with javascript object 
1. i can store number , string , boolean , object , array , function etc.

const student = {
    name: 'Shaon',
    id: 632,
    address : 'movie cinema',
    isSingle : true,
    friends : ['poddo','sujon','faysal'],
    movies : [{name: 'no-1',year:2015},{name:'king khan',year: 2018}],
    act: function(){
        return ('act like sakib khan')
    } ,
    car : {
        brand : 'Tesla',
        price : 3500000,
        made : 2025,
        manufacturer : {
            name : 'Tesla',
            ceo : 'Elon Mask',
            country : 'USA'
        }
    }
}

console.log(student)



what i can do with javascript object 
1. i can store number , string , boolean , object , array , function etc.


function getArguments (a,b){
    console.log(arguments);
    
}

getArguments(1,2,3,4,5,6,7)


function থেকে আমরা pass করা আর্গুমেন্টস গুলো পেটে পারি একটা array লাইক object এর মতো। 


