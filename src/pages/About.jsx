import { Building2 } from "lucide-react";

const About = () => {
  return (
    <div className="space-y-6">
      <header className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border card-soft">
          <Building2 className="h-5 w-5 text-blue-500" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">
            Create Company Profile
          </h1>
          <p className="text-sm text-muted">
            Add the essential details for your organization.
          </p>
        </div>
      </header>

      <div className="rounded-2xl border card p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
        <h2 className="text-lg font-semibold">Basic Information</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm text-muted-strong">Company Name *</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="Enter company name"
            />
          </div>
          <div>
            <label className="text-sm text-muted-strong">Category *</label>
            <select className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field">
              <option>Select category</option>
              <option>Technology</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-strong">Logo URL</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="https://example.com/logo.png"
            />
          </div>
          <div>
            <label className="text-sm text-muted-strong">Cover Image URL</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="https://example.com/cover.jpg"
            />
          </div>
        </div>

        <h2 className="mt-10 text-lg font-semibold">
          Contact Information
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm text-muted-strong">Location *</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="e.g., San Francisco, CA"
            />
          </div>
          <div>
            <label className="text-sm text-muted-strong">Phone</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-muted-strong">Full Address *</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="123 Business St, Suite 100"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-muted-strong">Email *</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="contact@company.com"
            />
          </div>
        </div>
        <h2 className="mt-10 text-lg font-semibold">
          Company Details
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm text-muted-strong">About Us *</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="Tell us about your company..."
            />
          </div>
          <div>
            <label className="text-sm text-muted-strong">Vision *</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="What is your company's vision?"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-muted-strong">Mission *</label>
            <input
              className="mt-2 w-full rounded-lg border px-4 py-3 text-sm input-field"
              placeholder="What is your company's mission?"
            />
          </div>
          <div className="md:col-span-2">
            <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition btn-primary">
                Create Company
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
