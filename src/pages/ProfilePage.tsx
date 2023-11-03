import Footer from "../components/Footer";
import HomeIndicator from "../components/HomeIndicator";
import ProfileHeader from "../components/profile/ProfileHeader";
import { useState } from "react";
import ProfileList from "../components/profile/ProfileList";
const ProfilePage = () => {
  //즐겨찾기 toggle
  const [favorite, setFavorite] = useState<boolean>(false);
  return (
    <div className="pageWrapper">
      <ProfileHeader favorite={favorite} setFavorite={setFavorite} />
      <ProfileList favorite={favorite} />
      <Footer page="people" />
      <HomeIndicator color="var(--gray-1)" />
    </div>
  );
};
export default ProfilePage;
