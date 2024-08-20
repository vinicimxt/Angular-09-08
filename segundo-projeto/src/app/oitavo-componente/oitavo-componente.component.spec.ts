import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OitavoComponenteComponent } from './oitavo-componente.component';

describe('OitavoComponenteComponent', () => {
  let component: OitavoComponenteComponent;
  let fixture: ComponentFixture<OitavoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OitavoComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OitavoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
