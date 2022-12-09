export interface IEmployee {
  seniority: number;
  monthsDisabled: number;
  isPartTime: boolean;
  onVacation?: boolean;
}

export class Employee implements IEmployee {
  seniority: number;
  monthsDisabled: number;
  isPartTime: boolean;
  onVacation: boolean;
  constructor(newEmployee: IEmployee) {
    this.seniority = newEmployee.seniority;
    this.monthsDisabled = newEmployee.monthsDisabled;
    this.onVacation = newEmployee.onVacation ?? false;
    this.isPartTime = newEmployee.isPartTime;
  }
}

// function disabilityAmount(anEmployee: Employee) {
//   if (anEmployee.seniority < 2) return 0;
//   if (anEmployee.monthsDisabled > 12) return 0;
//   if (anEmployee.isPartTime) return 0;
// }
// compute the disability amount

export function createEmployee(anEmployee: IEmployee) {
  return new Employee(anEmployee);
}

export default function disabilityAmount(anEmployee: IEmployee) {
  if (isNotEligibleForDisability()) return 0;
  
  if (anEmployee.onVacation && anEmployee.seniority > 10) return 1;

  return 0.5;

  function isNotEligibleForDisability() {
    return (
      anEmployee.seniority < 2 ||
      anEmployee.monthsDisabled > 12 ||
      anEmployee.isPartTime
    );
  }
}
