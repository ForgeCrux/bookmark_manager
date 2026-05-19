import { describe, it, expect } from "vitest";
import { add_recipeHandler } from "../src/tools/add_recipe";
import { list_recipesHandler } from "../src/tools/list_recipes";
import { search_recipesHandler } from "../src/tools/search_recipes";
import { rate_recipeHandler } from "../src/tools/rate_recipe";

describe("add_recipe", () => {
  it("returns a content array", async () => {
    const result = await add_recipeHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("list_recipes", () => {
  it("returns a content array", async () => {
    const result = await list_recipesHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("search_recipes", () => {
  it("returns a content array", async () => {
    const result = await search_recipesHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("rate_recipe", () => {
  it("returns a content array", async () => {
    const result = await rate_recipeHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

