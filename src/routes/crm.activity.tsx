// // import { createFileRoute } from '@tanstack/react-router'
// // // import { createFileRoute } from "@tanstack/react-router";
// // import { useEffect, useMemo, useState } from "react";
// // import { Card } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { supabase } from "@/integrations/supabase/client";
// // import {
// //   Activity,
// //   Loader2,
// //   StickyNote,
// //   UserPlus,
// //   FileEdit,
// //   Phone,
// //   Mail,
// //   User,
// //   CalendarDays,
// // } from "lucide-react";

// // export const Route = createFileRoute("/crm/activity")({
// //   component: ActivityPage,
// // });

// // type Item = {
// //   id: string;
// //   activity_type: string;
// //   notes: string | null;
// //   created_at: string;
// //   lead_id: string | null;
// //   customer_id: string | null;
// // };

// // type PersonDetails = {
// //   id: string;
// //   name: string | null;
// //   phone: string | null;
// //   email: string | null;
// //   product_type?: string | null;
// //   status?: string | null;
// // };

// // type ActivityItem = Item & {
// //   person?: PersonDetails | null;
// //   personType?: "Lead" | "Customer" | null;
// // };

// // const ICONS: Record<string, typeof Activity> = {
// //   note: StickyNote,
// //   created: UserPlus,
// //   updated: FileEdit,
// //   lead_converted: Activity,
// //   converted: Activity,
// // };

// // function ActivityPage() {
// //   const [items, setItems] = useState<ActivityItem[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchActivities = async () => {
// //       setLoading(true);

// //       const { data: activities, error } = await supabase
// //         .from("activities")
// //         .select("id, activity_type, notes, created_at, lead_id, customer_id")
// //         .order("created_at", { ascending: false })
// //         .limit(200);

// //       if (error) {
// //         console.error("Activity fetch error:", error);
// //         setItems([]);
// //         setLoading(false);
// //         return;
// //       }

// //       const activityList = (activities ?? []) as Item[];

// //       const leadIds = [
// //         ...new Set(
// //           activityList
// //             .map((item) => item.lead_id)
// //             .filter(Boolean) as string[],
// //         ),
// //       ];

// //       const customerIds = [
// //         ...new Set(
// //           activityList
// //             .map((item) => item.customer_id)
// //             .filter(Boolean) as string[],
// //         ),
// //       ];

// //       const [{ data: leads }, { data: customers }] = await Promise.all([
// //         leadIds.length
// //           ? supabase
// //               .from("leads")
// //               .select("id, full_name, phone, email, product_type, status")
// //               .in("id", leadIds)
// //           : Promise.resolve({ data: [] }),

// //         customerIds.length
// //           ? supabase
// //               .from("customers")
// //               .select("id, full_name, phone, email, product_type, status")
// //               .in("id", customerIds)
// //           : Promise.resolve({ data: [] }),
// //       ]);

// //       const leadMap = new Map<string, PersonDetails>();
// //       const customerMap = new Map<string, PersonDetails>();

// //       (leads ?? []).forEach((lead: any) => {
// //         leadMap.set(lead.id, {
// //           id: lead.id,
// //           name: lead.full_name,
// //           phone: lead.phone,
// //           email: lead.email,
// //           product_type: lead.product_type,
// //           status: lead.status,
// //         });
// //       });

// //       (customers ?? []).forEach((customer: any) => {
// //         customerMap.set(customer.id, {
// //           id: customer.id,
// //           name: customer.full_name,
// //           phone: customer.phone,
// //           email: customer.email,
// //           product_type: customer.product_type,
// //           status: customer.status,
// //         });
// //       });

// //       const finalItems: ActivityItem[] = activityList.map((item) => {
// //         if (item.customer_id && customerMap.has(item.customer_id)) {
// //           return {
// //             ...item,
// //             person: customerMap.get(item.customer_id),
// //             personType: "Customer",
// //           };
// //         }

// //         if (item.lead_id && leadMap.has(item.lead_id)) {
// //           return {
// //             ...item,
// //             person: leadMap.get(item.lead_id),
// //             personType: "Lead",
// //           };
// //         }

// //         return {
// //           ...item,
// //           person: null,
// //           personType: null,
// //         };
// //       });

// //       setItems(finalItems);
// //       setLoading(false);
// //     };

// //     fetchActivities();
// //   }, []);

// //   const totalActivities = items.length;

// //   const todayActivities = useMemo(() => {
// //     const today = new Date().toDateString();
// //     return items.filter((item) => new Date(item.created_at).toDateString() === today)
// //       .length;
// //   }, [items]);

// //   return (
// //     <div className="space-y-5">
// //       <div className="rounded-2xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-5 py-4 text-white shadow-md">
// //         <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
// //           <div className="flex items-center gap-3">
// //             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
// //               <Activity className="h-5 w-5" />
// //             </div>
// //             <div>
// //               <div className="text-base font-semibold">Activity Feed</div>
// //               <div className="text-xs text-white/80">
// //                 Recent notes, lead updates and customer activities
// //               </div>
// //             </div>
// //           </div>

