import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    // li passem el "null" ja que no utilitzara el http perque no esta implementada la crida al back
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: ha de carreagar els metges', () => { 
        const medicos = ['medico1','medico2','medico3'];

        //Espies el "servicio" i si algu crida a "getMedicos" llavors no l'executas 
        // i retornas l'observable generat
        spyOn(servicio,'getMedicos').and.callFake( ()=> {
            return Observable.from([ medicos ]);
        })
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Ha de cridar al servidor per afegir un metge', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake( medico => {
            return Observable.empty();
        })
        componente.agregarMedico();
        //Nomes mirem que s'agi cridat el agregarMedico del servidor. Ens es igual el que retorni.
        expect( espia).toHaveBeenCalled();
    });

    it('Ha dafegir un nou metge al array de metges', () => {
        const medico = { id: 1, nombre: 'xavier'};

        spyOn(servicio, 'agregarMedico')
            .and.returnValue( Observable.from( [medico] ) );

        componente.agregarMedico();

        expect(componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);
    });

    it('Si falla el agregarMedico, la propietat mensajeError, ha de ser ingual al error del servei', () => {

        const miError = 'No sa pogut agregar el metge';

        spyOn(servicio, 'agregarMedico')
            .and.returnValue( Observable.throw(miError));
        

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);
    });

    it('Ha de cridar el servidor per borrar un metge ',() =>{

        //Amb la crida del confirm del la funcio borrarMedico() ens demanarà 
        // confirmacio amb un windows modal. Podem mirar si es crida el confirm i retornar un true
        //Com si aguesim clicat "Aceptar".
        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(Observable.empty());

        componente.borrarMedico('2');

        expect(espia).toHaveBeenCalledWith('2');
    });

    it('NO ha de cridar el servidor per borrar un metge ',() =>{

        //Amb la crida del confirm del la funcio borrarMedico() ens demanarà 
        // confirmacio amb un windows modal. Podem mirar si es crida el confirm i retornar un true
        //Com si aguesim clicat "Aceptar".
        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(Observable.empty());

        componente.borrarMedico('2');

        expect(espia).not.toHaveBeenCalledWith('2');
    });



});
