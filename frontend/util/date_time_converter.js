export const convertStringToTime = (str) => {
    const timeArr = [str.slice(0, 2), str.slice(2, 4)]
    let hours = parseInt(timeArr[0]);
    const minutes = parseInt(timeArr[1]);
    let timeOfDay = "am";

    if (hours === 12) {
        timeOfDay = "pm";
    }
    if (hours > 12) {
        hours -= 12;
        timeOfDay = "pm";
    }

    if (hours === 0) {
        hours += 12;
    }


    let time;
    if (minutes === 0) {
        time = `${hours}:00 ${timeOfDay}`;
    } else if (minutes < 10) {
        time = `${hours}:0${minutes} ${timeOfDay}`;
    } else {
        time = `${hours}:${minutes} ${timeOfDay}`;
    }

    return time;
}