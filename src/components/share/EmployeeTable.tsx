// app/employees/components/EmployeeTable.tsx
import { Employee } from "@/lib/types";
import React from "react";

type Props = { employees: Employee[] };

export default function EmployeeTable({ employees }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-sm text-slate-600 border-b">
            <th className="py-3 px-4">Emp ID</th>
            <th className="py-3 px-4">Employee Name</th>
            <th className="py-3 px-4">Department</th>
            <th className="py-3 px-4">Job Title</th>
            <th className="py-3 px-4">Manager</th>
            <th className="py-3 px-4">Date of Joining</th>
            <th className="py-3 px-4">Location</th>
          </tr>
        </thead>
        {/* <tbody>
          {employees.map((e) => (
            <tr key={e.id} className="border-b last:border-b-0 hover:bg-slate-50">
              <td className="py-3 px-4 text-sm">{e.empId}</td>
              <td className="py-3 px-4 text-sm">{e.name}</td>
              <td className="py-3 px-4 text-sm">{e.department}</td>
              <td className="py-3 px-4 text-sm">{e.jobTitle}</td>
              <td className="py-3 px-4 text-sm">{e.manager}</td>
              <td className="py-3 px-4 text-sm">{e.dateOfJoining}</td>
              <td className="py-3 px-4 text-sm">{e.location}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}
