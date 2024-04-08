const list=[1,2,3,4,5,6,7,2,3,'php','javascript','php']

function removeDuplicate(array){
    return  [... new Set(array)]

}
console.log(removeDuplicate(list))

function isPrime(num){
    for(let i=2;num>i;i++){
        if(num%i===0){
            return false;
        }
    }
    return num>1;
}
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(array.filter(isPrime));
const animals=['ant','bison','camel','duck','elephant']
console.log(animals.slice(2))
// The following variables are defined in the global scope
const num1=20;
const num2=3;
const name="Chamakh"

function multiply(){
    return num1*num2;
}
console.log(multiply())
//nested function
function getscore(){
    const num1=2;
    const num2=3;
    const name="Chamakh"
function add(){
    return `${name} scored ${num1+num2}`
}
return add();
}
console.log(getscore());
//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function sortedStringArray(arr){
   return arr.sort()
    
}
const myString=['apple','banana','grape','cherry']
const sort=sortedStringArray(myString)
console.log(sort)

//descending
function sortDescendingElement(arr){
arr= arr.sort().reverse().join(',');
return arr
}
const myString1=['apple','banana','grape','cherry']
const sort1=sortDescendingElement(myString1)
console.log(sort1)
//Given an array of objects, each object representing a person with a name and age property, write a function that returns the sum of all people who are less than 18 years. 
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];

 function sumAge(peopleArray){
    return peopleArray.reduce((sum,person)=>{
        if(person.age<18){
            return sum+person.age;

        }else{
            return sum;
        }

    },0);
        

    }
    const sumofAge= sumAge(people);
    console.log(sumofAge)


 



 function arrayNumber(arr1){
    for(i=0;i<arr1.length;++i){
        if(arr1[i]>0){
            return('positive')
        }
       else if(arr1[i]<0){
        return('negative')
       }
       else ('zero')
    }

 }
 const numbers=[1,2,3,4,5,6]
 const nums=arrayNumber(numbers)
 console.log(nums)

 //Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
 function sortEmployee(employee){
    employee.sort((a,b)=>a. salary-b.salary)
    return employee
 }
 const employeeList=[{name:'Mary',id:58,salary:5000},{name:'Dante',id:20,salary:6000}];
 const sortSalary= sortEmployee(employeeList);
 console.log(sortSalary)
 //Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkArray(arr){
    if(i=0,i<arr.length,++i){
       if(arr[i]>=0){
       return "positive"
       }
       else if(arr[i]<=0){
        return "negative"
       }  
       
    }
    else return 0
   
}
const number=[1,2,3,4,5,6]
const  myNum=checkArray(number);
console.log(myNum)