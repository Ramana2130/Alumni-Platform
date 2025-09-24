import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label";

const chartData = [
  { browser: "IT", visitors: 275, fill: "#46edd5" },
  { browser: "NonIT", visitors: 200, fill: "#00bba7" },
  { browser: "corecompany", visitors: 187, fill: "#009689" },
  { browser: "startup", visitors: 173, fill: "#00786f" },
  { browser: "patnership", visitors: 90, fill: "#005f5a" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  IT: {
    label: "IT",
    color: "var(--chart-1)",
  },
  NonIT: {
    label: "NonIT",
    color: "var(--chart-2)",
  },
  corecompany: {
    label: "corecompany",
    color: "var(--chart-3)",
  },
  startup: {
    label: "startup",
    color: "var(--chart-4)",
  },
  patnership: {
    label: "patnership",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function PositionChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Students Working based on Roles</CardTitle>
        <CardDescription>
          IT, Non - IT, Core Comapanies, Start-up, Paternship
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
