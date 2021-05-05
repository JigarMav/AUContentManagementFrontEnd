import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorOperationDialogComponent } from './creator-operation-dialog.component';

describe('CreatorOperationDialogComponent', () => {
  let component: CreatorOperationDialogComponent;
  let fixture: ComponentFixture<CreatorOperationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorOperationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorOperationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
