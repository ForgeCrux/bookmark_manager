/**
 * add_recipe — Adds a new recipe with name, cuisine, ingredients and steps. Returns the recipe ID.
 *
 * Side effects: writes
 * Implementation hint: Generate UUID, validate fields, push into Map<id, Recipe>, return { id, savedAt }
 */
export async function add_recipeHandler(args: { name: string; cuisine: string; ingredients: any[]; steps: any[]; prepTimeMinutes?: number }) {
  // TODO: implement the real logic. The scaffold below returns a
  // placeholder so the server boots and Claude can call it.
  // `as const` widens nothing — the MCP SDK demands the literal
  // type "text" (not just any string) and tsc would otherwise
  // widen the object literal and reject the registerTool call.
  return {
    content: [{ type: "text" as const, text: `TODO: implement add_recipe — received ${JSON.stringify(args)}` }],
  };
}
