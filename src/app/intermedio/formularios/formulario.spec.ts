import { FormularioRegister } from "./formulario";
import { FormBuilder } from "@angular/forms";

describe('Formularios', () => {
    let componente: FormularioRegister;

    beforeEach( () => {
        componente = new FormularioRegister(new FormBuilder() );
    });

    it('ha de crear un formulari amb 2 camps, email i password', () => {
         expect(componente.form.contains('email')).toBeTruthy();
         expect(componente.form.contains('password')).toBeTruthy();
    });

    it('El email ha de ser obligatori', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El email ha de ser un email valid', () => {
        const control = componente.form.get('email');
        control.setValue('xavier@gmail.com');
        expect(control.valid).toBeTruthy();
    });

    

});