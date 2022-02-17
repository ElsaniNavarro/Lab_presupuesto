import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PregutnasComponent} from "./pregutnas.component";

describe('PreguntasComponent', () => {
  let component: PregutnasComponent;
  let fixture: ComponentFixture<PregutnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregutnasComponent ]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregutnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});