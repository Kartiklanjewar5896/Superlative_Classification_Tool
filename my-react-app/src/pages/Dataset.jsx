import { Upload, FileText, Eye, Trash2 } from "lucide-react";

const datasets = [
  {
    name: "Student Performance Dataset",
    type: "CSV",
    size: "2.4 MB",
    records: "1,250",
    status: "Ready",
  },
  {
    name: "Customer Dataset",
    type: "CSV",
    size: "5.8 MB",
    records: "3,420",
    status: "Ready",
  },
  {
    name: "Product Classification Data",
    type: "CSV",
    size: "1.7 MB",
    records: "860",
    status: "Ready",
  },
];

export default function Dataset() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">
            Datasets
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Upload and manage datasets for classification.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1E40AF] transition">
          <Upload className="w-4 h-4" />
          Upload Dataset
        </button>
      </div>

      {/* Upload Area */}
      <div className="bg-white border border-dashed border-[#CBD5E1] rounded-xl p-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
          <Upload className="w-6 h-6 text-[#2563EB]" />
        </div>

        <h2 className="mt-4 font-medium text-[#0F172A]">
          Upload a new dataset
        </h2>

        <p className="mt-1 text-sm text-[#64748B]">
          Drag and drop your file here or click to browse
        </p>

        <p className="mt-2 text-xs text-[#94A3B8]">
          Supported format: CSV
        </p>

        <button className="mt-4 px-4 py-2 border border-[#E2E8F0] rounded-lg text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] transition">
          Browse Files
        </button>
      </div>

      {/* Dataset Table */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">

        <div className="p-5 border-b border-[#E2E8F0]">
          <h2 className="font-semibold text-[#0F172A]">
            Your Datasets
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Manage datasets available for classification.
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
                  Type
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Size
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Records
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
              {datasets.map((dataset) => (
                <tr
                  key={dataset.name}
                  className="border-b border-[#E2E8F0] last:border-0 hover:bg-[#F8FAFC]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#2563EB]" />
                      </div>

                      <span className="font-medium text-[#0F172A]">
                        {dataset.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-[#64748B]">
                    {dataset.type}
                  </td>

                  <td className="px-5 py-4 text-[#64748B]">
                    {dataset.size}
                  </td>

                  <td className="px-5 py-4 text-[#64748B]">
                    {dataset.records}
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                      {dataset.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">

                      <button
                        title="View Dataset"
                        className="p-2 rounded-lg text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        title="Delete Dataset"
                        className="p-2 rounded-lg text-[#64748B] hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
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