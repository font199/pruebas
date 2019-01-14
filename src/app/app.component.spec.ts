import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
     // schemas: [NO_ERRORS_SCHEMA],    //Perque no ens dongui errors de components que no tenim importats aqui
      declarations: [
        AppComponent,
        NavbarComponent
      ],
    }).compileComponents();
  }));

  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pruebas');
  });

  it('Debe de tenre un router-outlet ', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });




});
