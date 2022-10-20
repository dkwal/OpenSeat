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

const convertTimeToMilitary = (time) => {
    const timeOfDay = time.slice(-2);
    const parts = time.split(':');
    let hours = parseInt(parts[0]);
    let minutes = parseInt(parts[1].slice(0, 2));

    if (hours < 10 && timeOfDay === 'am') {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (timeOfDay === 'am') {
        return `${hours}:${minutes}:00`;
    } else {
        if (hours !== 12) {
            return `${hours + 12}:${minutes}:00`;
        } else {
            return `${hours}:${minutes}:00`;
        }
    }
}

export const isDateInPast = (date, time) => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    const year = parseInt(date.slice(0,4));
    const month = parseInt(date.slice(5, 7));
    const day = parseInt(date.slice(8, 10));

    console.log(currentDay, currentMonth, currentYear, year, month, day);
    
    if (currentYear > year) {
        return true;
    } else if (currentYear === year && currentMonth > month) {
        return true;
    } else if (currentYear === year && currentMonth === month && currentDay > day) {
        return true;
    } else if (currentYear === year && currentMonth === month && currentDay === day) {
        // if same day, compare time
        currentTime = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
        resTimeMilitary = convertTimeToMilitary(time);
        resTime = parseInt(resTimeMilitary.slice(0, 2)) * 3600 + parseInt(resTimeMilitary.slice(3, 5)) * 60;
        if (currentTime >= resTime) {
            return true;
        } else {
            return false;
        }
    }
}