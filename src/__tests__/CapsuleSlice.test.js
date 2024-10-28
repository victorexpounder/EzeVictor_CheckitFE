// capsulesSlice.test.js
import capsulesReducer, { add, editCapsule } from "../Redux/capsuleSlice";

describe("Capsules Slice", () => {
  it("should return the initial state", () => {
    expect(capsulesReducer(undefined, {})).toEqual({ "capsules": null,
      "error": false,
      "loading": false, });
  });

  it("should handle adding a new capsule", () => {
    const initialState = { capsules: [] };
    const newCapsule = {
      capsule_serial: "C123",
      status: "active",
      original_launch: new Date(),
      type: "Dragon 1.1",
    };
    const action = add(newCapsule);
    const state = capsulesReducer(initialState, action);

    expect(state.capsules).toHaveLength(1);
    expect(state.capsules[0]).toEqual(newCapsule);
  });

  it("should handle editing an existing capsule", () => {
    const initialState = {
      capsules: [
        { capsule_serial: "C123", status: "active", original_launch: new Date(), type: "Dragon 1.1" },
      ],
    };
    const updatedData = { status: "inactive" };
    const action = editCapsule({ capsule_serial: "C123", updatedData });
    const state = capsulesReducer(initialState, action);

    expect(state.capsules[0].status).toBe("inactive");
  });
});
