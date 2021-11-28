import * as wasm from "minesweeper-wasm";

const BOARD_WIDTH = 20;
const BOARD_HEIGHT = 12;
const CELL_SIZE = 15;

function setRemainingBombCount() {
    document.getElementById("remaining-bombs").innerText = 
        game_board.number_of_bombs() - game_board.number_of_flags;
}

const game_dom_element = document.getElementById("game");
const game_board = wasm.Board.new(BOARD_WIDTH, BOARD_HEIGHT);
game_dom_element.innerHTML = game_board.render();
setRemainingBombCount();

window.addEventListener("click", (event) => {
    const x_clicked = Math.floor(event.clientX / CELL_SIZE);
    const y_clicked = Math.floor(event.clientY / CELL_SIZE);

    const was_bomb = game_board.reveal(x_clicked, y_clicked);

    if (was_bomb) {
        game_board.reveal_bombs();
    }

    game_dom_element.innerHTML = game_board.render();
    setRemainingBombCount();

    const victory = game_board.check_win_condition();
    if (victory) {
        console.log("print");
        game_dom_element.innerHTML = "YOU WON!!!!!!!!!!!!!! Gratulererer!";
    }
});

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const x_clicked = Math.floor(event.clientX / 15);
    const y_clicked = Math.floor(event.clientY / 15);

    game_board.toggle_flag(x_clicked, y_clicked);
    game_dom_element.innerHTML = game_board.render();
    setRemainingBombCount();

    const victory = game_board.check_win_condition();
    if (victory) {
        console.log("print");
        game_dom_element.innerHTML = "YOU WON!!!!!!!!!!!!!! Gratulererer!";
    }
});