//this one from our exercise to check specific ticket
const checkTicket = (num) =>{
    if(checkLuckyNum(num)){
        console.log("You're lucky bastard:)");
    }else{
        console.log("Not yor day");};
};

//checks if sum of the first 3 numbers and sum of the last 3 numbers are equal
const checkLuckyNum = (num) =>{
    let first3Num = 0;
    let last3Num = 0;
    const stringNum = ("00000000000000000000000000000000" + num.toString()).slice(-6);
    for(let i = 0; i < stringNum.length; i++){
        if(i < 3){
            first3Num += parseInt(stringNum[i], 10);

        }else{
            last3Num += parseInt(stringNum[i], 10);
        }
    }
    // logging numbers to re-check myself
    // if(first3Num === last3Num){
    //     console.log(stringNum);
    // }
    return first3Num === last3Num;

};

//counts how many lucky tickets in the pack
const numberOfLuckyTickets = () =>{
    let numOfTickets = 0;
    for(let j = 0; j<=999999; j++){
        if(checkLuckyNum(j)){
            numOfTickets++;
        }}
    console.log("There're " + numOfTickets + " in the pack. Check if YOU are the lucky bastard!;)")
};
numberOfLuckyTickets();
checkTicket(123123);//true

