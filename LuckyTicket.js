const checkLuckyNum = (num) =>{
    //do your awasome magic here
    console.log('------------------------------------------');
    const stringNum = ("00000000000000000000000000000000" + num.toString()).slice(-6);
    console.log(stringNum);
    let first3Num = 0;
    let last3Num = 0;
    for(let i = 0; i < stringNum.length; i++){
        if(i < 3){
            first3Num += parseInt(stringNum[i], 10);

        }else{
            last3Num += parseInt(stringNum[i], 10);
        }
    }
    console.log(first3Num);
    console.log(last3Num);
    if(first3Num === last3Num){
        console.log("You're lucky bastard:)");
    }else{
        console.log("Not yor day");}

};
checkLuckyNum(123123);//true
checkLuckyNum(123456);//false
checkLuckyNum(123006);//true
checkLuckyNum(4112);//true - 004112
