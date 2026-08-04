import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2, Lock, Mail, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import aarthvaahiniLogo from "@/assets/aarthvaahini.png";

export const Route = createFileRoute("/crm/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset Password — Aarthvaahini CRM" },
      { name: "description", content: "Set a new password for your Aarthvaahini CRM account." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const nav = useNavigate();

  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);

  // A recovery link puts tokens in the URL hash and creates a session.
  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setReady(true);
        setEmail(session.user.email ?? "");
      }
    };
    init();

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session?.user) {
        setReady(true);
        setEmail(session.user.email ?? "");
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const verifyCode = async () => {
    const em = email.trim();
    const token = code.trim();
    if (!em) return toast.error("Enter your email");
    if (token.length < 6) return toast.error("Enter the 6-digit code from your email");
    setBusy(true);
    const { error } = await supabase.auth.verifyOtp({ email: em, token, type: "recovery" });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Code verified — set your new password");
    setReady(true);
  };

  const savePassword = async () => {
    if (password.length < 8) return toast.error("Password must be at least 8 characters");
    if (password !== confirm) return toast.error("Passwords do not match");
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Password updated — please sign in");
    await supabase.auth.signOut();
    nav({ to: "/crm/login" });
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0b1437] p-6">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -right-24 top-1/2 h-[28rem] w-[28rem] rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-lg shadow-blue-500/30">
            <img src={aarthvaahiniLogo} alt="Aarthvaahini logo" className="h-full w-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-white">Reset password</h1>
          <p className="mt-1 text-sm text-blue-100/60">
            {ready ? "Choose a new password for your account" : "Enter the code sent to your email"}
          </p>
        </div>

        {!ready ? (
          <div className="space-y-4">
            <div>
              <Label className="text-xs font-medium text-blue-100/80">Email address</Label>
              <div className="relative mt-1.5">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-200/50" />
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="h-11 border-white/10 bg-white/5 pl-9 text-white placeholder:text-blue-200/40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label className="text-xs font-medium text-blue-100/80">6-digit code</Label>
              <Input
                inputMode="numeric"
                maxLength={6}
                placeholder="000000"
                className="mt-1.5 h-11 border-white/10 bg-white/5 text-center text-lg tracking-[0.4em] text-white placeholder:tracking-[0.4em] placeholder:text-blue-200/30"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              />
            </div>

            <Button
              onClick={verifyCode}
              disabled={busy}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            >
              {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Verify code
            </Button>

            <p className="text-center text-xs text-blue-100/50">
              Opened the email link instead? It signs you in here automatically.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <Label className="text-xs font-medium text-blue-100/80">New password</Label>
              <div className="relative mt-1.5">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-200/50" />
                <Input
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className="h-11 border-white/10 bg-white/5 pl-9 text-white placeholder:text-blue-200/40"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label className="text-xs font-medium text-blue-100/80">Confirm password</Label>
              <div className="relative mt-1.5">
                <ShieldCheck className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-200/50" />
                <Input
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className="h-11 border-white/10 bg-white/5 pl-9 text-white placeholder:text-blue-200/40"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={savePassword}
              disabled={busy}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            >
              {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Update password
            </Button>
          </div>
        )}

        <div className="mt-6 text-center">
          <a href="/crm/login" className="text-xs font-medium text-blue-200/70 hover:text-white">
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
}
