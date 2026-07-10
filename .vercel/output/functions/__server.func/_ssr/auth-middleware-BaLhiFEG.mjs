import { c as createMiddleware, g as getRequest } from "./server-gq1gdFmI.mjs";
const requireSupabaseAuth = createMiddleware({
  type: "function"
}).server(async ({ next }) => {
  const request = getRequest();
  if (!request?.headers) {
    throw new Error("Unauthorized");
  }
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    throw new Error(
      "Unauthorized: No token provided"
    );
  }
  if (!authHeader.startsWith("Bearer ")) {
    throw new Error(
      "Unauthorized: Invalid token format"
    );
  }
  const token = authHeader.replace(
    "Bearer ",
    ""
  );
  if (!token) {
    throw new Error(
      "Unauthorized: Missing token"
    );
  }
  return next({
    context: {
      token
    }
  });
});
export {
  requireSupabaseAuth as r
};
