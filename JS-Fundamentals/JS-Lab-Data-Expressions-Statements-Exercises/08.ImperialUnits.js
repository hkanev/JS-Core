function InchToFeet([inch]){
    let feet =  inch/12;
    let decimalResult =  Math.round(feet * 10)/10;

    console.log(decimalResult)
}

InchToFeet(['55'])