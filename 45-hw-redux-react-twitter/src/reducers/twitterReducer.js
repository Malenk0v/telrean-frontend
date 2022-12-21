import { CHANGE_STATS } from "../actions/statsActions";
import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userActions";

export const twitterReducer = (state, action) => {
    let user;
    let stats;
    switch (action.type) {
        case CHANGE_AVATAR:
            user = { ...state.user };
            user.avatar = action.payload || user.avatar;
            return { ...state, user };
        case CHANGE_NAME:
            user = { ...state.user };
            user.name = action.payload || user.name;
            return { ...state, user };
        case CHANGE_STATS:
            const res = state.stats[action.payload.statsType] + action.payload.sum;
            stats = { ...state.stats, [action.payload.statsType]: res < 0 ? 0 : res }
            return { ...state, stats };
        default: return state;
    }
}