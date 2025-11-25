import "./singleCard.css";

export default function SingleCard({ card, handleChoice, fliped, disabled }) {
  function handleClick() {
    if (!disabled) {
      // 카드 클릭이 비활성화(true)가 아니면
      handleChoice(card);
    }
  }

  return (
    <div className="card">
      <div className={fliped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front"></img>
        <img
          onClick={handleClick}
          className="back"
          src="/img/cover.png"
          alt="card back"
        ></img>
      </div>
    </div>
  );
}
