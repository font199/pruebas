import { Jugador2 } from './jugador2';


describe('Jugador 2 Emit', () => {

    let jugador : Jugador2;

    beforeEach( () => jugador = new Jugador2() );

    it('ha de emetre un event cuan rep dany', () => {
        let novaVida = 0;
        jugador.vidaCambia.subscribe( vida => {
            novaVida = vida;
        });

        jugador.recibeDanio(1000);

        expect(novaVida).toBe(0);
    });

    it('ha de emetre un event cuan rep dany i sobreviu si es menys de 100', () => {
        let novaVida = 0;

        jugador.vidaCambia.subscribe( vida => novaVida = vida);

        jugador.recibeDanio(50);

        expect(novaVida).toBe(50);
    });

}); 