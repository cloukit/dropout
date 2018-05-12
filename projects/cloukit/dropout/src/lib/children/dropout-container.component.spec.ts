import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloukitDropoutContainerComponent } from './dropout-container.component';


describe('CloukitToggleComponent', () => {
  let component: CloukitDropoutContainerComponent;
  let fixture: ComponentFixture<CloukitDropoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloukitDropoutContainerComponent ],
      imports: [ ],
      providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitDropoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
