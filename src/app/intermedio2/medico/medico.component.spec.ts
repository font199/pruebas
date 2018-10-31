
import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';


describe('Medico Component', () => {

    let component: MedicoComponent;
    let fixture : ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent]
        })
        //per poder teni acces al html, ..
        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
        

    })

    it('Ha de crearse el component', () =>{
        expect(component).toBeTruthy;
    });

});