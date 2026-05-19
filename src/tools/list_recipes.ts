/**
 * list_recipes — Lists all recipes, optionally filtered by cuisine.
 *
 * Side effects: reads
 * Implementation hint: Return array of { id, name, cuisine, prepTimeMinutes, averageRating } sorted by createdAt desc
 */
export async function list_recipesHandler(args: { cuisine?: string; limit?: number }) {
  // TODO: implement the real logic. The scaffold below returns a
  // placeholder so the server boots and Claude can call it.
  // `as const` widens nothing — the MCP SDK demands the literal
  // type "text" (not just any string) and tsc would otherwise
  // widen the object literal and reject the registerTool call.
  return {
    content: [{ type: "text" as const, text: `TODO: implement list_recipes — received ${JSON.stringify(args)}` }],
  };
}
