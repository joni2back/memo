import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getMemotests, createGameSession } from '../Services/api';
import Memotest from '../Components/Memotest';
import '../Styles/Home.css';

function Home() {
  const navigate = useNavigate();
  const [memotests, setMemotests] = useState([]);

  const hasGameSession = (memotest) => localStorage[`game_session_${memotest.id}`];

  useEffect(() => {
    getMemotests().then(r => setMemotests(r.data.memotests));
  }, []);

  const handlePlay = (memotest) => {
    if (! hasGameSession(memotest)) {
      createGameSession(memotest.id).then(r => {
        const gameSession = r.data.createGameSession;
        localStorage[`game_session_${memotest.id}`] = gameSession.id;
        navigate("/game-session/" + gameSession.id);
      });
    }
    navigate("/game-session/" + localStorage[`game_session_${memotest.id}`]);
  }

  return (
    <div className="Home">
      <h2>Memotest Games!</h2>

      {memotests.map((m, i) =>
        <Memotest
          key={i}
          handleClick={() => handlePlay(m)}
          buttonText={hasGameSession(m) ? 'Continue' : 'Start'}
          name={m.name}
        />
      )}
    </div>
  );
}

export default Home;
