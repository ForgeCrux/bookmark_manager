import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { add_recipeHandler } from "./tools/add_recipe.js";
import { list_recipesHandler } from "./tools/list_recipes.js";
import { search_recipesHandler } from "./tools/search_recipes.js";
import { rate_recipeHandler } from "./tools/rate_recipe.js";

/**
 * Build a fresh MCP server instance.
 *
 * We export a FACTORY rather than a singleton so the HTTP
 * transport can hand each new session its own `McpServer`.
 * The MCP SDK rejects a second `initialize` on the same
 * Server instance, so a per-session factory is mandatory
 * for the streamable-http transport.
 */
export function createServer(): McpServer {
  const server = new McpServer({
    name: "Recipe Manager MCP",
    version: "0.1.0",
  });

  // ---------- Tools ----------
  server.registerTool("add_recipe", {
    description: "Adds a new recipe with name, cuisine, ingredients and steps. Returns the recipe ID.",
    inputSchema: { name: z.string(), cuisine: z.string(), ingredients: z.array(z.any()), steps: z.array(z.any()), prepTimeMinutes: z.number().optional() },
  }, add_recipeHandler);

  server.registerTool("list_recipes", {
    description: "Lists all recipes, optionally filtered by cuisine.",
    inputSchema: { cuisine: z.string().optional(), limit: z.number().optional() },
  }, list_recipesHandler);

  server.registerTool("search_recipes", {
    description: "Full-text search across recipe names, ingredients and cuisines.",
    inputSchema: { query: z.string(), limit: z.number().optional() },
  }, search_recipesHandler);

  server.registerTool("rate_recipe", {
    description: "Adds a 1-5 star rating for a recipe and returns the new average.",
    inputSchema: { recipeId: z.string(), stars: z.number() },
  }, rate_recipeHandler);

  // ---------- Resources ----------
  server.registerResource("popular_cuisines", "", {
    description: "Top cuisines by recipe count.",
    mimeType: "application/json",
  }, async (uri) => ({
    contents: [{ uri: uri.href, text: "TODO: return resource contents" }]
  }));

  server.registerResource("top_rated_recipes", "", {
    description: "Recipes with highest average rating (min 3 ratings).",
    mimeType: "application/json",
  }, async (uri) => ({
    contents: [{ uri: uri.href, text: "TODO: return resource contents" }]
  }));

  // ---------- Prompts ----------
  server.registerPrompt("weekly_meal_plan", {
    description: "Generates a 7-day meal plan using the user's saved recipes.",
    argsSchema: {dietaryPreference: z.string().optional()},
  }, async (args) => ({
    messages: [{ role: "user" as const, content: { type: "text" as const, text: `` } }]
  }));

  server.registerPrompt("recipe_summary", {
    description: "Summarises a single recipe in 2-3 sentences for sharing.",
    argsSchema: {recipeId: z.string()},
  }, async (args) => ({
    messages: [{ role: "user" as const, content: { type: "text" as const, text: `` } }]
  }));

  return server;
}
