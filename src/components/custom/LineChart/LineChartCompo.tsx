"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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

const chartData = [
  { year: "2019", spain: 900, germany: 1400, france: 1700 },
  { year: "2020", spain: 1000, germany: 1500, france: 1800 },
  { year: "2021", spain: 1100, germany: 1500, france: 1600 },
  { year: "2022", spain: 1200, germany: 1700, france: 2000 },
  { year: "2023", spain: 1260, germany: 1709, france: 2000 },
  { year: "2024", spain: 1545, germany: 1450, france: 1100 },
];

const chartConfig = {
  spain: {
    label: "spain",
    color: "hsl(var(--chart-1))",
  },
  germany: {
    label: "Germany",
    color: "hsl(var(--chart-2))",
  },
  france: {
    label: "France",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function PieChartCompo() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-bold">Line Chart</h1>
      </div>
      <div className="mt-4 text-gray-500">
        <p>The minimum wage in Germany,Frane and Spain (EUR/month)</p>
      </div>
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Line Chart - Label</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-[40rem] w-full" config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 35,
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 4)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Line
                  dataKey="germany"
                  type="natural"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                  dot={{
                    fill: "var(--chart-2)",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Line>
                <Line
                  dataKey="spain"
                  type="natural"
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                  dot={{
                    fill: "var(--chart-5)",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Line>
                <Line
                  dataKey="france"
                  type="natural"
                  stroke="var(--chart-3)"
                  strokeWidth={2}
                  dot={{
                    fill: "var(--chart-2)",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Line>
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
