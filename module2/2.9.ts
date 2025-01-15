{
    // Conditional types

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;



    // or
    type Sheikh = {
        bike: string;
        car: string; 
        ship: string;
        plane: string
    }

    // type CheckVehicle<T> = T extends "bike"|"car"|"ship" ? true : false;
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasCar = CheckVehicle<"car">
    type HasBike = CheckVehicle<"bike">
    type HasTractor = CheckVehicle<"tractor">
    type HasPlane = CheckVehicle<"plane">









}