function LastMonth ([day,month,year]){

    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}

LastMonth(['1','3','2004']);