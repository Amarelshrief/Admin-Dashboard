import { Label, Pie, PieChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import { Mail } from "lucide-react";

interface Data {
  browser: string;
  visitors: number;
  fill: string;
}

function RowData({ data, config }: { data: Data[]; config: ChartConfig }) {
  const totalVisitors = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [data]);
  return (
    <section>
      <div className="flex justify-between items-center mt-4 bg-[var(--input)] hover:bg-[var(--ring)] duration-150 w-[20rem] md:w-[22rem] h-[11rem] rounded-md">
        <div className="flex flex-col p-4 gap-y-2">
          <Mail className="text-[var(--chart-5)]" />
          <p>12.361</p>
          <p>Emails Sent.</p>
        </div>
        <div className="w-[15rem] h-full">
          {/* <Card className="flex flex-col h-[12rem] bg-blue-400"> */}
          <CardContent className="h-[11rem]">
            <ChartContainer config={config} className="h-[10rem] w-full">
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={data}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={50}
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

          {/* </Card> */}
        </div>
      </div>
    </section>
  );
}

export default RowData;
