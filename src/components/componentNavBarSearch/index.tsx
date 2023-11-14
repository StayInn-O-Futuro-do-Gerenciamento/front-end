import { NavBarSearchStyle } from "./style";
import notificationImg from "../../assets/navbar/Notification.svg";
import searchImg from "../../assets/navbar/Search.svg";
import avatarImg from "../../assets/navbar/Avatar.svg";

export const NavBarSearch = () => {
  return (
    <NavBarSearchStyle>
      <div>
        <img src={searchImg} alt="" />
        <input type="text" placeholder="Procure por quartos e ofertas" />
      </div>
      <div>
        <img src={notificationImg} alt="" />
        <img src={avatarImg} alt="" />
      </div>
    </NavBarSearchStyle>
  );
};
