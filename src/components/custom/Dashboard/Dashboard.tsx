import {
  config_1,
  config_2,
  config_3,
  config_4,
  data_1,
  data_2,
  data_3,
  data_4,
} from "./PieData";
import RowData from "./RowData";
import RowData2 from "./RowData2";
import RowData3 from "./RowData3";

function Dashboard() {
  return (
    <section className="mb-20 lg:mb-4">
      <div className="">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        <div className="mt-4 text-gray-500">
          <p>Welcome to your dashboard</p>
        </div>
      </div>
      <div className="flex xl:gap-11 gap-2 flex-wrap">
        <RowData data={data_1} config={config_1} />
        <RowData data={data_2} config={config_2} />
        <RowData data={data_3} config={config_3} />
        <RowData data={data_4} config={config_4} />
      </div>
      <div className="flex gap-11 flex-wrap">
        <RowData2 />
      </div>
      <div className="flex gap-11 flex-wrap">
        <RowData3 />
      </div>
    </section>
  );
}

export default Dashboard;
