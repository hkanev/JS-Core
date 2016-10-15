function composeTag([FileLoc, FileAlt]){
   let result = `<img src="${FileLoc}" alt="${FileAlt}">`;
    console.log(result);
}

composeTag(['smiley.gif', 'Smiley Face']);