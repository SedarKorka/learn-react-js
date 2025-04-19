class Age{
    constructor(carAge){
        this.carAge=carAge;
    }

    showAge(){
        return 'This car is '+this.carAge+' year old';
    }
}

const age =new Age(29);

age

//array function 
hello()= ()=>{
    return  'Hello world';
}

hello = function(){
    return 'Hello world';
}

//Array method

const myCours = ['c','reactjs','azuredevop'];
const mylist = myCours.map((item)=><p>{item}</p>)