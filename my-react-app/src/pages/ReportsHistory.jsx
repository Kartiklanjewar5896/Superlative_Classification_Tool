import {
  FileText,
  Download,
  Eye,
  CheckCircle,
} from "lucide-react";

const reports = [
  {
    dataset: "Student Performance Dataset",
    model: "Random Forest",
    type: "Multi-Class",
    accuracy: "94.2%",
    date: "18 Sep 2026",
    status: "Completed",
  },
  {
    dataset: "Customer Dataset",
    model: "Logistic Regression",
    type: "Binary",
    accuracy: "91.7%",
    date: "16 Sep 2026",
    status: "Completed",
  },
  {
    dataset: "Product Classification Data",
    model: "Decision Tree",
    type: "Multi-Class",
    accuracy: "89.4%",
    date: "14 Sep 2026",
    status: "Completed",
  },
];

export default function ReportsHistory() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">
          Reports & History
        </h1>

        <p className="mt-1 text-sm text-[#64748B]">
          View previous classification operations and generated reports.
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
          <p className="text-sm text-[#64748B]">
            Total Runs
          </p>

          <p className="mt-2 text-2xl font-semibold text-[#0F172A]">
            48
          </p>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
          <p className="text-sm text-[#64748B]">
            Completed
          </p>

          <p className="mt-2 text-2xl font-semibold text-[#0F172A]">
            45
          </p>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
          <p className="text-sm text-[#64748B]">
            Reports Generated
          </p>

          <p className="mt-2 text-2xl font-semibold text-[#0F172A]">
            42
          </p>
        </div>

      </div>

      {/* History Table */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">

        <div className="p-5 border-b border-[#E2E8F0]">
          <h2 className="font-semibold text-[#0F172A]">
            Classification History
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Previous classification operations.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <tr>
                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Dataset
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Model
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Type
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Accuracy
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Date
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Status
                </th>

                <th className="text-right px-5 py-3 font-medium text-[#64748B]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr
                  key={`${report.dataset}-${report.date}`}
                  className="border-b border-[#E2E8F0] last:border-0 hover:bg-[#F8FAFC]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#2563EB]" />
                      </div>

                      <span className="font-medium text-[#0F172A]">
                        {report.dataset}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-[#64748B]">
                    {report.model}
                  </td>

                  <td className="px-5 py-4 text-[#64748B]">
                    {report.type}
                  </td>

                  <td className="px-5 py-4 font-medium text-[#0F172A]">
                    {report.accuracy}
                  </td>

                  <td className="px-5 py-4 text-[#64748B]">
                    {report.date}
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {report.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">

                      <button
                        title="View Report"
                        className="p-2 rounded-lg text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        title="Download Report"
                        className="p-2 rounded-lg text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                      >
                        <Download className="w-4 h-4" />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}