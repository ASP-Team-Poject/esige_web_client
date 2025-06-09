"use client";

import React from "react";
import H2 from "../basic/H2";
import { AnnuaireTableType } from "@/util/types";

const ReportingContent = ({ data }: { data: AnnuaireTableType[] }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((dataTable, index) => (
        <div key={index}>
          <H2 title={dataTable.title} />
          <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
            <div className=" w-full">
              <table className="w-full">
                <thead>
                  <tr className="bg-[rgb(248,248,248)]">
                    {dataTable.columns.map((column, colIndex) => (
                      <th key={colIndex}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataTable.rows.map((row, index) => (
                    <tr key={index}>
                      {dataTable.fields.map((field, fieldIndex) => (
                        <td key={fieldIndex}>{row[field]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportingContent;
