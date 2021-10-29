import { createSelector } from "reselect";

const readOne = (state: any) => state.one;

const selector0 = createSelector([readOne], (one) => one);
const selector1 = createSelector([selector0], (s) => s);
const selector2 = createSelector([selector1], (s) => s);
const selector3 = createSelector([selector2], (s) => s);
const selector4 = createSelector([selector3], (s) => s);
const selector5 = createSelector([selector4], (s) => s);
const selector6 = createSelector([selector5], (s) => s);
const selector7 = createSelector([selector6], (s) => s);
const selector8 = createSelector([selector7], (s) => s);
const selector9 = createSelector([selector8], (s) => s);
