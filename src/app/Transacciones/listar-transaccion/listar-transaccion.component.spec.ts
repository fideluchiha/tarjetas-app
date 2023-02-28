import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransaccionComponent } from './listar-transaccion.component';

describe('ListarTransaccionComponent', () => {
  let component: ListarTransaccionComponent;
  let fixture: ComponentFixture<ListarTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTransaccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