// //           <div className="flex gap-3 text-xs">
// //             <div className="rounded-xl bg-white/15 px-3 py-2">
// //               <div className="font-semibold">{totalActivities}</div>
// //               <div className="text-white/75">Total Activities</div>
// //             </div>
// //             <div className="rounded-xl bg-white/15 px-3 py-2">
// //               <div className="font-semibold">{todayActivities}</div>
// //               <div className="text-white/75">Today</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <Card className="overflow-hidden border border-sky-100 bg-white shadow-sm">
// //         {loading ? (
// //           <div className="flex h-44 items-center justify-center">
// //             <Loader2 className="h-5 w-5 animate-spin text-slate-500" />
// //           </div>
// //         ) : items.length === 0 ? (
// //           <div className="p-10 text-center text-sm text-slate-500">
// //             No activity yet.
// //           </div>
// //         ) : (
// //           <ul className="divide-y divide-slate-100">
// //             {items.map((item) => {
// //               const Icon = ICONS[item.activity_type] ?? Activity;
// //               const person = item.person;

// //               return (
// //                 <li
// //                   key={item.id}
// //                   className="group flex gap-4 px-5 py-4 transition hover:bg-sky-50/60"
// //                 >
// //                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
// //                     <Icon className="h-5 w-5" />
// //                   </div>

// //                   <div className="min-w-0 flex-1">
// //                     <div className="flex flex-wrap items-center gap-2">
// //                       <Badge
// //                         variant="secondary"
// //                         className="capitalize bg-sky-100 text-sky-700 hover:bg-sky-100"
// //                       >
// //                         {item.activity_type.replaceAll("_", " ")}
// //                       </Badge>

// //                       {item.personType && (
// //                         <Badge className="bg-blue-600 text-white hover:bg-blue-600">
// //                           {item.personType}
// //                         </Badge>
// //                       )}

// //                       <span className="inline-flex items-center gap-1 text-xs text-slate-500">
// //                         <CalendarDays className="h-3.5 w-3.5" />
// //                         {new Date(item.created_at).toLocaleString("en-IN")}
// //                       </span>
// //                     </div>

// //                     {person ? (
// //                       <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
// //                         <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
// //                           <div>
// //                             <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
// //                               <User className="h-4 w-4 text-sky-600" />
// //                               {person.name || "Name not available"}
// //                             </div>

// //                             <div className="mt-2 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
// //                               <div className="flex items-center gap-2">
// //                                 <Phone className="h-3.5 w-3.5 text-sky-600" />
// //                                 {person.phone || "Phone not available"}
// //                               </div>

// //                               <div className="flex items-center gap-2">
// //                                 <Mail className="h-3.5 w-3.5 text-sky-600" />
// //                                 {person.email || "Email not available"}
// //                               </div>
// //                             </div>
// //                           </div>

// //                           <div className="flex flex-wrap gap-2">
// //                             {person.product_type && (
// //                               <Badge variant="outline" className="bg-white">
// //                                 {person.product_type}
// //                               </Badge>
// //                             )}

// //                             {person.status && (
// //                               <Badge variant="outline" className="bg-white">
// //                                 {person.status}
// //                               </Badge>
// //                             )}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     ) : (
// //                       <div className="mt-2 text-sm text-slate-500">
// //                         Person details not available
// //                       </div>
// //                     )}

// //                     {item.notes && (
// //                       <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
// //                         {item.notes}
// //                       </p>
// //                     )}

// //                     <div className="mt-2 text-[11px] text-slate-400">
// //                       {item.lead_id
// //                         ? `Lead ID: ${item.lead_id.slice(0, 8)}…`
// //                         : item.customer_id
// //                           ? `Customer ID: ${item.customer_id.slice(0, 8)}…`
// //                           : ""}
// //                     </div>
// //                   </div>
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         )}
// //       </Card>
// //     </div>
// //   );
// // }

// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useMemo, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { supabase } from "@/integrations/supabase/client";
// import {
//   Activity,
//   Loader2,
//   StickyNote,
//   UserPlus,
//   FileEdit,
//   Phone,
//   Mail,
//   User,
//   CalendarDays,
//   X,
//   ClipboardList,
//   Package,
//   ShieldCheck,
//   Hash,
//   IndianRupee,
//   BadgeCheck,
//   WalletCards,
//   FileText,
// } from "lucide-react";

// export const Route = createFileRoute("/crm/activity")({
//   component: ActivityPage,
// });

// type Item = {
//   id: string;
//   activity_type: string;
//   notes: string | null;
//   created_at: string;
//   lead_id: string | null;
//   customer_id: string | null;
// };

// type PersonDetails = {
//   id: string;
//   name: string | null;
//   phone: string | null;
//   email: string | null;
//   product_type?: string | null;
//   status?: string | null;
//   lead_stage?: string | null;
//   loan_amount?: string | number | null;
//   sanction_amount?: string | number | null;
//   disbursement_amount?: string | number | null;
//   disbursement_date?: string | null;
//   source?: string | null;
//   city?: string | null;
//   raw?: Record<string, any>;
// };

// type ActivityItem = Item & {
//   person?: PersonDetails | null;
//   personType?: "Lead" | "Customer" | null;
// };

// const ICONS: Record<string, typeof Activity> = {
//   note: StickyNote,
//   created: UserPlus,
//   updated: FileEdit,
//   lead_converted: Activity,
//   converted: Activity,
//   sanction: BadgeCheck,
//   sanctioned: BadgeCheck,
//   disbursement: WalletCards,
//   disbursed: WalletCards,
// };

