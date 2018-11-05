import { TestBed,ComponentFixture, async } from '@angular/core/testing';
import { CalculatorComponent } from './calc.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
/*
Test cases for calculator functions
*/
describe('Calculator with various functions', () => {
  let firstNum :number = 0;
  let secondNum :number = 0;
  let result : number = 0;
  let operation: string="+"
  let calculator : CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
/*
Loading required depedencies
*/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [    
      FormsModule,
      ReactiveFormsModule
      ]   
    })
    .compileComponents();
  }));
/*
Activities which needs to be done before each test case executes
*/
  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    calculator = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the calc', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const calc = fixture.debugElement.componentInstance;
    expect(calc).toBeTruthy();
  });

  it(`should have as title 'calculator'`, () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const calc = fixture.debugElement.componentInstance;
    expect(calc.title).toEqual('Calculator');
  });


  it('check calculator number addition', () => {
    calculator.firstNum=10;
    calculator.secondNum=20;
    calculator.operation="Add";
    calculator.calculate();        
    expect(calculator.result)
    .toEqual(30);
  });

  it('check calculator number substraction', () => {
    calculator.firstNum=20;
    calculator.secondNum=10;
    calculator.operation="Subtract";
    calculator.calculate();        
    expect(calculator.result)
    .toEqual(10);
  });
  it('check calculator number multiplication', () => {
    calculator.firstNum=5;
    calculator.secondNum=9;
    calculator.operation="Multiply";
    calculator.calculate();        
    expect(calculator.result)
    .toEqual(45);
  });
  it('check calculator number division', () => {
    calculator.firstNum=20;
    calculator.secondNum=4;
    calculator.operation="Divide";
    calculator.calculate();        
    expect(calculator.result)
    .toEqual(5);
  });
});
