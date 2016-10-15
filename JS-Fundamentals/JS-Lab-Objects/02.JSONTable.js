function solve(input){
    let html = `<table>\n`;


    for (let i = 0; i < input.length; i++) {
        let arr = JSON.parse(input[i]);
        html += `    <tr>\n`;
        html += `        <td>${htmlEscape(arr['name'])}</td>\n`;
        html += `        <td>${htmlEscape(arr['position'])}</td>\n`;
        html += `        <td>${htmlEscape(arr['salary'])}</td>\n`;
        html += `    <tr>\n`
    }
    html += `</table>`;
    console.log(html);

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

solve([
    `{"name":"Pesho","position":"Promenliva","salary":100000}`,
    `{"name":"Teo","position":"Lecturer","salary":1000}`,
    `{"name":"Georgi","position":"Lecturer","salary":1000}`
]);