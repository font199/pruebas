import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {
        
        component.leyenda = 'Progreso de carga';

        //disparar la deteccio de canvis perque sen enteri de que em modificat "leyenda"
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3') ).nativeElement;

        expect(elem.innerHTML).toContain('Progreso de carga');

    });

    it('Ha de mostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();

        fixture.whenStable().then( () => { // per que sinos recupera el valor de l'element avans del canvi
            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;
    
            console.log(elem);
    
            expect(elem.value).toBe('55');
        }); 
    });

    it('Ha de incrementar/decrementar en 5, con un click en el boton', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });


    it('En el titulo del componente, debe de mostrar el progreso', () =>{
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3') ).nativeElement;
        const primerBoton = fixture.debugElement.query(By.css('.btn-primary'));

        primerBoton.triggerEventHandler('click', null);

        fixture.detectChanges();

        expect(elem.innerHTML).toContain('45');
    });
    

});
