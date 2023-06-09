import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidoPassComponent } from './olvido-pass.component';

describe('OlvidoPassComponent', () => {
  let component: OlvidoPassComponent;
  let fixture: ComponentFixture<OlvidoPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidoPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlvidoPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
