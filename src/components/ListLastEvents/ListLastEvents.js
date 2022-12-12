import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";

export default function ListLastEvents(){

    //console.log("desde listLastEvents.js");
    //console.log(`${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`);

    const lastEventsFetch = useFetch(`${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`)
    //console.log(lastEventsFetch);

    return(
        <div className="container-list-last-events">
            <Header size="large">Ultimos eventos</Header>

            <Container bg="light">
                <Card.Group itemsPerRow={5}>
                   <LastEvents lastEventsFetch={lastEventsFetch}></LastEvents>
                </Card.Group>
            </Container>
        </div>
    );
}