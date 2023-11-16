import DashboardContainer from "@/components/Layouts/Dashboard/DashboardContainer";

import { NextPage } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

const Dashboard: NextPage = () => {
  return (
    <div className={montserrat.className}>
      <DashboardContainer />
    </div>
  );
};
export default Dashboard;
