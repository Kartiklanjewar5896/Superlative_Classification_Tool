import { Play, Database, Cpu, Settings } from "lucide-react";

export default function Classification() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">
          Classification
        </h1>

        <p className="mt-1 text-sm text-[#64748B]">
          Configure and run a classification operation.
        </p>
      </div>

      {/* Configuration Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl">

        <div className="p-5 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
              <Settings className="w-5 h-5 text-[#2563EB]" />
            </div>

            <div>
              <h2 className="font-semibold text-[#0F172A]">
                Classification Configuration
              </h2>

              <p className="text-sm text-[#64748B] mt-1">
                Select the dataset and model for your classification task.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-5">

          {/* Dataset */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Dataset
            </label>

            <div className="relative">
              <Database className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />

              <select className="w-full pl-10 pr-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]">
                <option>Select a dataset</option>
                <option>Student Performance Dataset</option>
                <option>Customer Dataset</option>
                <option>Product Classification Data</option>
              </select>
            </div>
          </div>

          {/* Classification Type */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Classification Type
            </label>

            <select className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]">
              <option>Select classification type</option>
              <option>Binary Classification</option>
              <option>Multi-Class Classification</option>
              <option>Multi-Label Classification</option>
            </select>
          </div>

          {/* Model */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Machine Learning Model
            </label>

            <div className="relative">
              <Cpu className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />

              <select className="w-full pl-10 pr-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]">
                <option>Select a model</option>
                <option>Logistic Regression</option>
                <option>Decision Tree</option>
                <option>Random Forest</option>
                <option>Support Vector Machine</option>
                <option>Naive Bayes</option>
              </select>
            </div>
          </div>

          {/* Target Column */}
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Target Column
            </label>

            <select className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]">
              <option>Select target column</option>
              <option>Category</option>
              <option>Class</option>
              <option>Label</option>
            </select>
          </div>

          {/* Start Button */}
          <div className="pt-2">
            <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1E40AF] transition">
              <Play className="w-4 h-4" />
              Start Classification
            </button>
          </div>

        </div>
      </div>

      {/* Information */}
      <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-xl p-5">
        <h3 className="text-sm font-semibold text-[#1E40AF]">
          Classification Workflow
        </h3>

        <p className="mt-2 text-sm text-[#2563EB]">
          Select your dataset, choose the classification type and machine
          learning model, then start the classification process to generate
          results.
        </p>
      </div>

    </div>
  );
}