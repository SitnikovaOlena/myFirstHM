let stopWord;
let intervalID = setInterval(()=>{
    if(stopWord === "Fluggaenkoecchicebolsen"){
        console.log("Stop Play");
        clearInterval(intervalID);
    }else {
        console.log("Play");
        console.log("!");
    }
},1000);