function superbowlWin(array) {
    const found = array.find(element => element.result === "W")
    if (found === undefined) {
        return undefined
    }
    else {
        return found.year
    }
}