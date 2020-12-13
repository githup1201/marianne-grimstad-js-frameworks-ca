import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";


function GameDetail() {
    const [detail, setDetail] = useState([]);
    
    let { id } = useParams();
    let slash= "/";
    let detailArray = [];
    const url = BASE_URL + slash + id;
    
    useEffect(() => {
       fetch(url)
			.then(response => response.json())
			.then(json => setDetail(json))
			.catch(error => console.log(error));
	}, [url]);
    
    
    
    return (
        
         	<Card>
			        <Card.Img variant="top" src={detail.background_image} />
			        <Card.Body>
				          <Card.Title>{detail.name}</Card.Title>
                          <Card.Text>{detail.description_raw}</Card.Text>
                          <Card.Link href={detail.website}>Go to game</Card.Link>
			        </Card.Body>
		    </Card>     
    );
        
    
}


export default GameDetail;