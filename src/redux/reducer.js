import { COMMENTS } from '../sharedFolder/comments';
import { PROMOTIONS } from '../sharedFolder/promotions';
import { LEADERS } from '../sharedFolder/leaders';
import { DISHES } from '../sharedFolder/dishes';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};