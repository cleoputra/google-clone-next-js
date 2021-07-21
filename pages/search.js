import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import {API_KEY, CONTEXT_KEY} from "../keys";
import Response from "../Response";

function Search({results}) {
    const router = useRouter();
    console.log(results);

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico"/> 
            </Head>
            
            <Header/>

            {/* Search Results  */}
            <SearchResults results={results}/>


        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    //google api kasih free 100 search, nah dibuat request 1 kali di capture ke json  nah dummy data buat mock data tsb
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(response => response.json());

    //after the SERVER has rendered... pass the results to the client 
    return {
        props: {
            results: data,
        }
    }
     
}
