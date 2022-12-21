export const start = "start";
export const game = "game";
export const result = "result";

export const cardinfo = [['hear','diamond', 'club', 'spade'],[1,2,3,4,5,6,7,8,9,10,11,12,13,14]];
export const cardDeck = [...cardinfo[0].map(item => cardinfo[1].map(number => [item, number]))];
export const fullCardDeck = cardDeck[0].concat(cardDeck[1],cardDeck[2],cardDeck[3])


