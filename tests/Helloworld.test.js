

import HelloWorld from '../utils/HelloWorld';

it ("Should return 'Hello Raphael'", ()=>{

    const result = HelloWorld();

    expect(result).toBe("Hello Raphael");

});