import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add a multiple expenses', () => {
    const res = selectExpensesTotal([expenses[0], expenses[2]]);
    expect(res).toBe(4695);
});