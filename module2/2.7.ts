{
    // generic constraint using keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";  // manually
    type Owner2 = keyof Vehicle; 

    const person1 : Owner = "bike"; 
    const person2 : Owner2 = "ship";
    
    
    // or
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }
    const user = {
        name: "pritom",
        age: 23,
        address: "ctg"
    }
    const result1 = getPropertyValue(user, 'name')






}