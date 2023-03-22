import { useEffect, useState } from "react";
import Card from "./Card";
import { controller } from "./controller";
import Score from "./Score";

const Game = () => {
  let images = [
    { title: "calcifer" },
    { title: "jiji" },
    { title: "kodama" },
    { title: "kyo" },
    { title: "killua" },
    { title: "edward" },
    { title: "usui" },
    { title: "tomioka" },
    { title: "itadori" },
    { title: "kurapika" },
    { title: "satoru" },
    { title: "kaneki" },
  ];

  const [cards, setCards] = useState(images);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffle = (cardArray) => {
    for (let i = cardArray.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [cardArray[randomIdx], cardArray[i]] = [
        cardArray[i],
        cardArray[randomIdx],
      ];
    }
    return cardArray;
  };

  const handleClick = (title) => {
    if (controller.checkTurn(title)) {
      setScore(score + 1);
    } else {
      controller.displayWrongMove(title);
      setTimeout(() => {
        controller.clearBoard(title);
        setScore(0);
        controller.clearBoard(title);
      }, 1000);
    }
  };

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
  }, [score]);

  return (
    <div>
      <Score score={score} highscore={highScore} />
      <div className="cards">
        {cards.map((card) => (
          <div
            onClick={() => {
              handleClick(card.title);
            }}
            key={card.title}
            className="cardContainer"
          >
            <Card title={card.title} />
            <div>{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
