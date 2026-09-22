import { useState } from "react";
import { Upload, FileText, Trash2 } from "lucide-react";

export default function Dataset() {
  const [dataset, setDataset] = useState(() => {
    const savedDataset = localStorage.getItem("uploadedDataset");

    return savedDataset ? JSON.parse(savedDataset) : null;
  });

  const [error, setError] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setError("");

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setError("Please upload a CSV file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target.result;

      const lines = text
        .split(/\r?\n/)
        .filter((line) => line.trim() !== "");

      if (lines.length < 2) {
        setError("The CSV file does not contain enough data.");
        return;
      }

      const parseCSVLine = (line) => {
        const values = [];
        let current = "";
        let insideQuotes = false;

        for (let i = 0; i < line.length; i++) {
          const char = line[i];

          if (char === '"') {
            if (insideQuotes && line[i + 1] === '"') {
              current += '"';
              i++;
            } else {
              insideQuotes = !insideQuotes;
            }
          } else if (char === "," && !insideQuotes) {
            values.push(current.trim());
            current = "";
          } else {
            current += char;
          }
        }

        values.push(current.trim());

        return values;
      };

      const columns = parseCSVLine(lines[0]);

      const dataRows = lines.slice(1).map((line) => {
        return parseCSVLine(line);
      });

      const previewRows = dataRows.slice(0, 5);

      const datasetInfo = {
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2),
        rows: dataRows.length,
        columns,
        previewRows,
      };

      setDataset(datasetInfo);

      localStorage.setItem(
        "uploadedDataset",
        JSON.stringify(datasetInfo)
      );
    };

    reader.readAsText(file);
  };

  const removeDataset = () => {
    setDataset(null);
    setError("");

    localStorage.removeItem("uploadedDataset");
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">
            Datasets
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Upload and manage datasets for classification.
          </p>
        </div>
      </div>

      {/* Upload Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 mb-6">
        <div className="border-2 border-dashed border-[#CBD5E1] rounded-xl p-10 text-center hover:border-[#2563EB] transition">
          <div className="w-12 h-12 mx-auto rounded-lg bg-[#EFF6FF] flex items-center justify-center">
            <Upload className="w-6 h-6 text-[#2563EB]" />
          </div>

          <h2 className="mt-4 font-semibold text-[#0F172A]">
            Upload Dataset
          </h2>

          <p className="mt-2 text-sm text-[#64748B]">
            Upload a CSV file to use for classification.
          </p>

          <label className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1E40AF] cursor-pointer transition">
            <Upload className="w-4 h-4" />
            Choose CSV File

            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <p className="mt-3 text-xs text-[#94A3B8]">
            Supported format: CSV
          </p>

          {error && (
            <div className="mt-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Dataset Information */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E2E8F0]">
          <h2 className="font-semibold text-[#0F172A]">
            Uploaded Dataset
          </h2>
        </div>

        {!dataset ? (
          <div className="py-12 text-center">
            <FileText className="w-8 h-8 mx-auto text-[#CBD5E1]" />

            <p className="mt-3 text-sm text-[#64748B]">
              No dataset uploaded yet.
            </p>
          </div>
        ) : (
          <>
            {/* Dataset Summary */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="border border-[#E2E8F0] rounded-lg p-4">
                <p className="text-xs text-[#64748B]">
                  Dataset
                </p>

                <p className="mt-1 font-medium text-[#0F172A] truncate">
                  {dataset.name}
                </p>
              </div>

              <div className="border border-[#E2E8F0] rounded-lg p-4">
                <p className="text-xs text-[#64748B]">
                  File Size
                </p>

                <p className="mt-1 font-medium text-[#0F172A]">
                  {dataset.size} MB
                </p>
              </div>

              <div className="border border-[#E2E8F0] rounded-lg p-4">
                <p className="text-xs text-[#64748B]">
                  Rows
                </p>

                <p className="mt-1 font-medium text-[#0F172A]">
                  {dataset.rows}
                </p>
              </div>

              <div className="border border-[#E2E8F0] rounded-lg p-4">
                <p className="text-xs text-[#64748B]">
                  Columns
                </p>

                <p className="mt-1 font-medium text-[#0F172A]">
                  {dataset.columns.length}
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="px-6 pb-6 flex items-center justify-between">
              <span className="inline-flex px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                Ready
              </span>

              <button
                onClick={removeDataset}
                className="inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
                Remove
              </button>
            </div>

            {/* Columns */}
            <div className="px-6 py-5 border-t border-[#E2E8F0]">
              <p className="text-sm font-medium text-[#0F172A]">
                Columns
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {dataset.columns.map((column, index) => (
                  <span
                    key={`${column}-${index}`}
                    className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569]"
                  >
                    {column}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Preview */}
            <div className="border-t border-[#E2E8F0]">
              <div className="px-6 py-5">
                <h3 className="text-sm font-medium text-[#0F172A]">
                  Data Preview
                </h3>

                <p className="mt-1 text-xs text-[#64748B]">
                  Showing the first{" "}
                  {Math.min(5, dataset.rows)} rows of the
                  uploaded dataset.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#F8FAFC]">
                    <tr className="text-left text-[#64748B]">
                      {dataset.columns.map((column, index) => (
                        <th
                          key={`${column}-${index}`}
                          className="px-6 py-3 font-medium whitespace-nowrap"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {dataset.previewRows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="border-t border-[#E2E8F0]"
                      >
                        {dataset.columns.map((_, columnIndex) => (
                          <td
                            key={columnIndex}
                            className="px-6 py-3 text-[#475569] whitespace-nowrap"
                          >
                            {row[columnIndex] || "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}