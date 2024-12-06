import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaTeTi = () => {
  const [gameState, setGameState] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [gameActive, setGameActive] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [status, setStatus] = useState('Esperando a los jugadores...');
  const [playerNames, setPlayerNames] = useState({ playerO: '', playerX: '' });

  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    if (showGame) {
      checkGameStatus();
    }
  }, [gameState]);

  const handleCellClick = (index) => {
    if (gameState[index] === '' && gameActive) {
      const newGameState = [...gameState];
      newGameState[index] = currentPlayer;
      setGameState(newGameState);
      setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');
    }
  };

  const checkGameStatus = () => {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        setStatus(
          `${gameState[a] === 'O' ? playerNames.playerO : playerNames.playerX} ha ganado el juego!`
        );
        setGameActive(false);
        return;
      }
    }

    if (!gameState.includes('')) {
      setStatus('El juego ha terminado en empate!');
      setGameActive(false);
    } else {
      setStatus(`Turno de ${currentPlayer === 'O' ? playerNames.playerO : playerNames.playerX}`);
    }
  };

  const restartGame = () => {
    setGameState(Array(9).fill(''));
    setCurrentPlayer('O');
    setGameActive(true);
    setStatus(`Turno de ${playerNames.playerO}`);
  };

  const handleNameChange = (e, player) => {
    setPlayerNames({
      ...playerNames,
      [player]: e.target.value,
    });
  };

  const startGame = () => {
    if (playerNames.playerO.trim() && playerNames.playerX.trim()) {
      setShowGame(true);
      setGameActive(true);
      setStatus(`Turno de ${playerNames.playerO}`);
    } else {
      setStatus('Por favor, ingresa los nombres de ambos jugadores.');
    }
  };

  const resetPlayers = () => {
    setPlayerNames({ playerO: '', playerX: '' });
    setGameState(Array(9).fill(''));
    setCurrentPlayer('O');
    setGameActive(false);
    setShowGame(false);
    setStatus('Esperando a los jugadores...');
  };

  return (
    <div>
      {!showGame ? (
        <div className="div-nameGame">
          <h3>Ingresa los nombres de los jugadores</h3>
          <div className="divinputname">
            <input
              className="input-namei"
              type="text"
              placeholder="Nombre del Jugador O"
              value={playerNames.playerO}
              onChange={(e) => handleNameChange(e, 'playerO')}
            />
            <input
              className="input-namei"
              type="text"
              placeholder="Nombre del Jugador X"
              value={playerNames.playerX}
              onChange={(e) => handleNameChange(e, 'playerX')}
            />
            <button onClick={startGame}>Iniciar Juego</button>
          </div>
          <p>{status}</p>
        </div>
      ) : (
        <div>
          <h2 className='Game-statusName'>{status}</h2>
          <div className="game-container">
            {gameState.map((cell, index) => (
              <div
                key={index}
                className="game-cell"
                onClick={() => handleCellClick(index)}
              >
                {cell}
              </div>
            ))}
          </div>
          <div className="buttons">
            <button onClick={restartGame}>Reiniciar Juego</button>
            <button onClick={resetPlayers}>Ingresar Nuevos Jugadores</button>
            <Link to="/" className="link-home">
              Regresa a Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaTeTi;
