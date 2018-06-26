import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotModalComponent } from './snapshot-modal.component';

describe('SnapshotModalComponent', () => {
  let component: SnapshotModalComponent;
  let fixture: ComponentFixture<SnapshotModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
