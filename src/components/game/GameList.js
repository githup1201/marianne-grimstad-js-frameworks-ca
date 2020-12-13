import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameItem from "./GameItem";
import {BASE_URL} from "../../constants/api";
import Search from "./Search";

function GameList() {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setFilteredGames(json.results);
            })
            .catch(error => console.log(error));
      }, []);
    
  
    const filterGame = function(e) {
        
        const searchValue = e.target.value.toLocaleLowerCase();
        const filteredArray = games.filter(function(gam) {
            const lowerCaseName = gam.name.toLowerCase();
            
            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });
        
        setFilteredGames(filteredArray);
    };

    return (
        <>
                <Search conductSearch={filterGame} />
                <Row>
                        {filteredGames.map(game => {
                            const {id, name, background_image, rating, released} = game;
                            
        
                            return (
                                <Col sm={6} md={3} key={id}>
                                    <GameItem id={id} name={name} background_image={background_image} rating={rating} released={released} />
                                </Col>
                            );
                        })}
                </Row>

        </>
    );
   
}

export default GameList;