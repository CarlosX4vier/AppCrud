import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaSavePage } from './tarefa-save.page';

describe('TarefaSavePage', () => {
  let component: TarefaSavePage;
  let fixture: ComponentFixture<TarefaSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaSavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
