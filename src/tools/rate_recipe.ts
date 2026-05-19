/**
 * rate_recipe — Adds a 1-5 star rating for a recipe and returns the new average.
 *
 * Side effects: writes
 * Implementation hint: Look up recipe by id, append rating to its ratings array, recompute average, return { recipeId, averageRating, ratingCount }
 */
export async function rate_recipeHandler(args: { recipeId: string; stars: number }) {
  // TODO: implement the real logic. The scaffold below returns a
  // placeholder so the server boots and Claude can call it.
  // `as const` widens nothing — the MCP SDK demands the literal
  // type "text" (not just any string) and tsc would otherwise
  // widen the object literal and reject the registerTool call.
  return {
    content: [{ type: "text" as const, text: `TODO: implement rate_recipe — received ${JSON.stringify(args)}` }],
  };
}
