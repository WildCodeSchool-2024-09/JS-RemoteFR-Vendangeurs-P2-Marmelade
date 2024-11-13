import GameRulesModal from "../components/GameRulesModal/GameRulesModal";
import Game_zone from "../components/Game_zone/Game_zone";
import Header from "../components/Header/Header";
import "./Game_page.css";

function Game_page() {
  return (
    <div id="gamePage">
      <Header />
      <GameRulesModal /> {/* Affiche la modale autonome */}
      <Game_zone />
    </div>
  );
}

export default Game_page;
