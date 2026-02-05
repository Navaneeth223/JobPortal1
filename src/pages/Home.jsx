import { Building2, Briefcase, FileText, Plus, UserRound } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">
          Company & Job Portal Dashboard
        </h1>
        <p className="mt-2 text-muted">
          Manage your company profile, post jobs, and track applications
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border card p-6 shadow-[0_0_25px_rgba(0,0,0,0.2)]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Company Profile
              </h2>
              <p className="mt-1 text-sm text-muted">
                Create your company profile to start posting jobs and attracting
                talent
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition btn-primary">
                <Plus className="h-4 w-4" />
                Create Company
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border card p-6 shadow-[0_0_25px_rgba(0,0,0,0.2)]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Job Postings</h2>
              <p className="mt-1 text-sm text-muted">
                Browse and manage job listings, create new opportunities
              </p>
              <p className="mt-3 text-xs text-muted">3 items</p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition btn-primary">
                <Plus className="h-4 w-4" />
                View Jobs
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border card p-6 shadow-[0_0_25px_rgba(0,0,0,0.2)]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Applications</h2>
              <p className="mt-1 text-sm text-muted">
                Track and manage job applications from candidates
              </p>
              <p className="mt-3 text-xs text-muted">3 items</p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition btn-primary">
                <Plus className="h-4 w-4" />
                View Applications
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border card-accent p-6 shadow-[0_0_30px_rgba(59,130,246,0.25)]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--pill)] text-[var(--text)]">
              <UserRound className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Quick Stats</h2>
              <ul className="mt-2 space-y-2 text-sm text-muted-strong">
                <li>• 3 active job postings</li>
                <li>• 3 total applications</li>
                <li>• Company profile: Incomplete</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border warning p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl warning-icon">
            <span className="text-xl">⚠</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Complete Your Company Profile
            </h3>
            <p className="mt-1 text-sm text-muted-strong">
              Add missing company details to unlock posting and application
              features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
