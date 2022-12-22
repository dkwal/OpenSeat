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
    
    if (currentYear > year) {
        return true;
    } else if (currentYear === year && currentMonth > month) {
        return true;
    } else if (currentYear === year && currentMonth === month && currentDay > day) {
        return true;
    } else if (currentYear === year && currentMonth === month && currentDay === day) {
        // if same day, compare time
        const currentTime = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
        const resTimeMilitary = convertTimeToMilitary(time);
        const resTime = parseInt(resTimeMilitary.slice(0, 2)) * 3600 + parseInt(resTimeMilitary.slice(3, 5)) * 60;
        if (currentTime >= resTime) {
            return true;
        } else {
            return false;
        }
    }
}

export const convertDateToString = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    return `${year}-${month}-${day}`
}

export const createReadableDateTime = (dateStr, timeStr) => {
    const date = new Date(dateStr.replace(/-/, '/').replace(/-/, '/')).toDateString(); // the .replace() calls are necessary because otherwise the date would be off by 1 for strange reasons
    const parts = date.split(" ");

    return parts[0] + ", " + parts[1] + " " + parts[2] + " at " + timeStr;

    
}