function FigureArea(input){
    let w = Number(input[0]);
    let h = Number(input[1]);
    let W = Number(input[2]);
    let H = Number(input[3]);

    let area = h*w;
    let area1 = H*W;
    let area2=Math.min(w, W) * Math.min(h, H);

    let result = area + area1 - area2;


    console.log(result);
}

FigureArea(['2', '2', '1', '1']);