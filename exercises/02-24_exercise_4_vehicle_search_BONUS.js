
//BONUS

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
    ];

    function printVehicle(vehicle){
        console.log(`
            color: "${vehicle.color}",
            type: "${vehicle.type}",
            registrationState: "${vehicle.registrationState}",
            licenseNo: "${vehicle.licenseNo}",
            registrationExpires: ${vehicle.registrationExpires},
            capacity: ${vehicle.capacity}            
        `);
    }
    function printVehicleList(list){
        for(let i=0; i<list.length; i++){
            printVehicle(list[i]);
        }
    }
    function findByColor(color){
        let output = [];
        for(let i=0; i < vehicles.length; i++){
            let v = vehicles[i];
            if(v.color == color){
                output.push(v)
            }
        }
        return output;
    }
    function findExpired(){
        let output = [];
        for(let i=0; i < vehicles.length; i++){
            let v = vehicles[i];
            if(v.registrationExpires <= new Date()){
                output.push(v)
            }
        }
        return output;
    }    
    function findByMinimumCapacity(minimumCapacity){
        let output = [];
        for(let i=0; i < vehicles.length; i++){
            let v = vehicles[i];
            if(v.capacity >= minimumCapacity){
                output.push(v)
            }
        }
        return output;
    }
    function findByLicenceSuffix(licenseSuffix){
        let output = [];
        for(let i=0; i < vehicles.length; i++){
            let v = vehicles[i];
            if(v.licenseNo.indexOf(licenseSuffix) == v.licenseNo.length - licenseSuffix.length){
                output.push(v)
            }
        }
        return output;
    }

    console.log(`Which vehicles are RED?`);
    printVehicleList(findByColor("Red"));

    console.log(`Which vehicles have registrations that are expired?`);
    printVehicleList(findExpired());

    console.log(`Which vehicles that hold at least 6 people?`);
    printVehicleList(findByMinimumCapacity(6));
    
    console.log(`Which vehicles have license plates that end with "222"?`);
    printVehicleList(findByLicenceSuffix("222"));
