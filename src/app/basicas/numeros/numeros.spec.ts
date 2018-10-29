import { incrementar } from './numeros';

describe('Proves de numeros', () => {

    it('Ha de retornar 100 si el numero inserit es mes gran que 100', () => {
        const resp = incrementar(120);
        expect(resp).toBe(100);
    });

    it('Ha de retornar el numero inserit +1 si no es mes gran que 100', () => {
        const resp = incrementar(80);
        expect(resp).toBe(81);
    });
});