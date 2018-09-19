
import { emptyRows , lastPage , disabledProp } from '../components/functions/innerFunctions';

test('emptyRows works', () => {

    expect( emptyRows (2,2,1) ).toBe(2);

});

test('lastPage works', () => {

    expect( lastPage (6, 4) ).toBe(1);

});

test('disabledProp works', () => {

    expect( disabledProp (2, 6, 4) ).toBeTruthy();
    expect( disabledProp (2, 6, 1) ).not.toBeTruthy();

});

