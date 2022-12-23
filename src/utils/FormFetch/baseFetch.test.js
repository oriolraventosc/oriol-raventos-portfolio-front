import { renderHook } from "@testing-library/react";
import useContact from "./baseFetch";

const mockAdd = jest.fn();

jest.mock("./baseFetch", () => {
  return () => ({
    addContact: mockAdd,
  });
});

describe("Given a useContact hook", () => {
  describe("When it is invoked with the method addContact", () => {
    test("Then it should return a 200 status", async () => {
      const {
        result: {
          current: { addContact },
        },
      } = renderHook(() => useContact());
      const contactData = {
        name: "John",
        email: "john@gmail.com",
        telephone: 934571122,
        message: "Expected message",
      };

      await mockAdd(contactData);

      await expect(mockAdd).toHaveReturned();
    });
  });
});
