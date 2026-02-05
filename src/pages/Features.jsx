import { ArrowLeft, MapPin, Briefcase, DollarSign, Users } from "lucide-react";

const Features = () => {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Job Listings</h1>
          <p className="text-sm text-muted">
            Browse and manage job postings
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition btn-ghost">
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </button>
      </header>

      <div className="space-y-6">
        {[
          {
            title: "Senior Software Engineer",
            company: "Demo Company",
            location: "San Francisco, CA",
            type: "Engineering",
            salary: "$120,000 - $180,000",
            badge: "Hybrid",
            applicants: "5 applicants",
          },
          {
            title: "Product Designer",
            company: "Demo Company",
            location: "Remote",
            type: "Design",
            salary: "$90,000 - $140,000",
            badge: "Remote",
            applicants: "12 applicants",
          },
        ].map((job) => (
          <div
            key={job.title}
            className="rounded-2xl border card p-6 shadow-[0_0_25px_rgba(0,0,0,0.2)]"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="mt-1 text-sm text-muted">{job.company}</p>
              </div>
              <span className="rounded-full pill px-3 py-1 text-xs">
                {job.badge}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                {job.type}
              </span>
              <span className="inline-flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                {job.salary}
              </span>
            </div>

            <p className="mt-4 text-sm text-muted">
              We are looking for an experienced {job.title} to join our growing
              team. You will be responsible for designing, developing, and
              maintaining high-quality software solutions.
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs text-muted">
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" />
                {job.applicants}
              </span>
              <span>Posted 3 weeks ago</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
