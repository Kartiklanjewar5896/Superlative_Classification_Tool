import {
  Database,
  Cpu,
  BarChart3,
  Clock,
  Upload,
  Play,
} from "lucide-react";

const stats = [
  {
    title: "Total Datasets",
    value: "12",
    icon: Database,
  },
  {
    title: "Classifications",
    value: "48",
    icon: Cpu,
  },
  {
    title: "Models Available",
    value: "6",
    icon: BarChart3,
  },
  {
    title: "Recent Activity",
    value: "8",
    icon: Clock,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-[#64748B]">
          Overview of your classification platform.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ title, value, icon: Icon }) => (
          <div
            key={title}
            className="bg-white border border-[#E2E8F0] rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-sm text-[#64748B]">
                  {title}
                </p>

                <p className="mt-2 text-2xl font-semibold text-[#0F172A]">
                  {value}
                </p>
              </div>

              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#2563EB]" />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-[#0F172A]">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          
          <button className="bg-white border border-[#E2E8F0] rounded-xl p-5 text-left hover:border-[#2563EB] transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Upload className="w-5 h-5 text-[#2563EB]" />
              </div>

              <div>
                <h3 className="font-medium text-[#0F172A]">
                  Upload Dataset
                </h3>

                <p className="text-sm text-[#64748B] mt-1">
                  Add a new dataset for classification.
                </p>
              </div>
            </div>
          </button>

          <button className="bg-white border border-[#E2E8F0] rounded-xl p-5 text-left hover:border-[#2563EB] transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Play className="w-5 h-5 text-[#2563EB]" />
              </div>

              <div>
                <h3 className="font-medium text-[#0F172A]">
                  Start Classification
                </h3>

                <p className="text-sm text-[#64748B] mt-1">
                  Run a classification operation.
                </p>
              </div>
            </div>
          </button>

        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl">
        <div className="p-5 border-b border-[#E2E8F0]">
          <h2 className="font-semibold text-[#0F172A]">
            Recent Classifications
          </h2>
        </div>

        <div className="p-5">
          <p className="text-sm text-[#64748B]">
            No recent classifications available.
          </p>
        </div>
      </div>

    </div>
  );
}