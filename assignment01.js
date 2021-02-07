
// 01
let riceprice = 940;

if (riceprice <= 50) {
    console.log("Vaat Khabo");
    
} else {
    console.log("Porota khabo");
}

// 02
let pocketMoney = 500;
if (pocketMoney>= 5000) {
    console.log("Sajek jabo");
    
}
 else if (pocketMoney>=3000) {
    console.log("Cox's Bazar jabo");
}
 else{
    console.log("Ciriakhana jabo");
}

// 03
let cofeeavailable = true;
if (cofeeavailable == true) {
    console.log("Cofee- available:");
    let price = 40;
    if (price <= 50) {
        console.log("Cofee Khabo");
    }
    else{
        console.log("Cha Khabo");
    }
    
} else {
    console.log("Cofee- Not available:");
}

// 04
let closefriend = true;
let goodhistory = true;
let money = 20000;

if (closefriend==true && goodhistory == true && money <= 2000) {
 
    console.log("Taka dhar dewa jai");
    
} else {
    console.log("Taka dhar dewa jabe na");
}

// 05

let marks = 59;
if (marks>=101) {
    console.log("Invalid marks");
}
else if (marks>=97) {
    console.log("A+ paiche");
}
 else if (marks>=90) {
    console.log("A paiche");
} 
else if (marks>=86) {
    console.log("A- paiche");
} 
else if (marks>=80) {
    console.log("B paiche");
} 
else if (marks>=70) {
    console.log("C paiche");
} 
else if (marks>=60) {
    console.log("D paiche");
} 

else{
    console.log("Fail korche");
}