// const getFirstValue = (obj: Record<string, any>, keys: string[]) => {
//   for (const key of keys) {
//     if (obj?.[key] !== undefined && obj?.[key] !== null && obj?.[key] !== "") {
//       return obj[key];
//     }
//   }
//   return null;
// };

// const formatMoney = (value?: string | number | null) => {
//   if (value === null || value === undefined || value === "") return "N/A";

//   const num = Number(value);
//   if (Number.isNaN(num)) return String(value);

//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(num);
// };

// const formatDate = (value?: string | null) => {
//   if (!value) return "N/A";
//   const date = new Date(value);
//   if (Number.isNaN(date.getTime())) return value;
//   return date.toLocaleDateString("en-IN");
// };

// const mapPersonDetails = (row: Record<string, any>): PersonDetails => {
//   return {
//     id: row.id,
//     name: getFirstValue(row, [
//       "full_name",
//       "name",
//       "customer_name",
//       "lead_name",
//       "applicant_name",
//     ]),
//     phone: getFirstValue(row, [
//       "phone",
//       "mobile",
//       "mobile_number",
//       "phone_number",
//       "contact_number",
//     ]),
//     email: getFirstValue(row, ["email", "email_address"]),
//     product_type: getFirstValue(row, [
//       "product_type",
//       "product",
//       "loan_type",
//       "service_type",
//     ]),
//     status: getFirstValue(row, ["status", "lead_status", "current_status"]),
//     lead_stage: getFirstValue(row, [
//       "lead_stage",
//       "stage",
//       "pipeline_stage",
//       "current_stage",
//     ]),
//     loan_amount: getFirstValue(row, [
//       "loan_amount",
//       "amount",
//       "required_amount",
//       "requested_amount",
//     ]),
//     sanction_amount: getFirstValue(row, [
//       "sanction_amount",
//       "sanctioned_amount",
//       "approved_amount",
//       "approval_amount",
//     ]),
//     disbursement_amount: getFirstValue(row, [
//       "disbursement_amount",
//       "disbursed_amount",
//       "disbursal_amount",
//       "final_disbursement_amount",
//     ]),
//     disbursement_date: getFirstValue(row, [
//       "disbursement_date",
//       "disbursed_date",
//       "disbursal_date",
//     ]),
//     source: getFirstValue(row, ["source", "lead_source"]),
//     city: getFirstValue(row, ["city", "location"]),
//     raw: row,
//   };
// };

// function ActivityPage() {
//   const [items, setItems] = useState<ActivityItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(
//     null,
//   );

//   useEffect(() => {
//     const fetchActivities = async () => {
//       setLoading(true);

//       const { data: activities, error } = await supabase
//         .from("activities")
//         .select("id, activity_type, notes, created_at, lead_id, customer_id")
//         .order("created_at", { ascending: false })
//         .limit(200);

//       if (error) {
//         console.error("Activity fetch error:", error);
//         setItems([]);
//         setLoading(false);
//         return;
//       }

//       const activityList = (activities ?? []) as Item[];

//       const leadIds = [
//         ...new Set(
//           activityList
//             .map((item) => item.lead_id)
//             .filter(Boolean) as string[],
//         ),
//       ];

//       const customerIds = [
//         ...new Set(
//           activityList
//             .map((item) => item.customer_id)
//             .filter(Boolean) as string[],
//         ),
//       ];

//       const [{ data: leads }, { data: customers }] = await Promise.all([
//         leadIds.length
//           ? supabase.from("leads").select("*").in("id", leadIds)
//           : Promise.resolve({ data: [] }),

//         customerIds.length
//           ? supabase.from("customers").select("*").in("id", customerIds)
//           : Promise.resolve({ data: [] }),
//       ]);

//       const leadMap = new Map<string, PersonDetails>();
//       const customerMap = new Map<string, PersonDetails>();

//       (leads ?? []).forEach((lead: any) => {
//         leadMap.set(lead.id, mapPersonDetails(lead));
//       });

//       (customers ?? []).forEach((customer: any) => {
//         customerMap.set(customer.id, mapPersonDetails(customer));
//       });

//       const finalItems: ActivityItem[] = activityList.map((item) => {
//         if (item.customer_id && customerMap.has(item.customer_id)) {
//           return {
//             ...item,
//             person: customerMap.get(item.customer_id),
//             personType: "Customer",
//           };
//         }

//         if (item.lead_id && leadMap.has(item.lead_id)) {
//           return {
//             ...item,
//             person: leadMap.get(item.lead_id),
//             personType: "Lead",
//           };
//         }

//         return {
//           ...item,
//           person: null,
//           personType: null,
//         };
//       });

//       setItems(finalItems);
//       setLoading(false);
//     };

//     fetchActivities();
//   }, []);

//   const totalActivities = items.length;

//   const todayActivities = useMemo(() => {
//     const today = new Date().toDateString();
//     return items.filter(
//       (item) => new Date(item.created_at).toDateString() === today,
//     ).length;
//   }, [items]);

//   return (
//     <div className="space-y-5">
//       <div className="rounded-2xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-5 py-4 text-white shadow-md">
//         <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div className="flex items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
//               <Activity className="h-5 w-5" />
//             </div>

