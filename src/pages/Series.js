import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";

export default function Series(){

    console.log("desde series.js");
    console.log(`${process.env.REACT_APP_URL_BASE}/series?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&limit=5`);

    const listSeries = useFetch(`${process.env.REACT_APP_URL_BASE}/series?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&limit=5`)
    console.log(listSeries);

    return (
        <div>
            <ListSeries listSeries={listSeries}></ListSeries>            
        </div>
    )
}