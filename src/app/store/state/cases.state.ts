import { ICases } from '../../models/cases.model';

export interface ICasesState {
  cases: ICases[];
  casesByCountry: ICases;
}

export const initialCasesState: ICasesState = {
  cases: null,
  casesByCountry: null
}
