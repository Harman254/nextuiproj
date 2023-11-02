import { getCityData } from "@/lib";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log(req.url)
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
    if(city=== "string"){

        const results = await getCityData(city)
        console.log(results)
        
        return NextResponse.json(results, {status: 200})
    } 


}