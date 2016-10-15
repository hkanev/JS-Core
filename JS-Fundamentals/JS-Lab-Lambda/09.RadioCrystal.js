function shape(input) {
    "use strict";
    let targetSize = Number(input[0]);
    for(let i=1;i<input.length;i++){
        let size = Number(input[i]);

        console.log(`Processing chunk ${size} microns`)

        size = calc(Cut,size,"Cut");
        size = calc(Lap,size,"Lap");
        size = calc(Grind,size,"Grind");
        size = calc(Etch,size,"Etch");


        if(targetSize - size ===1){
            console.log("X-ray x1");
        }

        console.log(`Finished crystal ${targetSize} microns`);
    }

    function calc(operation,size,name){
        let opSize = operation(size);
        let times = 0;
        while(opSize>=targetSize || parseInt(targetSize-opSize)===1){
            size = opSize;
            opSize = operation(size);
            times++;
        }
        if(times>0){
            console.log(`${name} x${times}`);
            size = wash(size);
            console.log("Transporting and washing");
        }
        return size;
    }

    function Cut(size){
        return size / 4;
    }

    function Lap(size){
        return size * 0.8;
    }

    function Grind(size){
        return size - 20;
    }

    function Etch(size){
        return size - 2;
    }
    function wash(size){
        return Math.floor(size);
    }
}

shape([1375, 50000]);