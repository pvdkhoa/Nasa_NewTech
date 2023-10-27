const launches = new Map();

let latestFlightNumber =100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27,2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM','NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber,launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunches() {
    latestFlightNumber ++;
    launches.set(launch.flightNumber,Object.assign(launch,{
        flightNumber:latestFlightNumber,
        customers: ['Zero to Mastery','Nasa'],
        upcoming:true,
        success: true,
    }));
}

function existsLaunchWithId(launchId){
    return launches.has(launchId);
}

function abortLaunchById(launchId){
    const aborted =  launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunches,
    existsLaunchWithId,
    abortLaunchById
};