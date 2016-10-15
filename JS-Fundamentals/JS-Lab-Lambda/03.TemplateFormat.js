function Generate(input){
   let html =  `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n`
    for(let i=0;i < input.length; i+=2) {
        let question = input[i];
        let answer = input[i + 1];

         html += `<question>\n    ${question}\n  </question>\n  <answer>\n    ${answer}\n  </answer>\n`;
    }
    html+=`</quiz>\n`;
    console.log(html);
}


Generate(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);