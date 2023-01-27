const addDays = (date, days)=>{
    if(!(date instanceof Date)) return "1-й параметр не является датой"
    if (!days || typeof days!=="number") return date

    const daysMS = days * 24 * 3600 * 1000
    const updDate = (daysMS + date.getTime())

    return new Date(date.getTime()+daysMS)
}

const userDate = new Date("2022-01-27")
console.log(addDays(userDate,11))