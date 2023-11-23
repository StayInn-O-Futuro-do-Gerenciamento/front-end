import { NavBarSearchStyle } from "./style";
// import notificationImg from "../../assets/navbar/Notification.svg";
import searchImg from "../../assets/navbar/Search.svg";
import { LiaUserCircle } from "react-icons/lia";

export const NavBarSearch = () => {
  return (
    <NavBarSearchStyle>
      <div>
        <img src={searchImg} alt="" />
        <input type="text" placeholder="Procure por quartos e ofertas" />
      </div>
      <div>
        {/* <img src={notificationImg} alt="" /> */}
        <LiaUserCircle className="iconUser" />
      </div>
    </NavBarSearchStyle>
  );
};
