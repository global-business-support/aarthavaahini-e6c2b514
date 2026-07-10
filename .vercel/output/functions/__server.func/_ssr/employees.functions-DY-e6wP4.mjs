import { c as createSsrRpc } from "./createSsrRpc-Cm9iWJCJ.mjs";
import { a as createServerFn } from "./server-gq1gdFmI.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-BaLhiFEG.mjs";
import { o as objectType, e as enumType, s as stringType } from "../_libs/zod.mjs";
const STAFF_ROLES = ["admin", "manager", "sales_executive", "operations", "insurance_executive", "mf_executive"];
const listEmployees = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("74a58c73313e14de3edc4f89c650c0ce6c794292f220878d6039341c993f975f"));
const createEmployee = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
  email: stringType().trim().email(),
  full_name: stringType().trim().min(1).max(120),
  phone: stringType().trim().min(7).max(20),
  role: enumType(STAFF_ROLES)
}).parse(input)).handler(createSsrRpc("8f1ebf734379d5d119683110ab75ae99281d57ed301b9c7b93c3e41d5d1f09d6"));
const deleteEmployee = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
  user_id: stringType().uuid()
}).parse(input)).handler(createSsrRpc("6994abae10ce20c1c7ee0082e1fceeab981ef11dfcbeb83f7f67977b158c28c0"));
const resetEmployeePassword = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
  user_id: stringType().uuid()
}).parse(input)).handler(createSsrRpc("47e81299f8812b394f201eb7829313753c8d3b708795d858ea7949687cef4aec"));
export {
  createEmployee as c,
  deleteEmployee as d,
  listEmployees as l,
  resetEmployeePassword as r
};
