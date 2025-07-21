import CarDetailComponent from "@/components/CarComponent/CarDetailComponent";


export default async function CarPageDetail({
    params
}:{
    params: Promise<{id:string}>
}){

    const carId = await (await params).id
  
    return(
        <div>
            <CarDetailComponent carId={carId} />
        </div>
    )
}