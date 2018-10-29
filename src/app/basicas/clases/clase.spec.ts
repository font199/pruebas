import { Jugador } from "./clase";

describe('Provas de clase' , () => {

    let jugador = new Jugador();

   beforeAll( () => {
       console.log('beforeAll');
   });
   beforeEach( () => {
       console.log('beforeEach');
       jugador = new Jugador()
   });
   afterAll( () => {
       console.log('afterAll');
   });
   afterEach( () => {
       console.log('afterEach');
       //jugador.vida = 100;
   });


    it('Ha de retornar 80 de vida si rep 20 de dany', () =>{

        //const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);

    });

    it('Ha de retornar 50 de vida si rep 50 de dany', () =>{

        //const jugador = new Jugador();
        const resp = jugador.recibeDanio(50); 
        expect(resp).toBe(50);

    });

    it('Ha de retornar 0 de vida si rep 100 de dany', () =>{

        //const jugador = new Jugador();
        const resp = jugador.recibeDanio(100); 
        expect(resp).toBe(0);

    });

});