import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UpdateCourseComponent } from './update-course.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('UpdateCourseComponent', () => {
  let component: UpdateCourseComponent;
  let fixture: ComponentFixture<UpdateCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [HttpClientTestingModule],

      imports: [RouterTestingModule, HttpClient, HttpClientModule, FormsModule],
      // providers: [{provide: SocialAuthService}],

      declarations: [UpdateCourseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 8 labels', () => {
    const location = TestBed.inject(Location);
    const labels = fixture.debugElement.queryAll(By.css('.modal-body'));
    expect(labels.length).toBe(8);
    expect(labels[0].nativeElement.textContent).toBe('Manager Name');
    expect(labels[1].nativeElement.textContent).toBe('Manager Email');
    expect(labels[2].nativeElement.textContent).toBe('Description');
    expect(labels[3].nativeElement.textContent).toBe('Location');
    expect(labels[4].nativeElement.textContent).toBe('Skills');
    expect(labels[5].nativeElement.textContent).toBe('Min Experience');
    expect(labels[6].nativeElement.textContent).toBe('Vacancies');
    expect(labels[7].nativeElement.textContent).toBe('Joining Date');
  });
});
