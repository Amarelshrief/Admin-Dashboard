import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
    label: "germany",
    color: "hsl(var(--chart-2))",
  },
  france: {
    label: "france",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function BarChartCompo() {
  return (
    <section className="mb-4">
      <div>
        <h1 className="text-3xl font-bold">Bar Chart</h1>
      </div>
      <div className="mt-4 text-gray-500">
        <p>The minimum wage in Germany,Frane and Spain (EUR/month)</p>
      </div>
      <div className="mt-4">
        <Card className="bg-[var(--input)] hover:bg-[var(--ring)] duration-150">
          <CardHeader>
            <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="">
            <ChartContainer
              className="h-[30rem] w-[21.5rem] lg:h-[38rem] lg:w-full"
              config={chartConfig}
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 4)}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey="germany"
                  stackId="a"
                  fill="var(--chart-1)"
                  radius={[0, 0, 4, 4]}
                />
                <Bar
                  dataKey="spain"
                  stackId="a"
                  fill="var(--chart-2)"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey="france"
                  stackId="a"
                  fill="var(--chart-3)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
          {/* <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter> */}
        </Card>
      </div>
    </section>
  );
}
