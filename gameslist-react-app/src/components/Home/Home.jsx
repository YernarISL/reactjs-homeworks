import React, { useState } from 'react';
import './Home.css';
import { NavLink } from 'react-router';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [games] = useState([
        { id: 1, title: 'Elden Ring', image: 'https://cdn.mos.cms.futurecdn.net/PjhveTjTLLAvSuSeZsjGsJ-1200-80.jpg', description: 'Action RPG with open world' },
        { id: 2, title: 'Cyberpunk 2077', image: 'https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/872822c5e50dc71f345416098d29fc3ae5cd26c1-1280x720.jpg', description: 'Futuristic open world adventure' },
        { id: 3, title: 'Starfield', image: 'https://www.glitched.online/wp-content/uploads/2023/06/starfield-ship-1.jpg', description: 'Space exploration game' },
    ]);

    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home">
            <nav className="navbar">
                <h1>Games List</h1>
                <div className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/games">Games</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </nav>


            <div className="games-container">
                {filteredGames.map(game => (
                    <div key={game.id} className="game-card">
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                        <img className="game-image" src={game.image} alt={game.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}