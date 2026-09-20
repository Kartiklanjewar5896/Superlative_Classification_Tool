import { Download, BarChart3, Target, CheckCircle, Activity } from "lucide-react";

const metrics = [
  { title: "Accuracy", value: "94.2%", icon: Target },
  { title: "Precision", value: "93.8%", icon: CheckCircle },
  { title: "Recall", value: "92.6%", icon: Activity },
  { title: "F1 Score", value: "93.2%", icon: BarChart3 },
];

export default function Results() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">
            Results
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            View and analyze your classification results.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E2E8F0] bg-white text-[#0F172A] text-sm font-medium rounded-lg hover:bg-[#F8FAFC] transition">
          <Download className="w-4 h-4" />
          Export Results
        </button>
      </div>

      {/* Classification Info */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <p className="text-xs text-[#64748B]">
              Dataset
            </p>

            <p className="mt-1 font-medium text-[#0F172A]">
              Student Performance Dataset
            </p>
          </div>

          <div>
            <p className="text-xs text-[#64748B]">
              Model
            </p>

            <p className="mt-1 font-medium text-[#0F172A]">
              Random Forest
            </p>
          </div>

          <div>
            <p className="text-xs text-[#64748B]">
              Classification
            </p>

            <p className="mt-1 font-medium text-[#0F172A]">
              Multi-Class Classification
            </p>
          </div>

          <span className="inline-flex w-fit px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            Completed
          </span>

        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map(({ title, value, icon: Icon }) => (
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

      {/* Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Confusion Matrix */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl">

          <div className="p-5 border-b border-[#E2E8F0]">
            <h2 className="font-semibold text-[#0F172A]">
              Confusion Matrix
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Model prediction performance by class.
            </p>
          </div>

          <div className="p-8 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-1 text-center text-sm">

              <div></div>
              <div className="px-5 py-3 bg-[#F8FAFC] font-medium">
                Pred A
              </div>
              <div className="px-5 py-3 bg-[#F8FAFC] font-medium">
                Pred B
              </div>

              <div className="px-4 py-3 bg-[#F8FAFC] font-medium">
                Actual A
              </div>
              <div className="px-5 py-4 bg-[#DBEAFE] text-[#1E40AF] font-semibold">
                142
              </div>
              <div className="px-5 py-4 bg-[#F8FAFC] text-[#64748B]">
                8
              </div>

              <div className="px-4 py-3 bg-[#F8FAFC] font-medium">
                Actual B
              </div>
              <div className="px-5 py-4 bg-[#F8FAFC] text-[#64748B]">
                6
              </div>
              <div className="px-5 py-4 bg-[#DBEAFE] text-[#1E40AF] font-semibold">
                144
              </div>

            </div>
          </div>
        </div>

        {/* Prediction Summary */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl">

          <div className="p-5 border-b border-[#E2E8F0]">
            <h2 className="font-semibold text-[#0F172A]">
              Prediction Summary
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Overview of the generated predictions.
            </p>
          </div>

          <div className="p-5 space-y-4">

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#64748B]">
                Total Records
              </span>

              <span className="font-medium text-[#0F172A]">
                300
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#64748B]">
                Correct Predictions
              </span>

              <span className="font-medium text-green-600">
                283
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#64748B]">
                Incorrect Predictions
              </span>

              <span className="font-medium text-red-600">
                17
              </span>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#64748B]">
                  Processing Time
                </span>

                <span className="font-medium text-[#0F172A]">
                  2.4 seconds
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Class-wise Results */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">

        <div className="p-5 border-b border-[#E2E8F0]">
          <h2 className="font-semibold text-[#0F172A]">
            Class-wise Performance
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Precision, recall and F1 score for each class.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <tr>
                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Class
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Precision
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Recall
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  F1 Score
                </th>

                <th className="text-left px-5 py-3 font-medium text-[#64748B]">
                  Support
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[#E2E8F0]">
                <td className="px-5 py-4 font-medium text-[#0F172A]">
                  Class A
                </td>
                <td className="px-5 py-4 text-[#64748B]">95%</td>
                <td className="px-5 py-4 text-[#64748B]">94%</td>
                <td className="px-5 py-4 text-[#64748B]">94.5%</td>
                <td className="px-5 py-4 text-[#64748B]">150</td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium text-[#0F172A]">
                  Class B
                </td>
                <td className="px-5 py-4 text-[#64748B]">93%</td>
                <td className="px-5 py-4 text-[#64748B]">94%</td>
                <td className="px-5 py-4 text-[#64748B]">93.5%</td>
                <td className="px-5 py-4 text-[#64748B]">150</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}