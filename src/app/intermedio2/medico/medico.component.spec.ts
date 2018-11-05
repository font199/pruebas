
import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from "./medico.service";
import { HttpClientModule } from "@angular/common/http";


describe('Medico Component', () => {

    let component: MedicoComponent;
    let fixture : ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        })
        //per poder teni acces al html, ..
        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
        

    })

    it('Ha de crearse el component', () =>{
        expect(component).toBeTruthy;
    });

    it('Debe de retornar el nombre del medico', () =>{
        const nombre = 'Juan';
        const res = component.saludarMedico(nombre);

        expect(res).toContain(nombre);
    });

});