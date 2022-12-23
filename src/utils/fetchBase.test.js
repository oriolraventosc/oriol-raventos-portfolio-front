import { renderHook } from "@testing-library/react";
import useProject from "./fetchBase";

const mockLoad = jest.fn();

jest.mock("./fetchBase", () => {
  return () => ({
    loadAllProjects: mockLoad,
  });
});

describe("Given a useContact hook", () => {
  describe("When it is invoked with the method addContact", () => {
    test("Then it should return a 200 status", async () => {
      const fakeResult = {
        projects: [{ name: "BlueState", url: "url", picture: "picture" }],
      };
      mockLoad.mockReturnValue(fakeResult);
      const {
        result: {
          current: { loadAllProjects },
        },
      } = renderHook(() => useProject());

      await loadAllProjects();

      await expect(loadAllProjects).toHaveReturned();
    });
  });
});
