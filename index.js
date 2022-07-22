// code your solution here
// function superbowlWin(collection){
//     for (const team of collection){
//         if (team.result === "W") {
//             return team.year;
//         }
//     }
// }


function superbowlWin(collection){
    const found = collection.find(object => object.result === "W")
    if (found === undefined){
        return undefined;
    }
    else if (found !== undefined){
        return found.year;
    }
    // return found.year
}


// function superbowlWin(records){
//     function isW(){

//     }
//     (records).find(isW);
// }


// I redid this lab on Jul 22 with this solution and was able to pass all tests:
// function superbowlWin(array) {
//     const found = array.find(element => element.result === "W")
//     if (found === undefined) {
//         return undefined
//     }
//     else {
//         return found.year
//     }
// }