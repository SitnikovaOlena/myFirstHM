// //find next biggest value
function getNextHighestIndex(arr) {
    const maxValue = Math.max(...arr);
    return arr.indexOf(maxValue);
}


const findTheBiggestPuddle = (puddleBorders) =>{
    // console.log(puddleBorders);
     let puddleSizeArr = [];
    puddleBorders.forEach((element) =>{
        // console.log(element);
        // console.log(element[0]);
        // console.log(myRoofsArray[element[0]]);
        // console.log(element[1]);
        // console.log(myRoofsArray[element[1]]);
        let puddleSize = 0;
        const puddleBorder = () =>{
            if(myRoofsArray[element[0]] === myRoofsArray[element[1]]){
                // console.log(myRoofsArray[element[0]]);
                return myRoofsArray[element[0]];
            }else {
                // console.log(Math.min(myRoofsArray[element[0]], myRoofsArray[element[1]]));
                return Math.min(myRoofsArray[element[0]], myRoofsArray[element[1]]);
            }
        };
        for(let i=element[0]+1; i< element[1]; i++){
            // console.log("border "+puddleBorder());
            // console.log(myRoofsArray[i]);
            // console.log(i);
           puddleSize += puddleBorder() - myRoofsArray[i];
           // console.log( puddleBorder() + " - " + myRoofsArray[i]);
           // console.log("---------------------------    " + puddleSize);
           // console.log(puddleSize);
        }
        puddleSizeArr.push(puddleSize);
    });
    // console.log(puddleSizeArr);
    // console.log(puddles);
    // console.log(puddles);
    console.log("Yor request wasn't easy, but I see you really wanted to know. So, well...");
    if(puddles.length){
        setTimeout(() => {  console.log("Here is the size of the largest puddle: " + Math.max(...puddleSizeArr)); }, 2000);
        setTimeout(() => {  console.log("..."); }, 3500);
        setTimeout(() => {  console.log("if you are so incredulous, here is the list of all sizes. Compare yourself!"); }, 4500);
        setTimeout(() => {  console.log(puddleSizeArr); }, 6000);
    }else{
        setTimeout(() => {  console.log("HAHAHA, there is no puddle!"); }, 2000);

    }


};

const isPuddleStarted = (indexOfEl) =>{
    return myRoofsArray[indexOfEl] > myRoofsArray[indexOfEl+1];
};

const findPuddleEnd = (indexStart) =>{
    let indexEnd;
    for(let i = indexStart + 1; i < myRoofsArray.length; i++){
        if(myRoofsArray[i] >= myRoofsArray[indexStart]){
            //close my puddle
            indexEnd = i;
            break;
        }
    }
    if(indexEnd){
        return indexEnd;
    }else{
        let elseFromRight = myRoofsArray.slice(indexStart + 1);
        indexEnd = indexStart + 1 + getNextHighestIndex(elseFromRight);
    }
    return indexEnd;
};

const puddles = [];


const createPuddle = (StartIndex) =>{
    if(isPuddleStarted(StartIndex)){
    const puddleEnd = findPuddleEnd(StartIndex);
    if(puddleEnd - StartIndex > 1){
        puddles.push([StartIndex, puddleEnd]);
    }
    createPuddle(puddleEnd);
    }else if(StartIndex === myRoofsArray.length-1){

        findTheBiggestPuddle(puddles);
    }else{
        createPuddle(StartIndex+1);

    }};


// //generate your roofs
//
// //to check your code
// const myRoofsArray = [5,0,3,0,4,2,1,3,1,5,1,7,0,4];
// const myRoofsArray = [5,6,7,5,5];
// const myRoofsArray = [7,13,2,10,12,6,4,1,17,22,18,13,29,23,22,26,4,1,9,28];

const myRoofsArray = [5,0,3,1];
// const myRoofsArray = [5,0,3,0,6,1,7,0,4];
createPuddle(0);



