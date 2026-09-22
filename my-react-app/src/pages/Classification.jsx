import { useState } from "react";
import { Cpu, Play, Info, Database, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Classification() {
  const [dataset] = useState(() => {
    const savedDataset = localStorage.getItem("uploadedDataset");

    return savedDataset ? JSON.parse(savedDataset) : null;
  });

  const [classificationType, setClassificationType] = useState("");
  const [targetColumn, setTargetColumn] = useState("");
  const [selectionMode, setSelectionMode] = useState("automatic");
  const [model, setModel] = useState("");
  const [testSize, setTestSize] = useState("20");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleStartClassification = () => {
    setMessage("");
    setError("");

    if (!dataset) {
      setError("Please upload a dataset first.");
      return;
    }

    if (!classificationType) {
      setError("Please select a classification type.");
      return;
    }

    if (!targetColumn) {
      setError("Please select a target column.");
      return;
    }

    if (selectionMode === "manual" && !model) {
      setError("Please select a machine learning model.");
      return;
    }

    const classificationConfig = {
      datasetName: dataset.name,
      rows: dataset.rows,
      columns: dataset.columns,
      classificationType,
      targetColumn,
      selectionMode,
      model: selectionMode === "automatic" ? "Automatic" : model,
      testSize: Number(testSize),
      trainSize: 100 - Number(testSize),
      status: "Ready",
    };

    localStorage.setItem(
      "classificationConfig",
      JSON.stringify(classificationConfig)
    );

    setMessage(
      "Classification configuration saved successfully. The ML processing will be connected in the backend stage."
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#0F172A]">
          Classification
        </h1>

        <p className="mt-1 text-sm text-[#64748B]">
          Configure your classification task before running the model.
        </p>
      </div>

      {!dataset ? (
        /* No Dataset */
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-10 text-center">
          <div className="w-12 h-12 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center">
            <Database className="w-6 h-6 text-[#2563EB]" />
          </div>

          <h2 className="mt-4 text-lg font-semibold text-[#0F172A]">
            No Dataset Available
          </h2>

          <p className="mt-2 text-sm text-[#64748B]">
            Please upload a CSV dataset before starting classification.
          </p>

          <Link
            to="/dataset"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1E40AF] transition"
          >
            <Database className="w-4 h-4" />
            Go to Dataset
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Dataset Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Database className="w-5 h-5 text-[#2563EB]" />
              </div>

              <div>
                <h2 className="font-semibold text-[#0F172A]">
                  Selected Dataset
                </h2>

                <p className="text-sm text-[#64748B]">
                  Dataset that will be used for classification.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <div>
                <p className="text-sm font-medium text-[#0F172A]">
                  {dataset.name}
                </p>

                <p className="mt-1 text-xs text-[#64748B]">
                  {dataset.rows} rows • {dataset.columns.length} columns
                </p>
              </div>

              <span className="inline-flex w-fit px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                Ready
              </span>
            </div>
          </div>

          {/* Configuration Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Settings2 className="w-5 h-5 text-[#2563EB]" />
              </div>

              <div>
                <h2 className="font-semibold text-[#0F172A]">
                  Classification Configuration
                </h2>

                <p className="text-sm text-[#64748B]">
                  Configure how the classification should be performed.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Classification Type */}
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Classification Type
                </label>

                <select
                  value={classificationType}
                  onChange={(e) => setClassificationType(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]"
                >
                  <option value="">
                    Select classification type
                  </option>

                  <option value="Binary">
                    Binary Classification
                  </option>

                  <option value="Multi-Class">
                    Multi-Class Classification
                  </option>

                  <option value="Multi-Label">
                    Multi-Label Classification
                  </option>
                </select>
              </div>

              {/* Target Column */}
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Target Column
                </label>

                <select
                  value={targetColumn}
                  onChange={(e) => setTargetColumn(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]"
                >
                  <option value="">
                    Select target column
                  </option>

                  {dataset.columns.map((column, index) => (
                    <option
                      key={`${column}-${index}`}
                      value={column}
                    >
                      {column}
                    </option>
                  ))}
                </select>
              </div>

              {/* Train/Test Split */}
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Test Data Split
                </label>

                <select
                  value={testSize}
                  onChange={(e) => setTestSize(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]"
                >
                  <option value="10">90% Train / 10% Test</option>
                  <option value="20">80% Train / 20% Test</option>
                  <option value="30">70% Train / 30% Test</option>
                  <option value="40">60% Train / 40% Test</option>
                </select>
              </div>
            </div>

            {/* Model Selection */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-[#0F172A] mb-3">
                Model Selection
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Automatic */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectionMode("automatic");
                    setModel("");
                  }}
                  className={`text-left p-4 rounded-lg border-2 transition ${
                    selectionMode === "automatic"
                      ? "border-[#2563EB] bg-[#EFF6FF]"
                      : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-[#0F172A]">
                      Automatic Selection
                    </p>

                    {selectionMode === "automatic" && (
                      <span className="text-xs font-medium text-[#2563EB]">
                        Selected
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Test multiple suitable algorithms and select the model
                    based on its evaluation performance.
                  </p>

                  <span className="inline-flex mt-3 px-2 py-1 rounded bg-[#DBEAFE] text-[#1D4ED8] text-xs font-medium">
                    Guided Mode
                  </span>
                </button>

                {/* Manual */}
                <button
                  type="button"
                  onClick={() => setSelectionMode("manual")}
                  className={`text-left p-4 rounded-lg border-2 transition ${
                    selectionMode === "manual"
                      ? "border-[#2563EB] bg-[#EFF6FF]"
                      : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-[#0F172A]">
                      Manual Selection
                    </p>

                    {selectionMode === "manual" && (
                      <span className="text-xs font-medium text-[#2563EB]">
                        Selected
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-[#64748B]">
                    Choose a specific machine learning algorithm yourself.
                  </p>

                  <span className="inline-flex mt-3 px-2 py-1 rounded bg-[#F1F5F9] text-[#475569] text-xs font-medium">
                    Advanced Mode
                  </span>
                </button>
              </div>
            </div>

            {/* Manual Model */}
            {selectionMode === "manual" && (
              <div className="mt-5">
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Machine Learning Algorithm
                </label>

                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#DBEAFE] focus:border-[#2563EB]"
                >
                  <option value="">
                    Select ML algorithm
                  </option>

                  <option value="Logistic Regression">
                    Logistic Regression
                  </option>

                  <option value="Decision Tree">
                    Decision Tree
                  </option>

                  <option value="Random Forest">
                    Random Forest
                  </option>

                  <option value="Support Vector Machine">
                    Support Vector Machine
                  </option>

                  <option value="Naive Bayes">
                    Naive Bayes
                  </option>
                </select>
              </div>
            )}

            {/* Dataset Columns */}
            <div className="mt-6 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <p className="text-sm font-medium text-[#0F172A]">
                Dataset Columns
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {dataset.columns.map((column, index) => (
                  <span
                    key={`${column}-${index}`}
                    className={`px-2.5 py-1 rounded-md border text-xs ${
                      targetColumn === column
                        ? "bg-[#DBEAFE] border-[#93C5FD] text-[#1D4ED8]"
                        : "bg-white border-[#E2E8F0] text-[#475569]"
                    }`}
                  >
                    {column}
                  </span>
                ))}
              </div>
            </div>

            {/* Information */}
            <div className="mt-6 flex gap-3 p-4 bg-[#EFF6FF] border border-[#DBEAFE] rounded-lg">
              <Info className="w-5 h-5 text-[#2563EB] flex-shrink-0" />

              <div>
                <p className="text-sm font-medium text-[#1E40AF]">
                  Guided Classification
                </p>

                <p className="mt-1 text-sm text-[#475569]">
                  In Automatic Selection, the future ML backend will evaluate
                  suitable algorithms and provide the evaluation results for
                  comparison. In Manual Selection, you choose the algorithm
                  yourself.
                </p>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Success */}
            {message && (
              <div className="mt-6 p-3 bg-green-50 border border-green-100 rounded-lg text-sm text-green-700">
                {message}
              </div>
            )}

            {/* Configuration Summary */}
            <div className="mt-6 border border-[#E2E8F0] rounded-lg overflow-hidden">
              <div className="px-4 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <p className="text-sm font-medium text-[#0F172A]">
                  Configuration Summary
                </p>
              </div>

              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-[#64748B]">
                    Target
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#0F172A]">
                    {targetColumn || "Not selected"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#64748B]">
                    Type
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#0F172A]">
                    {classificationType || "Not selected"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#64748B]">
                    Model
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#0F172A]">
                    {selectionMode === "automatic"
                      ? "Automatic"
                      : model || "Not selected"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#64748B]">
                    Train / Test
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#0F172A]">
                    {100 - Number(testSize)}% / {testSize}%
                  </p>
                </div>
              </div>
            </div>

            {/* Start */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleStartClassification}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1E40AF] transition"
              >
                <Play className="w-4 h-4" />
                Start Classification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}