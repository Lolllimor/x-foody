"use client";

import { Button, Menu } from "@mantine/core";
import { ArrowDown2, Setting4 } from "iconsax-react";
import React from "react";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Filter from "./filter";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  coordinate?: { x: number; y: number };
}

export default function DashCharts() {
  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    coordinate,
  }) => {
    if (active && payload && payload.length && coordinate) {
      const { x, y } = coordinate;
      return (
        <div
          style={{
            position: "absolute",
            left: x,
            top: y - 50,
            transform: "translate(-50%, -100%)",
          }}
          className="custom-tooltip bg-blue600 py-1 bg-white rounded-[8px] text-black  flex flex-col justify-center items-center px-2"
        >
          <p className="text-[16px] font-[700] leading-6">{`$${payload[0].value}`}</p>
        </div>
      );
    }

  
    return null;
  };
  const data = [
    {
      name: "Jan",
      uv: 0,
    },
    {
      name: "Feb",
      uv: 100,
    },
    {
      name: "Mar",
      uv: 180,
    },
    {
      name: "Apr",
      uv: 200,
    },
    {
      name: "May",
      uv: 170,
    },
    {
      name: "Jun",
      uv: 180,
    },
    {
      name: "Jul",
      uv: 250,
    },
    {
      name: "Aug",
      uv: 450,
    },
    {
      name: "Sep",
      uv: 500,
    },
    {
      name: "Oct",
      uv: 470,
    },
    {
      name: "Nov",
      uv: 430,
    },
    {
      name: "Dec",
      uv: 1000,
    },
  ];

  return (
    <section className="flex gap-[20px] w-full  overflow-x-auto  h-[100%] min-h-[330px] no-scrollbar">
      <div className="max-w-[504px] min-w-[504px]  bg-white rounded-[16px] p-[20px] flex flex-col gap-[30px]">
        <div className="flex justify-between">
          <p className="text-[20px] font-[700] leading-[30px]">Total Revenue</p>
          <Filter />
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={460}
            height={190}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FE2418" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FE2418" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fontWeight: 400, fill: "#201A18" }}
            />
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#201A181A"
            />
            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              padding={{
                bottom: 20,
              }}
              tickFormatter={(value) => `$${value}`}
              tick={{ fontSize: 12, fontWeight: 400, fill: "#201A18" }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              contentStyle={{
                backgroundColor: "#3851DD",
                color: "white",
                width: 75,
                height: 37,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            />

            <Area
              type="monotone"
              dataKey="uv"
              stroke="#FE5B18"
              fill="url(#graphGradient)"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className=" max-w-[504px] min-w-[504px] min-h-[327px] bg-white rounded-[16px] p-[20px] flex flex-col gap-[30px] ">
        <div className="flex justify-between">
          <p className="text-[20px] font-[700] leading-[30px]">Total Orders</p>
          <Menu>
            <Menu.Target>
              <div className="flex gap-[5px] py-2 px-2.5 border rounded-lg border-[#A7A19E1A]">
                <p className="text-[12px] leading-[18px]">Last 6 months</p>
                <ArrowDown2 size={18} color="#201A18" />
              </div>
            </Menu.Target>
          </Menu>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={460}
            height={190}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fontWeight: 400, fill: "#201A18" }}
            />
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#201A181A"
            />
            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              padding={{
                bottom: 20,
              }}
              tickFormatter={(value) => `$${value}`}
              tick={{ fontSize: 12, fontWeight: 400, fill: "#201A18" }}
            />
            <Tooltip
              content={<CustomTooltip />}
              allowEscapeViewBox={{ x: true, y: true }}
              cursor={false}
              contentStyle={{
                backgroundColor: "#3851DD",
                color: "white",
                width: 75,
                height: 56,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            />

            <Bar
              radius={[10, 10, 0, 0]}
              type="monotone"
              dataKey="uv"
              stroke="#FE5B18"
              fill="#E1261C"
              barSize={10}
              // strokeWidth={2.5}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
