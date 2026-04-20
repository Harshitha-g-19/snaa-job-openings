import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lock, Mail, Eye, EyeOff } from "lucide-react";

const HRLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    } else {
      navigate("/admin-staff/dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-4">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
            <Lock className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-xl font-semibold text-foreground">HR Admin Login</h1>
          <p className="text-sm text-muted-foreground">SNAA Business Processing Center</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">

          {/* Email field — its own card */}
          <div className="bg-card border border-border rounded-xl px-4 py-4">
            <label
              htmlFor="email"
              className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2"
            >
              Email address
            </label>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="hr@snaa.com"
                className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/60"
              />
            </div>
          </div>

          {/* Password field — its own card */}
          <div className="bg-card border border-border rounded-xl px-4 py-4">
            <label
              htmlFor="password"
              className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2"
            >
              Password
            </label>
            <div className="flex items-center gap-3">
              <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/60"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                tabIndex={-1}
              >
                {showPassword
                  ? <EyeOff className="h-4 w-4" />
                  : <Eye className="h-4 w-4" />
                }
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-1 bg-primary text-primary-foreground rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {loading
              ? <><Loader2 className="h-4 w-4 animate-spin" />Signing in...</>
              : "Sign in"
            }
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Contact your administrator if you need access.
        </p>

      </div>
    </div>
  );
};

export default HRLogin;
