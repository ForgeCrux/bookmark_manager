/**
 * search_recipes — Full-text search across recipe names, ingredients and cuisines.
 *
 * Side effects: reads
 * Implementation hint: Lowercase the query, scan all recipes, return those whose name/ingredients/cuisine contain the substring
 */
export async function search_recipesHandler(args: { query: string; limit?: number }) {
  // TODO: implement the real logic. The scaffold below returns a
  // placeholder so the server boots and Claude can call it.
  // `as const` widens nothing — the MCP SDK demands the literal
  // type "text" (not just any string) and tsc would otherwise
  // widen the object literal and reject the registerTool call.
  return {
    content: [{ type: "text" as const, text: `TODO: implement search_recipes — received ${JSON.stringify(args)}` }],
  };
}
