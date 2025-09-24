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
  { browser: "job", visitors: 275, fill: "#4bd5c5" },
  { browser: "higherstudies", visitors: 200, fill: "#00bba7" },
  { browser: "business", visitors: 187, fill: "#005f5a" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  job: {
    label: "job",
    color: "var(--chart-1)",
  },
  higherstudies: {
    label: "higherstudies",
    color: "var(--chart-2)",
  },
  business: {
    label: "business",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function AllComapreCharts() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Students Report</CardTitle>
        <CardDescription>Report based on Students</CardDescription>
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
