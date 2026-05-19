import { describe, it, expect } from "vitest";
import { save_bookmarkHandler } from "../src/tools/save_bookmark";

describe("save_bookmark", () => {
  it("returns a content array", async () => {
    const result = await save_bookmarkHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

