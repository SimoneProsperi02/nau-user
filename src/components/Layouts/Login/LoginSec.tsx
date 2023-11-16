import PageContainer from "@/components/Container/Container";
import SideLogin from "../../Widgets/Login/SideLogin";
import css from "@/styles/form.module.css";
import LoginFormSection from "../../Widgets/Login/LoginFormSec";

const LoginSec: React.FC = () => {
  return (
    <PageContainer>
      <div className={css.media}>
        <SideLogin />
        <LoginFormSection />
      </div>
    </PageContainer>
  );
};

export default LoginSec;
