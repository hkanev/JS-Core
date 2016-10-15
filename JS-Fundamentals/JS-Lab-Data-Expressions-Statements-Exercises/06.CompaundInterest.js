function CompaundInterest([principal,interest,period,timespan]){

  [principal,interest,period,timespan] = [principal,interest,period,timespan].map(Number);
    interest = interest / 100;
    period = 12 / period;
    let result = principal*Math.pow(1 + interest/period, period*timespan);
    console.log(result.toFixed(2));
}

CompaundInterest([1500, 4.3, 3, 6]);