//             <div>
//               <div className="text-base font-semibold">Activity Feed</div>
//               <div className="text-xs text-white/80">
//                 Recent notes, lead updates, sanction and disbursement details
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-3 text-xs">
//             <div className="rounded-xl bg-white/15 px-3 py-2">
//               <div className="font-semibold">{totalActivities}</div>
//               <div className="text-white/75">Total Activities</div>
//             </div>

//             <div className="rounded-xl bg-white/15 px-3 py-2">
//               <div className="font-semibold">{todayActivities}</div>
//               <div className="text-white/75">Today</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Card className="overflow-hidden border border-sky-100 bg-white shadow-sm">
//         {loading ? (
//           <div className="flex h-44 items-center justify-center">
//             <Loader2 className="h-5 w-5 animate-spin text-slate-500" />
//           </div>
//         ) : items.length === 0 ? (
//           <div className="p-10 text-center text-sm text-slate-500">
//             No activity yet.
//           </div>
//         ) : (
//           <ul className="divide-y divide-slate-100">
//             {items.map((item) => {
//               const Icon = ICONS[item.activity_type] ?? Activity;
//               const person = item.person;

//               return (
//                 <li
//                   key={item.id}
//                   onClick={() => setSelectedActivity(item)}
//                   className="group flex cursor-pointer gap-4 px-5 py-4 transition hover:bg-sky-50/70"
//                 >
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
//                     <Icon className="h-5 w-5" />
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     <div className="flex flex-wrap items-center gap-2">
//                       <Badge
//                         variant="secondary"
//                         className="capitalize bg-sky-100 text-sky-700 hover:bg-sky-100"
//                       >
//                         {item.activity_type.replaceAll("_", " ")}
//                       </Badge>

//                       {item.personType && (
//                         <Badge className="bg-blue-600 text-white hover:bg-blue-600">
//                           {item.personType}
//                         </Badge>
//                       )}

//                       <span className="inline-flex items-center gap-1 text-xs text-slate-500">
//                         <CalendarDays className="h-3.5 w-3.5" />
//                         {new Date(item.created_at).toLocaleString("en-IN")}
//                       </span>
//                     </div>

//                     {person ? (
//                       <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
//                         <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
//                           <div>
//                             <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
//                               <User className="h-4 w-4 text-sky-600" />
//                               {person.name || "Name not available"}
//                             </div>

//                             <div className="mt-2 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
//                               <div className="flex items-center gap-2">
//                                 <Phone className="h-3.5 w-3.5 text-sky-600" />
//                                 {person.phone || "Phone not available"}
//                               </div>

//                               <div className="flex items-center gap-2">
//                                 <Mail className="h-3.5 w-3.5 text-sky-600" />
//                                 {person.email || "Email not available"}
//                               </div>
//                             </div>

//                             <div className="mt-3 grid gap-2 text-xs text-slate-700 md:grid-cols-3">
//                               <div className="rounded-lg bg-white px-3 py-2">
//                                 <div className="text-slate-400">Loan Amount</div>
//                                 <div className="font-semibold">
//                                   {formatMoney(person.loan_amount)}
//                                 </div>
//                               </div>

//                               <div className="rounded-lg bg-white px-3 py-2">
//                                 <div className="text-slate-400">Sanction</div>
//                                 <div className="font-semibold">
//                                   {formatMoney(person.sanction_amount)}
//                                 </div>
//                               </div>

//                               <div className="rounded-lg bg-white px-3 py-2">
//                                 <div className="text-slate-400">
//                                   Disbursement
//                                 </div>
//                                 <div className="font-semibold">
//                                   {formatMoney(person.disbursement_amount)}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="flex flex-wrap gap-2">
//                             {person.product_type && (
//                               <Badge variant="outline" className="bg-white">
//                                 {person.product_type}
//                               </Badge>
//                             )}

//                             {person.lead_stage && (
//                               <Badge variant="outline" className="bg-white">
//                                 {person.lead_stage}
//                               </Badge>
//                             )}

//                             {person.status && (
//                               <Badge variant="outline" className="bg-white">
//                                 {person.status}
//                               </Badge>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="mt-2 text-sm text-slate-500">
//                         Lead/customer details not available
//                       </div>
//                     )}

//                     {item.notes && (
//                       <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
//                         {item.notes}
//                       </p>
//                     )}

//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedActivity(item);
//                       }}
//                       className="mt-3 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700"
//                     >
//                       View Details
//                     </button>

//                     <div className="mt-2 text-[11px] text-slate-400">
//                       {item.lead_id
//                         ? `Lead ID: ${item.lead_id.slice(0, 8)}…`
//                         : item.customer_id
//                           ? `Customer ID: ${item.customer_id.slice(0, 8)}…`
//                           : ""}
//                     </div>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </Card>

//       {selectedActivity && (
//         <div
//           className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm"
//           onClick={() => setSelectedActivity(null)}
//         >
//           <div
//             className="h-full w-full max-w-lg animate-in slide-in-from-right bg-white shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between border-b px-5 py-4">
//               <div>
//                 <h2 className="text-lg font-semibold text-slate-900">
//                   Activity Details
//                 </h2>
//                 <p className="text-xs text-slate-500">
//                   Full lead/customer, sanction and disbursement information
//                 </p>
//               </div>

//               <button
//                 onClick={() => setSelectedActivity(null)}
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             </div>

