import '../styles/TopBar.css'
export default function TopBar({maxp,crntp}) {
    return (
        <>
        <div className="TopBar">
            <h1>Pokemon Memory Game</h1>
            <p>Click a Pokemon once.</p>
            <p>Clicking the same pokemon resets the score</p>
            
        </div>
        <div className="tracker">
            <div className="box">
                <div>Max Pts</div>
                {maxp}
            </div>
            <div className="box">
                <div>Crnt Pts</div>
                {crntp}
            </div>
        </div>
    </>
    );
}