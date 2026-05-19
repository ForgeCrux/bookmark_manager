import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { save_bookmarkHandler } from "./tools/save_bookmark.js";

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
    name: "Bookmark Manager",
    version: "0.1.0",
  });

  // ---------- Tools ----------
  server.registerTool("save_bookmark", {
    description: "Saves a new bookmark with URL, title and optional tags. Returns the bookmark ID.",
    inputSchema: { url: z.string(), title: z.string(), tags: z.array(z.any()).optional(), note: z.string().optional() },
  }, save_bookmarkHandler);

  return server;
}
