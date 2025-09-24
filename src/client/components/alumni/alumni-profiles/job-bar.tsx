import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a legend";

const chartData = [
  { browser: "Job", visitors: 275, fill: "#ffb86a" },
  { browser: "HigherStudeis", visitors: 200, fill: "#ff6900" },
  { browser: "Business", visitors: 187, fill: "#f54a00" },
  { browser: "startupOwner", visitors: 173, fill: "#ca3500" },
  { browser: "other", visitors: 90, fill: "#9f2d00" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Job: {
    label: "Job",
    color: "var(--chart-1)",
  },
  HigherStudeis: {
    label: "HigherStudeis",
    color: "var(--chart-2)",
  },
  Business: {
    label: "Business",
    color: "var(--chart-3)",
  },
  startupOwner: {
    label: "startupOwner",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function JobChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Alumni Chart</CardTitle>
        <CardDescription>
          This chart based on alumni proffesionals
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="visitors" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
