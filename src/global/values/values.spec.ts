import * as Archer from "./archer";
import * as HeavyGunner from "./heavy-gunner";
import * as Priest from "./priest";
import * as Thief from "./thief";

function loopArrayValues(classValues, callback) {
  Object.keys(classValues).forEach((skillKey) => {
    let skill = classValues[skillKey];
    Object.keys(skill).forEach((propKey) => {
      let item = classValues[skillKey][propKey];
      if (Array.isArray(item)) {
        callback(item, skill, `${skillKey} ${propKey}`);
      }
    });
  });
}

describe("Values", () => {
  describe("Archer", () => {
    describe("arrays has values for all levels", () => {
      loopArrayValues(Archer, (arr, obj, key) => {
        it(key, () => {
          expect(arr.length).toEqual(obj.maxLevel + 1);
        });
      });
    });
  });
  describe("Heavy Gunner", () => {
    describe("arrays has values for all levels", () => {
      loopArrayValues(HeavyGunner, (arr, obj, key) => {
        it(key, () => {
          expect(arr.length).toEqual(obj.maxLevel + 1);
        });
      });
    });
  });
  describe("Priest", () => {
    describe("arrays has values for all levels", () => {
      loopArrayValues(Priest, (arr, obj, key) => {
        it(key, () => {
          expect(arr.length).toEqual(obj.maxLevel + 1);
        });
      });
    });
  });
  describe("Thief", () => {
    describe("arrays has values for all levels", () => {
      loopArrayValues(Thief, (arr, obj, key) => {
        it(key, () => {
          expect(arr.length).toEqual(obj.maxLevel + 1);
        });
      });
    });
  });
});
