import { DEFAULTVALUES } from '../data/data';

export const DefaultValues = (state = DEFAULTVALUES, action) => {
    switch(action.type) {
        default:
            return state;
    }
}