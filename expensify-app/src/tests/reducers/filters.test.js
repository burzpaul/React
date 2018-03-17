import moment from 'moment';
import fitlersReducers from '../../reducers/filters';

test('shoul setup default filter values', () => {
    const state = fitlersReducers(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = fitlersReducers(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };


    const action = { type: 'SORT_BY_DATE' };

    const state = fitlersReducers(currentState, action);

    expect(state.sortBy).toBe('date');
});


test('should set text filter', () => {

    const text = 'Text filter';

    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };

    const state = fitlersReducers(undefined, action);

    expect(state.text).toBe(text);
})
test('should set text startDate filter', () => {

    const startDate = moment(0);

    const action = {
        type: 'SET_START_DATE',
        startDate
    };

    const state = fitlersReducers(undefined, action);

    expect(state.startDate).toBe(startDate);

})
test('should set text endDate filter', () => {

    const endDate = moment(0);

    const action = {
        type: 'SET_END_DATE',
        endDate
    };

    const state = fitlersReducers(undefined, action);

    expect(state.endDate).toBe(endDate);
})