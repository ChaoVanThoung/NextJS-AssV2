

export type CarResponseType = {
    id:string,
    make:string,
    model:string,
    price:number,
    year:number,
    
    description:string,
    image:string
}

export type CarCreateType = {
    make:string,
    model:string,
    price:number,
    year:number,
    mileage:number
    color:string
    description:string,
    fuel_type:string
    transmission:string
    image:string
}

export type CarUpdateType = {
    make:string,
    model:string,
    price:number,
    year:number,
    mileage:number
    color:string
    description:string,
    fuel_type:string
    transmission:string
    image:string
    isSold:boolean
}
