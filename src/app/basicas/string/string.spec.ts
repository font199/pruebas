import { mensaje } from "./string";

describe('Pruebas de Strings' , () => {

    it('Ha de retornar un String', () => {
        const resp = mensaje('Xavier');
        expect(typeof resp).toBe('string');
    });

    it('Ha de retornar una salutació amb el nom enviat', () => {
        const nom = 'Xavier';
        const resp = mensaje(nom);
        expect(resp).toContain(nom);
    });

});


