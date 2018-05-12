import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloukitDropoutOutletComponent } from './dropout-outlet.component';
import { CloukitDropoutService } from '../services/dropout.service';


describe('CloukitToggleComponent', () => {
  let component: CloukitDropoutOutletComponent;
  let fixture: ComponentFixture<CloukitDropoutOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloukitDropoutOutletComponent ],
      imports: [ ],
      providers: [ CloukitDropoutService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitDropoutOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
