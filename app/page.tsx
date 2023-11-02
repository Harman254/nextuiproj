import Hero from "@/components/Hero";
import { getCityData } from "@/lib";
type HomepageProps = {
    searchParams: {
        city: string;
    }
}


export default  async function Home( { searchParams}: HomepageProps) {
	let data;

	if(searchParams.city !== "") {
		 data = await getCityData(searchParams.city)
		 console.log(data)
	}

	


	

	return (
			<>
			 <Hero data={data} />

			</>
	)
}
