export const setTimeFixture = (utc, game) => {
    let timeParsed = game.split("").reverse().join("").slice(0, 5).split("").reverse().join("")
    let newTime;
    console.log(utc, timeParsed)

    if (utc.minute === '00') {
        newTime = `${(+timeParsed.slice(0, 2)) + (+utc.hour)}:`
        newTime = newTime.concat(utc.minute)

    }
    else if (utc.minute[0] === '-') {
        newTime = `${+timeParsed.slice(0, 2) + (+utc.hour - 1)}:`
        newTime = newTime.concat(utc.minute.slice(1))
    }
    else {
        newTime = `${+timeParsed.slice(0, 2) + (+utc.hour)}:`
        newTime = newTime.concat(utc.minute)
    }

    if (+newTime.slice(0, 2) >= 24) {
        newTime = `${+newTime.slice(0, 2) % 24}${newTime.slice(2)}`
    }

    if (newTime[1] === ':' || newTime[0] === "0") {
        newTime = '0'.concat(newTime)
    }

    return newTime
}