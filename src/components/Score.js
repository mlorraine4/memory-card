const Score = ({score, highscore}) => {
    return(
        <div className="scoreBoard">
            <div className="score">score: {score}</div>
            <div className="score">highscore: {highscore}</div>
        </div>
    )
}

export default Score;