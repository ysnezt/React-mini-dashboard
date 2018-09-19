
import { getModel } from '../components/functions/ApiFunctions';

test('get device model', () => {

    const add = "/devicemodels/id1";
    const id = "/devices/id3";

    expect( getModel(add,id) ).toMatch('PTD2');

});

