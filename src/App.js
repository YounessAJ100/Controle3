// PlayerPage.js
import React from 'react';
import './PlayerPage.css';

const PlayerPage = () => {
    return (
        <div className="player-container">
            <header className="player-header">
                <h1 className="player-title">Player Profile</h1>
            </header>
            <main className="player-main">
                <section className="player-info">
                <img 
                    src="/images/download.jpeg" 
                    alt="Player" 
                    className="player-image" 
                />

                    <h2 className="player-name">leo messi</h2>
                    <p className="player-stats">Goals: 1000 | Assists: 300 | Matches: 970</p>
                </section>
                <section className="player-bio">
                    <h3 className="bio-title">Biography</h3>
                    <p className="bio-text">Leo messi is a skilled football player known for his exceptional scoring ability and teamwork. He has been a key player in numerous matches, making significant contributions to his team's success.</p>
                </section>
            </main>
            <footer className="player-footer">
                <button className="player-button">View Highlights</button>
            </footer>
        </div>
    );
};

export default PlayerPage;
