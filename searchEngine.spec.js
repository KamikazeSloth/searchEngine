import { myModuleFunction } from "./message"

test('find most seached word', () => {

    const result = myModuleFunction(1)
   
    expect(result).toStrictEqual(1)
});
