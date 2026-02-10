import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const Components = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted">Back to Dashboard</p>
          <h1 className="mt-2 text-2xl font-semibold">
            Job Applications
          </h1>
          <p className="text-sm text-muted">
            Manage and track candidate applications
          </p>
        </div>
        <button onClick={() => navigate("/")} className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition btn-ghost">
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </button>
      </header>

      <div className="flex flex-wrap items-center gap-2 rounded-full border card-soft p-2 text-xs text-muted-strong">
        {[
          "All (3)",
          "Pending (1)",
          "Opened (1)",
          "Selected (1)",
          "Rejected (0)",
        ].map((tab) => (
          <button
            key={tab}
            className={`rounded-full px-4 py-2 transition ${
              tab.startsWith("All")
                ? "pill text-[var(--text)]"
                : "text-muted hover:text-[var(--text)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border card p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold">Senior Software Engineer</h2>
            <p className="mt-1 text-sm text-muted">Demo Company</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-200">
            Pending
          </span>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-muted">
          <Clock className="h-4 w-4" />
          Applied on Jan 16, 2026
        </div>

        <div className="mt-6 space-y-4 text-sm text-muted-strong">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Cover Letter:
            </p>
            <p className="mt-2">
              I am very interested in this position and believe my 7 years of
              experience in full-stack development would make a great fit for
              your team.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Additional Message:
            </p>
            <p className="mt-2">Looking forward to hearing from you!</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs transition btn-ghost">
            <ExternalLink className="h-4 w-4" />
            View CV
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs transition btn-ghost">
            Mark as Opened
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-200 transition hover:bg-emerald-500/20">
            <CheckCircle2 className="h-4 w-4" />
            Select
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-xs text-rose-200 transition hover:bg-rose-500/20">
            <XCircle className="h-4 w-4" />
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default Components;
