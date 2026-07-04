import { r as reactExports } from "../_libs/react.mjs";
import { s as supabase } from "./router-DSDPkTTS.mjs";
const STAFF_ROLES = [
  "admin",
  "manager",
  "sales_executive",
  "operations",
  "insurance_executive",
  "mf_executive"
];
function useCrmAuth() {
  const [user, setUser] = reactExports.useState(null);
  const [roles, setRoles] = reactExports.useState([]);
  const [isPartner, setIsPartner] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let mounted = true;
    const loadRoles = async (u) => {
      if (!u) {
        if (mounted) {
          setRoles([]);
          setLoading(false);
        }
        return;
      }
      const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", u.id);
      if (!mounted) return;
      if (error) {
        console.error("CRM role check failed", error);
        setRoles([]);
        setLoading(false);
        return;
      }
      const allRoles = (data ?? []).map((r) => r.role);
      setRoles(allRoles.filter((r) => STAFF_ROLES.includes(r)));
      setIsPartner(allRoles.includes("partner"));
      setLoading(false);
    };
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_evt, session) => {
        setUser(session?.user ?? null);
        setTimeout(() => loadRoles(session?.user ?? null), 0);
      }
    );
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      loadRoles(session?.user ?? null);
    });
    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);
  const isStaff = roles.length > 0;
  const isAdmin = roles.includes("admin");
  const primaryRole = roles[0] ?? null;
  return { user, roles, isStaff, isAdmin, isPartner, primaryRole, loading };
}
export {
  useCrmAuth as u
};
