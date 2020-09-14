import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { groupedOptions } from '../data/data';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    defaultValue: {
        firstName: 'Juliano',
        lastName: 'Silva' 
    }
}

export const Reducer = (state = initialState, action) => {
    return state;
}