// import AuthChecker from "@/store/Auth/AuthChecker";
import Auth from "@/components/HOC/Auth";
import DashboardContainer from "@/components/Layouts/Dashboard/DashboardContainer";

const Dashboard = (
  props: AugmentedAppProps<CustomInitialProps> & CustomAppProps
) => {
  return (
    <Auth auth={undefined}>
      <DashboardContainer />
    </Auth>
  );
};
export default Dashboard;
