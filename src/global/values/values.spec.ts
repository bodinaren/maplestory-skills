import * as Classes from "./";

describe("values", () => {
  describe("exists for all levels", () => {
    Object.keys(Classes).forEach((classKey) => {
      Object.keys(Classes[classKey]).forEach((skillKey) => {
        it(`${classKey} ${skillKey}`, () => {
          expect(Classes[classKey][skillKey].length).toEqual(11);
        });
      });
    });
  });
});
