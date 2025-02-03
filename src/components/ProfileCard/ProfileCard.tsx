import { User } from "../../types";
import st from "./ProfileCard.module.scss";

type Props = {
  profile: User;
};

export default function ProfileCard({ profile }: Props) {
  return (
    <div className={st.root}>
      <div className={st.left}>
        <img src={profile.image} alt="фото профиля" />
        <div className={st.information}>
          <h3>
            {profile.firstName} {profile.lastName} {profile.maidenName}
          </h3>
          <p>
            {profile.company.title} at {profile.company.name}
          </p>
          <p>
            {profile.address.city}, {profile.address.country}
          </p>
        </div>
      </div>
      <div className={st.right}>
        <h4>Education</h4>
        <p>{profile.university}</p>
        <p>
          {profile.address.city}, {profile.address.country}
        </p>
      </div>
    </div>
  );
}