//             <div className="h-[calc(100vh-73px)] space-y-5 overflow-y-auto p-5">
//               <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-4 text-white">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
//                     <ClipboardList className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <Badge className="mb-1 bg-white/20 capitalize text-white hover:bg-white/20">
//                       {selectedActivity.activity_type.replaceAll("_", " ")}
//                     </Badge>

//                     <p className="text-xs text-white/80">
//                       {new Date(selectedActivity.created_at).toLocaleString(
//                         "en-IN",
//                       )}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
//                 <h3 className="mb-3 text-sm font-semibold text-slate-900">
//                   {selectedActivity.personType || "Lead"} Information
//                 </h3>

//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
//                       <User className="h-4 w-4" />
//                     </div>

//                     <div>
//                       <p className="text-xs text-slate-500">Name</p>
//                       <p className="text-sm font-semibold text-slate-900">
//                         {selectedActivity.person?.name || "Name not available"}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="grid gap-3 md:grid-cols-2">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
//                         <Phone className="h-4 w-4" />
//                       </div>

//                       <div>
//                         <p className="text-xs text-slate-500">Phone Number</p>
//                         <p className="text-sm font-semibold text-slate-900">
//                           {selectedActivity.person?.phone ||
//                             "Phone not available"}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
//                         <Mail className="h-4 w-4" />
//                       </div>

//                       <div>
//                         <p className="text-xs text-slate-500">Email</p>
//                         <p className="text-sm font-semibold text-slate-900">
//                           {selectedActivity.person?.email ||
//                             "Email not available"}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <div className="rounded-xl border border-slate-100 bg-white p-4">
//                   <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
//                     <Package className="h-3.5 w-3.5 text-sky-600" />
//                     Product
//                   </div>

//                   <p className="text-sm font-semibold capitalize text-slate-900">
//                     {selectedActivity.person?.product_type || "N/A"}
//                   </p>
//                 </div>

//                 <div className="rounded-xl border border-slate-100 bg-white p-4">
//                   <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
//                     <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
//                     Status / Stage
//                   </div>

//                   <p className="text-sm font-semibold capitalize text-slate-900">
//                     {selectedActivity.person?.lead_stage ||
//                       selectedActivity.person?.status ||
//                       "N/A"}
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-slate-100 bg-white p-4">
//                 <h3 className="mb-3 text-sm font-semibold text-slate-900">
//                   Loan, Sanction & Disbursement
//                 </h3>

//                 <div className="grid gap-3">
//                   <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
//                     <div className="flex items-center gap-2 text-sm text-slate-600">
//                       <IndianRupee className="h-4 w-4 text-sky-600" />
//                       Loan Amount
//                     </div>
//                     <div className="font-semibold text-slate-900">
//                       {formatMoney(selectedActivity.person?.loan_amount)}
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between rounded-xl bg-green-50 p-3">
//                     <div className="flex items-center gap-2 text-sm text-green-700">
//                       <BadgeCheck className="h-4 w-4" />
//                       Sanction Amount
//                     </div>
//                     <div className="font-semibold text-green-800">
//                       {formatMoney(selectedActivity.person?.sanction_amount)}
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between rounded-xl bg-blue-50 p-3">
//                     <div className="flex items-center gap-2 text-sm text-blue-700">
//                       <WalletCards className="h-4 w-4" />
//                       Disbursement Amount
//                     </div>
//                     <div className="font-semibold text-blue-800">
//                       {formatMoney(
//                         selectedActivity.person?.disbursement_amount,
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
//                     <div className="flex items-center gap-2 text-sm text-slate-600">
//                       <CalendarDays className="h-4 w-4 text-sky-600" />
//                       Disbursement Date
//                     </div>
//                     <div className="font-semibold text-slate-900">
//                       {formatDate(selectedActivity.person?.disbursement_date)}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-slate-100 bg-white p-4">
//                 <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
//                   <FileText className="h-4 w-4 text-sky-600" />
//                   Activity Note
//                 </h3>

//                 <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
//                   {selectedActivity.notes || "No note available"}
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-slate-100 bg-white p-4">
//                 <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
//                   <Hash className="h-4 w-4 text-sky-600" />
//                   Reference
//                 </div>

//                 <div className="space-y-2 text-xs text-slate-500">
//                   {selectedActivity.lead_id && (
//                     <p>
//                       <span className="font-medium text-slate-700">
//                         Lead ID:
//                       </span>{" "}
//                       {selectedActivity.lead_id}
//                     </p>
//                   )}

//                   {selectedActivity.customer_id && (
//                     <p>
//                       <span className="font-medium text-slate-700">
//                         Customer ID:
//                       </span>{" "}
//                       {selectedActivity.customer_id}
//                     </p>
//                   )}

//                   <p>
//                     <span className="font-medium text-slate-700">
//                       Activity ID:
//                     </span>{" "}
//                     {selectedActivity.id}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import {
  Activity,
  Loader2,
  StickyNote,
  UserPlus,
  FileEdit,
  Phone,
  Mail,
  User,
  CalendarDays,
  X,
  ClipboardList,
  Package,
  ShieldCheck,
  Hash,
  IndianRupee,
  BadgeCheck,
  WalletCards,
  FileText,
  Search,
  Filter,
} from "lucide-react";

export const Route = createFileRoute("/crm/activity")({
  component: ActivityPage,
});

