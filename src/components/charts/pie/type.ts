import { z } from "zod";

export interface PieChartProps {
  data: PieChartData[];
  config: Record<string, ChartConfig>;
  title: string;
  description: string;
}

export interface PieChartData {
  label: string;
  value: number;
}

export interface ChartConfig {
  label: string;
  color: string;
}

export const chartConfigSchema = z.object({
  label: z.string(),
  color: z.string(),
});

export const pieChartDataSchema = z.array(
  z.object({
    label: z.string(),
    value: z.number(),
  })
);

export const pieChartPropsSchema = z.object({
  data: pieChartDataSchema,
  config: z.record(z.string(), chartConfigSchema),
  title: z.string(),
  description: z.string().optional(),
});
