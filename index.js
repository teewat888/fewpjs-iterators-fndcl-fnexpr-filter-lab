// Code your solution here
const findMatching = (drivers,s)=>{
    return drivers.filter(driver => driver.toLowerCase() === s.toLowerCase());
}

const fuzzyMatch = (drivers,s)=>{
    return drivers.filter(driver => driver.substring(0,2).toLowerCase() === s.toLowerCase());
}

const matchName = (drivers,s)=>{
    return drivers.filter(driver => driver.name === s);
}