import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Transactions } from "./transactions";

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

function RowData2() {
  return (
    <section>
      <div className="flex justify-between items-center mt-4 gap-4 flex-wrap">
        <div>
          <Card className="bg-[var(--input)] hover:bg-[var(--ring)] duration-150">
            <CardHeader>
              <CardTitle className="text-xl">Line Chart - Label</CardTitle>
              <CardDescription className="text-xl">
                January - June 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                className="lg:h-[27rem] lg:w-full w-[21rem] h-[15rem]"
                config={chartConfig}
              >
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    top: 35,
                    left: 12,
                    right: 12,
                    bottom: 35,
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
          </Card>
        </div>
        <div className="bg-[var(--input)] hover:bg-[var(--ring)] duration-150 lg:h-[35.5rem] lg:w-[44rem] h-[25rem] w-[25rem] rounded-md p-4 overflow-y-scroll">
          <div className="mb-4 font-bold text-xl">
            <h2>Recent Transactions</h2>
          </div>
          <div className="flex flex-col gap-10 w-full">
            {Transactions.map((item, index) => (
              <ul
                key={index}
                className="flex items-center justify-between text-center bg-[var(--secondary)] rounded-sm p-4"
              >
                <div className="flex flex-col gap-2 p-2">
                  <li className="font-bold text-xl">{item.user}</li>
                  <li className="">{item.txId}</li>
                </div>
                <li className="text-xl font-light">{item.date}</li>
                <li className="text-xl font-light">{item.cost}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RowData2;
