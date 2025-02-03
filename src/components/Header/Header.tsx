import st from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router";
import { User } from "../../types";

type Props = {
  profile: User | null;
};

function Header({ profile }: Props) {
  return (
    <div className={st.root}>
      <img src={logo} alt="" />
      <nav className={st.nav}>
        <Link to="/" className={st.item}>
          Home
        </Link>
        <Link to="/contact" className={st.item}>
          Contact
        </Link>
      </nav>
      <div className={st.right}>
        <Link to="/profile/1">
          <img src={profile?.image} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
