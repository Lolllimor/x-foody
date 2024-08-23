import React from "react";
import { flexRender, Table as ReactTable } from "@tanstack/react-table";
import { css } from "@emotion/css";
import { CSSInterpolation } from "@emotion/css/create-instance";

export default function Table({
  table,
  onRowClick,
  rowHoverStyle,
  excludeFromRowClick = [],
}: {
  table: ReactTable<any>;
  rowHoverStyle?: CSSInterpolation;
  onRowClick?: (param: any) => void;
  excludeFromRowClick?: string[];
}) {
  return (
    <div className="overflow-auto flex flex-col h-full w-full ">
      <table className="w-full">
        <thead style={{ borderBottom: "1px solid #A7A19E1A" }}>
          {table.getHeaderGroups().map((headerGroup, idx) => (
            <tr key={headerGroup.id + idx}>
              {headerGroup.headers.map((header, index, arr) => {
                return (
                  <th
                    key={header.id + index}
                    colSpan={header.colSpan}
                    className={`${
                      (index === arr.length - 1 && "!pr-6",
                      "table-heading !pl-6  pb-[10px] cursor-pointer text-nowrap text-[16px] text-[#A7A19E] leading-6 font-[400]")
                    }`}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer flex gap-1 items-center"
                            : "flex justify-start ",

                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="pt-[22px] " >
          {table.getRowModel().rows.map((row, idx, arr) => {
            return (
              <tr
                key={row.id + idx}
                className={css`
                  ${rowHoverStyle}
                `}
                style={{ borderBottom: "1px solid #A7A19E1A" }}
              >
                {row.getVisibleCells().map((cell, i) => {
                  return (
                    <td
                      key={cell.id + i}
                      onClick={() =>
                        onRowClick &&
                        cell.column.id !== "select" &&
                        cell.column.id !== "action" &&
                        !excludeFromRowClick.includes(cell.column.id)
                          ? onRowClick(row.original)
                          : {}
                      }
                      className={`${
                        (idx === arr.length - 1 && "!border-b-0",
                        "table-cells-normal !pl-6  text-[#201A18] text-[16px] leading-6")
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
