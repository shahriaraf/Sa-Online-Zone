import React, { useEffect, useState } from "react";
import jobTask from "../../public/Job-Task.json";

const JobTask = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = jobTask;
      setTimeout(() => setApplications(data), 1000); // simulate 1s delay
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
        Job Applications
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-slate-900">
            <tr>
              <th className="px-4 py-3 whitespace-nowrap">#</th>
              <th className="px-4 py-3 whitespace-nowrap">Title</th>
              <th className="px-4 py-3 whitespace-nowrap">Company</th>
              <th className="px-4 py-3 whitespace-nowrap">Location</th>
              <th className="px-4 py-3 whitespace-nowrap">Status</th>
              <th className="px-4 py-3 whitespace-nowrap">Applied Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applications.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center px-4 py-6 text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : (
              applications.map((app, index) => (
                <tr
                  key={app.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition-colors text-slate-900`}
                >
                  <td className="px-4 py-3 text-center">{index + 1}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{app.title}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{app.company}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{app.location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        app.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : app.status === "Interview Scheduled"
                          ? "bg-blue-100 text-blue-800"
                          : app.status === "Rejected"
                          ? "bg-red-100 text-red-800"
                          : app.status === "Shortlisted"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-900 whitespace-nowrap">
                    {app.appliedDate}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobTask;
