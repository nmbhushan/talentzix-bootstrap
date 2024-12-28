'use client';

import * as React from 'react';
import { Cell, Label, Pie, PieChart, Legend, ResponsiveContainer } from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartTooltip,
  ChartTooltipContent,
  ChartContainer
} from '@/components/ui/chart';
import { PieChartProps, pieChartPropsSchema } from './type';

export function PieGraph({ data, config, title }: PieChartProps) {
  // Calculate total value for the chart
  const totalValue = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.value, 0);
  }, [data]);

  // Validate the props using the schema
  const result = pieChartPropsSchema.safeParse({
    data,
    config,
    title
  });

  if (!result.success) {
    console.log(result.error.issues);  // Log validation errors to help debug
    return <div>Error in chart data format</div>;
  }

  return (
   
        <ChartContainer className="w-full mx-auto" config={config}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                innerRadius="60%"
                outerRadius="80%"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={config[entry.label].color} />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-current text-2xl font-bold"
                          >
                            {totalValue}
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
              <Legend
                align="right"
                verticalAlign="middle"
                layout="vertical"
                iconType="square"
                formatter={(value: string) => (
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {config[value].label} ({data.find(item => item.label === value)?.value || 0})
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
  );
}
