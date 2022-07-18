import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { getGameSession } from '../Services/api';
import Card from '../Components/Card';
import '../Styles/GameSession.css';

export default function GameSession() {

    const { session } = useParams(); 
    const [gameSession, setGameSession] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selecteds, setSelecteds] = useState([]);
    const [matches, setMatches] = useState([]);
    const [retries, setRetries] = useState(0);

    const mixArray = arr => arr
        .flatMap(i => [i, i])
        .map(i => ({...i}))
        .sort(() => Math.random() > 0.5 ? 1 : -1)
    
    const isWin = () => matches.length === images.length;
    
    useEffect(() => {
        setLoading(true);
        getGameSession(session).then(r => {
            setGameSession(r.data.game_session)
            setLoading(false);
            setImages(mixArray(r.data.game_session.memotest.images));
        });
    }, []);

    const handleClick = (img) => {
        if (isVisible(img)) {
            return;
        }

        const curr = [...selecteds];
        curr.push(img);

        if (curr.length > 2) {
            setSelecteds([])
            setRetries(retries + 1);
        } else {
            setSelecteds(curr)
        }

        const isMatch = curr.length === 2 && curr[0]?.url === curr[1]?.url;
        if (isMatch) {
            matches.push(curr[0], curr[1]);
            setSelecteds([])
        }
        
    }

    const isVisible = (img) => selecteds.includes(img) || matches.includes(img);

    return loading ? <div>Loading...</div> : (

        <div className="GameSession">
            <h2>Game session - {gameSession.memotest.name}</h2>

            <div className="items">
                {images.map((img, i) => 
                    <div key={i} onClick={() => handleClick(img)}>
                        <Card url={img.url} visible={isVisible(img)} />
                    </div>
                )}
            </div>

            {isWin() ? <div>
                <h2>Win!!!</h2>

                [Retries: {retries}]
                -
                [Score: {Math.round(gameSession.number_of_pairs/retries * 100)}%]
            </div> : null}
            <hr />
            <Link to="/">Back home</Link>
        </div>
    );
}