type Item = {
  id: string;
  activity_type: string;
  notes: string | null;
  created_at: string;
  lead_id: string | null;
  customer_id: string | null;
};

type PersonDetails = {
  id: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  product_type?: string | null;
  status?: string | null;
  lead_stage?: string | null;
  loan_amount?: string | number | null;
  sanction_amount?: string | number | null;
  disbursement_amount?: string | number | null;
  disbursement_date?: string | null;
  bank_name?: string | null;
  cibil_score?: string | number | null;
  city?: string | null;
  source?: string | null;
  raw?: Record<string, any>;
};

type ActivityItem = Item & {
  person?: PersonDetails | null;
  personType?: "Lead" | "Customer" | null;
};

const ICONS: Record<string, typeof Activity> = {
  note: StickyNote,
  created: UserPlus,
  updated: FileEdit,
  lead_converted: Activity,
  converted: Activity,
  sanction: BadgeCheck,
  sanctioned: BadgeCheck,
  disbursement: WalletCards,
  disbursed: WalletCards,
  stage_updated: FileEdit,
  bank_updated: FileEdit,
};

const getFirstValue = (obj: Record<string, any>, keys: string[]) => {
  for (const key of keys) {
    if (obj?.[key] !== undefined && obj?.[key] !== null && obj?.[key] !== "") {
      return obj[key];
    }
  }
  return null;
};

const formatMoney = (value?: string | number | null) => {
  if (value === null || value === undefined || value === "") return "N/A";

  const num = Number(value);
  if (Number.isNaN(num)) return String(value);

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(num);
};

const formatDate = (value?: string | null) => {
  if (!value) return "N/A";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN");
};

const mapPersonDetails = (row: Record<string, any>): PersonDetails => {
  return {
    id: row.id,
    name: getFirstValue(row, [
      "full_name",
      "name",
      "customer_name",
      "lead_name",
      "applicant_name",
    ]),
    phone: getFirstValue(row, [
      "phone",
      "mobile",
      "mobile_number",
      "phone_number",
      "contact_number",
    ]),
    email: getFirstValue(row, ["email", "email_address"]),
    product_type: getFirstValue(row, [
      "product_type",
      "product",
      "loan_type",
      "service_type",
    ]),
    status: getFirstValue(row, ["status", "lead_status", "current_status"]),
    lead_stage: getFirstValue(row, [
      "lead_stage",
      "stage",
      "pipeline_stage",
      "current_stage",
    ]),
    loan_amount: getFirstValue(row, [
      "loan_amount",
      "amount",
      "required_amount",
      "requested_amount",
    ]),
    sanction_amount: getFirstValue(row, [
      "sanction_amount",
      "sanctioned_amount",
      "approved_amount",
      "approval_amount",
    ]),
    disbursement_amount: getFirstValue(row, [
      "disbursement_amount",
      "disbursed_amount",
      "disbursal_amount",
      "final_disbursement_amount",
    ]),
    disbursement_date: getFirstValue(row, [
      "disbursement_date",
      "disbursed_date",
      "disbursal_date",
    ]),
    bank_name: getFirstValue(row, ["bank_name", "bank", "selected_bank"]),
    cibil_score: getFirstValue(row, ["cibil_score", "cibil"]),
    city: getFirstValue(row, ["city", "location"]),
    source: getFirstValue(row, ["source", "lead_source"]),
    raw: row,
  };
};

const getStageClass = (stage?: string | null) => {
  const value = stage?.toLowerCase() || "";

  if (value.includes("new")) return "border-sky-200 bg-sky-50 text-sky-700";
  if (value.includes("docs")) return "border-purple-200 bg-purple-50 text-purple-700";
  if (value.includes("sanction")) return "border-orange-200 bg-orange-50 text-orange-700";
  if (value.includes("disbursement")) return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (value.includes("closed")) return "border-slate-200 bg-slate-100 text-slate-700";
  if (value.includes("reject")) return "border-red-200 bg-red-50 text-red-700";

  return "border-slate-200 bg-white text-slate-700";
};

