import { c as createSsrRpc } from "./createSsrRpc-Cm9iWJCJ.mjs";
import { a as createServerFn } from "./server-gq1gdFmI.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-BaLhiFEG.mjs";
const twilioConfig = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("e75a0a04b046cc3ba29f9856b6f8f9008290f07b94382841dadd044b7a58d9af"));
const sendWhatsApp = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((data) => {
  if (!data?.to || !data?.body) throw new Error("Missing 'to' or 'body'");
  return data;
}).handler(createSsrRpc("751e6efe2b428466158e55a04cc4a268942ac15417fd3382f4d6205650aa649e"));
export {
  sendWhatsApp as s,
  twilioConfig as t
};
