import { usuarioLogeado } from "./booleans";

describe('Provas de Booleans', () => {

    it('Ha de retornar True', () =>{
       const resp =  usuarioLogeado();
       expect(resp).toBeTruthy();
    });
    
});