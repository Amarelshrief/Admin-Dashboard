import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Pie,
  PieChart,
  XAxis,
} from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { config_5, data_5 } from "./PieData";
import { useMemo } from "react";
import { TrendingUp } from "lucide-react";
const chartData = [
  { year: "2015", belgium: 900, denmark: 1400, portugal: 1700 },
  { year: "2016", belgium: 1000, denmark: 1500, portugal: 1800 },
  { year: "2017", belgium: 1100, denmark: 1500, portugal: 1600 },
  { year: "2018", belgium: 1200, denmark: 1700, portugal: 2000 },
  { year: "2019", belgium: 1260, denmark: 1709, portugal: 2000 },
  { year: "2020", belgium: 1545, denmark: 1450, portugal: 1100 },
];

const chartConfig = {
  belgium: {
    label: "Belgium",
    color: "hsl(var(--chart-1))",
  },
  denmark: {
    label: "Denmark",
    color: "hsl(var(--chart-2))",
  },
  portugal: {
    label: "Portugal",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

function RowData3() {
  const totalVisitors = useMemo(() => {
    return data_5.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);
  return (
    <div>
      <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <Card className="bg-gray-200 hover:bg-gray-300 duration-150">
            <CardHeader>
              <CardTitle className="text-xl">
                Bar Chart - Stacked + Legend
              </CardTitle>
              <CardDescription className="text-xl">
                January - June 2024
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <ChartContainer className="h-[40rem] w-full" config={chartConfig}>
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
                    className=""
                    dataKey="denmark"
                    stackId="a"
                    fill="var(--chart-2)"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="belgium"
                    stackId="a"
                    fill="var(--chart-5)"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="portugal"
                    stackId="a"
                    fill="var(--chart-6)"
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
        <div className="h-[48.5rem]">
          <Card className="flex flex-col h-full bg-gray-200 hover:bg-gray-300 duration-150">
            <CardHeader className="items-center pb-0">
              <CardTitle>Pie Chart - Donut with Text</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={config_5}
                className="mx-auto aspect-square max-h-[25rem] h-[14rem]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={data_5}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Visitors
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm items-center">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default RowData3;
