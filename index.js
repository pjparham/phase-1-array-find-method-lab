// code your solution here
function superbowlWin(collection){
    for (const team of collection){
        if (team.result === "W") {
            return team.year;
        }
    }
}


// function superbowlWin(records){
//     function isW(){

//     }
//     (records).find(isW);
// }