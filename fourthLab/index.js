function printGrade(){
    let marks = prompt("Enter your marks : ")
    let grade;
    if(marks>=50 && marks<=65) grade="C";
    else if(marks>65 && marks<=80) grade="B";
    else if(marks>80 && marks<=90) grade="A";
    else if(marks>90) grade="A+";
    return grade;
}

 document.getElementById("demo").innerHTML = printGrade()

function printArr(){
    let n = prompt("Enter number of elements : ")
    let arr = []
    for(let i=0;i<n;i++){
        let ele = prompt("Enter the element")
        if(arr.indexOf(ele)===-1){
            arr.push(ele)
        }
    }
    return arr
}

document.getElementById("demo1").innerHTML = printArr()

function printVowels(){
    let vowels = 0
    let paragraph = prompt("Enter the paragraph")
    for(let i=0;i<paragraph.length;i++){
        if(paragraph[i]=='a' || paragraph[i]=='e' || paragraph[i]=='i' || paragraph[i]=='o' || paragraph[i]=='u') vowels++;
    }
    return vowels;
}

document.getElementById("demo2").innerHTML = printVowels()

function reversenum(){
    let n = parseInt(prompt('Enter the number'))
    let num = 0;
    let ori = n
    while(n!=0){
        num=(num*10)+n%10;
        n=Math.floor(n / 10);
    }
    console.log(num)
    console.log(ori)
    document.getElementById("demo4").innerHTML = ori==num?'YES':'NO'
    return num
}

document.getElementById("demo3").innerHTML = reversenum()

class Employee{
    constructor(name,eid,salary,exp){
        this.name = name;
        this.eid = eid;
        this.salary = salary;
        this.exp = exp;
    }
    addIncrement(){
        let incrementP = this.exp>5?20:15;
        let incrementA = (this.salary*incrementP)/100;
        this.salary+=incrementA;
    }
}

let emp = new Employee(2);
emp[0] = new Employee("sujal","123",5000000,2)
emp[1] = new Employee("Ujjwal","69",5000000,2)
emp[0].addIncrement()
emp[1].addIncrement()
document.getElementById("demo5").innerHTML = emp[0]
document.getElementById("demo6").innerHTML = emp[1]