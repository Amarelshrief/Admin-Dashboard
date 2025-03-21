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

function Dashboard() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="mt-4 text-gray-500">
        <p>Welcome to your dashboard</p>
      </div>
      <div className="flex gap-11">
        <RowData data={data_1} config={config_1} />
        <RowData data={data_2} config={config_2} />
        <RowData data={data_3} config={config_3} />
        <RowData data={data_4} config={config_4} />
      </div>
    </section>
  );
}

export default Dashboard;