function ActivityPage() {
  const [items, setItems] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    setLoading(true);

    const { data: activities, error } = await supabase
      .from("activities")
      .select("id, activity_type, notes, created_at, lead_id, customer_id")
      .order("created_at", { ascending: false })
      .limit(200);

    if (error) {
      console.error("Activity fetch error:", error);
      setItems([]);
      setLoading(false);
      return;
    }

    const activityList = (activities ?? []) as Item[];

    const leadIds = [
      ...new Set(
        activityList.map((item) => item.lead_id).filter(Boolean) as string[],
      ),
    ];

    const customerIds = [
      ...new Set(
        activityList.map((item) => item.customer_id).filter(Boolean) as string[],
      ),
    ];

    const [{ data: leads }, { data: customers }] = await Promise.all([
      leadIds.length
        ? supabase.from("leads").select("*").in("id", leadIds)
        : Promise.resolve({ data: [] }),

      customerIds.length
        ? supabase.from("customers").select("*").in("id", customerIds)
        : Promise.resolve({ data: [] }),
    ]);

    const leadMap = new Map<string, PersonDetails>();
    const customerMap = new Map<string, PersonDetails>();

    (leads ?? []).forEach((lead: any) => {
      leadMap.set(lead.id, mapPersonDetails(lead));
    });

    (customers ?? []).forEach((customer: any) => {
      customerMap.set(customer.id, mapPersonDetails(customer));
    });

    const finalItems: ActivityItem[] = activityList.map((item) => {
      if (item.customer_id && customerMap.has(item.customer_id)) {
        return {
          ...item,
          person: customerMap.get(item.customer_id),
          personType: "Customer",
        };
      }

      if (item.lead_id && leadMap.has(item.lead_id)) {
        return {
          ...item,
          person: leadMap.get(item.lead_id),
          personType: "Lead",
        };
      }

      return {
        ...item,
        person: null,
        personType: null,
      };
    });

    setItems(finalItems);
    setLoading(false);
  };

  const totalActivities = items.length;

  const todayActivities = useMemo(() => {
    const today = new Date().toDateString();
    return items.filter(
      (item) => new Date(item.created_at).toDateString() === today,
    ).length;
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const person = item.person;
      const text = `
        ${item.activity_type}
        ${item.notes || ""}
        ${person?.name || ""}
        ${person?.phone || ""}
        ${person?.email || ""}
        ${person?.product_type || ""}
        ${person?.status || ""}
        ${person?.lead_stage || ""}
        ${person?.bank_name || ""}
      `.toLowerCase();

      const matchesSearch = text.includes(searchTerm.toLowerCase());

      const matchesFilter =
        filterType === "all" ||
        item.personType?.toLowerCase() === filterType ||
        item.activity_type.toLowerCase().includes(filterType) ||
        person?.lead_stage?.toLowerCase().includes(filterType) ||
        person?.status?.toLowerCase().includes(filterType);

      return matchesSearch && matchesFilter;
    });
  }, [items, searchTerm, filterType]);

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-5 py-4 text-white shadow-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
              <Activity className="h-5 w-5" />
            </div>

            <div>
              <div className="text-base font-semibold">Activity Feed</div>
              <div className="text-xs text-white/80">
                Recent notes, lead updates, sanction and disbursement details
              </div>
            </div>
          </div>

          <div className="flex gap-3 text-xs">
            <div className="rounded-xl bg-white/15 px-3 py-2">
              <div className="font-semibold">{totalActivities}</div>
              <div className="text-white/75">Total Activities</div>
            </div>

            <div className="rounded-xl bg-white/15 px-3 py-2">
              <div className="font-semibold">{todayActivities}</div>
              <div className="text-white/75">Today</div>
            </div>

            <div className="rounded-xl bg-white/15 px-3 py-2">
              <div className="font-semibold">{filteredItems.length}</div>
              <div className="text-white/75">Showing</div>
            </div>
          </div>
        </div>
      </div>

      <Card className="border border-sky-100 bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[1fr_220px]">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, mobile, email, bank, stage, note..."
              className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            >
              <option value="all">All Activities</option>
              <option value="lead">Leads</option>
              <option value="customer">Customers</option>
              <option value="note">Notes</option>
              <option value="sanction">Sanction</option>
              <option value="disbursement">Disbursement</option>
              <option value="closed">Closed</option>
              <option value="new">New</option>
              <option value="docs">Docs Pending</option>
            </select>
          </div>
        </div>
      </Card>

      <Card className="overflow-hidden border border-sky-100 bg-white shadow-sm">
        {loading ? (
          <div className="flex h-44 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-slate-500" />
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">
            No recent activity found.
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {filteredItems.map((item) => {
              const Icon = ICONS[item.activity_type] ?? Activity;
              const person = item.person;
              const stage = person?.lead_stage || person?.status;

              return (
                <li
                  key={item.id}
                  onClick={() => setSelectedActivity(item)}
                  className="group flex cursor-pointer gap-4 px-5 py-4 transition hover:bg-sky-50/70"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="capitalize bg-sky-100 text-sky-700 hover:bg-sky-100"
                      >
                        {item.activity_type.replaceAll("_", " ")}
                      </Badge>

                      {item.personType && (
                        <Badge className="bg-blue-600 text-white hover:bg-blue-600">
                          {item.personType}
                        </Badge>
                      )}

                      <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {new Date(item.created_at).toLocaleString("en-IN")}
                      </span>
                    </div>

                    {person ? (
                      <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                              <User className="h-4 w-4 text-sky-600" />
                              {person.name || "Name not available"}
                            </div>

                            <div className="mt-2 grid gap-2 text-xs text-slate-600 md:grid-cols-2">
                              <div className="flex items-center gap-2">
                                <Phone className="h-3.5 w-3.5 text-sky-600" />
                                {person.phone || "Phone not available"}
                              </div>

                              <div className="flex items-center gap-2">
                                <Mail className="h-3.5 w-3.5 text-sky-600" />
                                {person.email || "Email not available"}
                              </div>
                            </div>

                            <div className="mt-3 grid gap-2 text-xs text-slate-700 md:grid-cols-4">
                              <div className="rounded-lg bg-white px-3 py-2">
                                <div className="text-slate-400">Loan Amount</div>
                                <div className="font-semibold">
                                  {formatMoney(person.loan_amount)}
                                </div>
                              </div>

                              <div className="rounded-lg bg-white px-3 py-2">
                                <div className="text-slate-400">Sanction</div>
                                <div className="font-semibold">
                                  {formatMoney(person.sanction_amount)}
                                </div>
                              </div>

                              <div className="rounded-lg bg-white px-3 py-2">
                                <div className="text-slate-400">Disbursement</div>
                                <div className="font-semibold">
                                  {formatMoney(person.disbursement_amount)}
                                </div>
                              </div>

                              <div className="rounded-lg bg-white px-3 py-2">
                                <div className="text-slate-400">Bank</div>
                                <div className="font-semibold">
                                  {person.bank_name || "N/A"}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {person.product_type && (
                              <Badge variant="outline" className="bg-white">
                                {person.product_type}
                              </Badge>
                            )}

                            {stage && (
                              <Badge variant="outline" className={getStageClass(stage)}>
                                {stage}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2 text-sm text-slate-500">
                        Lead/customer details not available
                      </div>
                    )}

                    {item.notes && (
                      <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
                        {item.notes}
                      </p>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedActivity(item);
                      }}
                      className="mt-3 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700"
                    >
                      View Details
                    </button>

                    <div className="mt-2 text-[11px] text-slate-400">
                      {item.lead_id
                        ? `Lead ID: ${item.lead_id.slice(0, 8)}…`
                        : item.customer_id
                          ? `Customer ID: ${item.customer_id.slice(0, 8)}…`
                          : ""}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      {selectedActivity && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="h-full w-full max-w-lg animate-in slide-in-from-right bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Activity Details
                </h2>
                <p className="text-xs text-slate-500">
                  Full lead/customer, sanction and disbursement information
                </p>
              </div>

              <button
                onClick={() => setSelectedActivity(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="h-[calc(100vh-73px)] space-y-5 overflow-y-auto p-5">
              <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                    <ClipboardList className="h-5 w-5" />
                  </div>

                  <div>
                    <Badge className="mb-1 bg-white/20 capitalize text-white hover:bg-white/20">
                      {selectedActivity.activity_type.replaceAll("_", " ")}
                    </Badge>

                    <p className="text-xs text-white/80">
                      {new Date(selectedActivity.created_at).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">
                  {selectedActivity.personType || "Lead"} Information
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      <User className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">Name</p>
                      <p className="text-sm font-semibold text-slate-900">
                        {selectedActivity.person?.name || "Name not available"}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                        <Phone className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">Phone Number</p>
                        <p className="text-sm font-semibold text-slate-900">
                          {selectedActivity.person?.phone || "Phone not available"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                        <Mail className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">Email</p>
                        <p className="text-sm font-semibold text-slate-900">
                          {selectedActivity.person?.email || "Email not available"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-100 bg-white p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                    <Package className="h-3.5 w-3.5 text-sky-600" />
                    Product
                  </div>

                  <p className="text-sm font-semibold capitalize text-slate-900">
                    {selectedActivity.person?.product_type || "N/A"}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
                    Status / Stage
                  </div>

                  <p className="text-sm font-semibold capitalize text-slate-900">
                    {selectedActivity.person?.lead_stage ||
                      selectedActivity.person?.status ||
                      "N/A"}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-4">
                  <div className="mb-2 text-xs text-slate-500">Bank</div>
                  <p className="text-sm font-semibold text-slate-900">
                    {selectedActivity.person?.bank_name || "N/A"}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-4">
                  <div className="mb-2 text-xs text-slate-500">CIBIL</div>
                  <p className="text-sm font-semibold text-slate-900">
                    {selectedActivity.person?.cibil_score || "N/A"}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">
                  Loan, Sanction & Disbursement
                </h3>

                <div className="grid gap-3">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <IndianRupee className="h-4 w-4 text-sky-600" />
                      Loan Amount
                    </div>
                    <div className="font-semibold text-slate-900">
                      {formatMoney(selectedActivity.person?.loan_amount)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-green-50 p-3">
                    <div className="flex items-center gap-2 text-sm text-green-700">
                      <BadgeCheck className="h-4 w-4" />
                      Sanction Amount
                    </div>
                    <div className="font-semibold text-green-800">
                      {formatMoney(selectedActivity.person?.sanction_amount)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-blue-50 p-3">
                    <div className="flex items-center gap-2 text-sm text-blue-700">
                      <WalletCards className="h-4 w-4" />
                      Disbursement Amount
                    </div>
                    <div className="font-semibold text-blue-800">
                      {formatMoney(selectedActivity.person?.disbursement_amount)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CalendarDays className="h-4 w-4 text-sky-600" />
                      Disbursement Date
                    </div>
                    <div className="font-semibold text-slate-900">
                      {formatDate(selectedActivity.person?.disbursement_date)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <FileText className="h-4 w-4 text-sky-600" />
                  Activity Note
                </h3>

                <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
                  {selectedActivity.notes || "No note available"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Hash className="h-4 w-4 text-sky-600" />
                  Reference
                </div>

                <div className="space-y-2 text-xs text-slate-500">
                  {selectedActivity.lead_id && (
                    <p>
                      <span className="font-medium text-slate-700">Lead ID:</span>{" "}
                      {selectedActivity.lead_id}
                    </p>
                  )}

                  {selectedActivity.customer_id && (
                    <p>
                      <span className="font-medium text-slate-700">
                        Customer ID:
                      </span>{" "}
                      {selectedActivity.customer_id}
                    </p>
                  )}

                  <p>
                    <span className="font-medium text-slate-700">
                      Activity ID:
                    </span>{" "}
                    {selectedActivity.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}