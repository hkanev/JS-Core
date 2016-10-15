function multyplicationTable([n]){
    let html = '<table border="1">\n';
    html += '<tr><th>x</th>'
    for(let i=1; i<=n; i++){
        html+= `<th>${i}</th>`;
    }
    html += `</tr>\n`;
    for(let col=1; col<=n; col++){
        html+=`<tr><th>${col}</th>`
        for(let row=1; row<=n; row++){
            html+=`<td>${col*row}</td>`
        }
        html+=`</tr>\n`
    }
    html += '</table>'
    console.log(html);
}

multyplicationTable([5]);