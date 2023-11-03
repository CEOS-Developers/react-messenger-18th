//component
import Footer from "../components/Footer";
import HomeIndicator from "../components/HomeIndicator";
import MyProfile from "../components/setting/MyProfile";
import SettingHeader from "../components/setting/SettingHeader";
import SettingLink from "../components/setting/SettingLink";
const SettingPage = () => {
  return (
    <div className="pageWrapper">
      <SettingHeader />
      <MyProfile />
      <SettingLink />
      <Footer page="setting" />
      <HomeIndicator color="var(--gray-1)" />
    </div>
  );
};

export default SettingPage;
