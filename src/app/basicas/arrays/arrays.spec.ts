import { obtenirMotos } from './arrays';

describe('Provas de arrays' , () => {

    it('Ha de retornar al menys 3 motos', () =>{
       const resp = obtenirMotos();
       expect(resp.length).toBeGreaterThanOrEqual(3);
    });

    it('Ha de existir la KTM i la Yamaha', () =>{
        const resp = obtenirMotos();
        expect(resp).toContain('KTM');
        expect(resp).toContain('Yamaha');
     });

});