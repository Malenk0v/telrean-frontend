import { createSlice } from "@reduxjs/toolkit";

const defaultGame = {
    score: [0, 0]
}

const gameSlice = createSlice({
    name: 'game',
    initialState: defaultGame,
    reducers: {
        win(game, action) {
            game.result = 'Win';
            game.score[1]++;
        },
        lose(game, action) {
            game.result = 'Lose';
            game.score[0]++;
        },
        draw(game, action) {
            game.result = 'Draw';
        }
    }
})

export const { draw, win, lose } = gameSlice.actions;
export default gameSlice.reducer;