function solve([input]){
    let result = [];
    let pattern = `<p>(.+?)<\/p>`;
    let regex = new RegExp(pattern,'g');
    let match = regex.exec(input);
    while(match){
        let strReplaced = match[1].replace(/[A-Z\W]+/g,'').split(' ');
        console.log(strReplaced);
        match=regex.exec(input);
    }



}

solve(['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p>' +
'<div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>']);