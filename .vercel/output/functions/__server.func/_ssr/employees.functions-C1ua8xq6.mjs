import { c as createServerRpc } from "./createServerRpc-Dj_GIHvz.mjs";
import { a as createServerFn } from "./server-CaD2Aij6.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Cl5XF0ua.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, e as enumType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const STAFF_ROLES = ["admin", "manager", "sales_executive", "operations", "insurance_executive", "mf_executive"];
async function getAdminUserId(token) {
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  const {
    data,
    error
  } = await supabaseAdmin.auth.getUser(token);
  if (error || !data.user) throw new Error("Unauthorized");
  const {
    data: role
  } = await supabaseAdmin.from("user_roles").select("role").eq("user_id", data.user.id).eq("role", "admin").maybeSingle();
  if (!role) throw new Error("Forbidden: admin only");
  return data.user.id;
}
function generatePassword(len = 12) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$";
  let out = "";
  const arr = new Uint32Array(len);
  crypto.getRandomValues(arr);
  for (let i = 0; i < len; i++) out += chars[arr[i] % chars.length];
  return out;
}
const listEmployees_createServerFn_handler = createServerRpc({
  id: "74a58c73313e14de3edc4f89c650c0ce6c794292f220878d6039341c993f975f",
  name: "listEmployees",
  filename: "src/lib/employees.functions.ts"
}, (opts) => listEmployees.__executeServer(opts));
const listEmployees = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(listEmployees_createServerFn_handler, async ({
  context
}) => {
  await getAdminUserId(context.token);
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  const {
    data: roles
  } = await supabaseAdmin.from("user_roles").select("user_id, role").in("role", [...STAFF_ROLES]);
  const ids = Array.from(new Set((roles ?? []).map((r) => r.user_id)));
  if (ids.length === 0) return {
    employees: []
  };
  const {
    data: profiles
  } = await supabaseAdmin.from("profiles").select("id, email, full_name, phone").in("id", ids);
  const rolesByUser = /* @__PURE__ */ new Map();
  for (const r of roles ?? []) {
    const arr = rolesByUser.get(r.user_id) ?? [];
    arr.push(r.role);
    rolesByUser.set(r.user_id, arr);
  }
  const employees = (profiles ?? []).map((p) => ({
    id: p.id,
    email: p.email,
    full_name: p.full_name,
    phone: p.phone,
    roles: rolesByUser.get(p.id) ?? []
  }));
  return {
    employees
  };
});
const createEmployee_createServerFn_handler = createServerRpc({
  id: "8f1ebf734379d5d119683110ab75ae99281d57ed301b9c7b93c3e41d5d1f09d6",
  name: "createEmployee",
  filename: "src/lib/employees.functions.ts"
}, (opts) => createEmployee.__executeServer(opts));
const createEmployee = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
  email: stringType().trim().email(),
  full_name: stringType().trim().min(1).max(120),
  phone: stringType().trim().min(7).max(20),
  role: enumType(STAFF_ROLES)
}).parse(input)).handler(createEmployee_createServerFn_handler, async ({
  context,
  data
}) => {
  await getAdminUserId(context.token);
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  const password = generatePassword(12);
  const {
    data: created,
    error
  } = await supabaseAdmin.auth.admin.createUser({
    email: data.email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: data.full_name,
      phone: data.phone
    }
  });
  if (error || !created.user) throw new Error(error?.message || "Failed to create user");
  const uid = created.user.id;
  await supabaseAdmin.from("profiles").upsert({
    id: uid,
    email: data.email,
    full_name: data.full_name,
    phone: data.phone
  });
  await supabaseAdmin.from("user_roles").delete().eq("user_id", uid);
  const {
    error: rErr
  } = await supabaseAdmin.from("user_roles").insert({
    user_id: uid,
    role: data.role
  });
  if (rErr) throw new Error(rErr.message);
  return {
    employee: {
      id: uid,
      email: data.email,
      full_name: data.full_name,
      phone: data.phone,
      role: data.role
    },
    password
  };
});
const deleteEmployee_createServerFn_handler = createServerRpc({
  id: "6994abae10ce20c1c7ee0082e1fceeab981ef11dfcbeb83f7f67977b158c28c0",
  name: "deleteEmployee",
  filename: "src/lib/employees.functions.ts"
}, (opts) => deleteEmployee.__executeServer(opts));
const deleteEmployee = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
  user_id: stringType().uuid()
}).parse(input)).handler(deleteEmployee_createServerFn_handler, async ({
  context,
  data
}) => {
  const adminId = await getAdminUserId(context.token);
  if (data.user_id === adminId) throw new Error("Cannot delete yourself");
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  const {
    error
  } = await supabaseAdmin.auth.admin.deleteUser(data.user_id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const resetEmployeePassword_createServerFn_handler = createServerRpc({
  id: "47e81299f8812b394f201eb7829313753c8d3b708795d858ea7949687cef4aec",
  name: "resetEmployeePassword",
  filename: "src/lib/employees.functions.ts"
}, (opts) => resetEmployeePassword.__executeServer(opts));
const resetEmployeePassword = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
  user_id: stringType().uuid()
}).parse(input)).handler(resetEmployeePassword_createServerFn_handler, async ({
  context,
  data
}) => {
  await getAdminUserId(context.token);
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  const password = generatePassword(12);
  const {
    error
  } = await supabaseAdmin.auth.admin.updateUserById(data.user_id, {
    password
  });
  if (error) throw new Error(error.message);
  return {
    password
  };
});
export {
  createEmployee_createServerFn_handler,
  deleteEmployee_createServerFn_handler,
  listEmployees_createServerFn_handler,
  resetEmployeePassword_createServerFn_handler
};
