// IMPORT LIBRARY
import { useState } from "react";
import { Link } from "react-router-dom";

// IMPORT MUI ICONS
import {
  HomeOutlined,
  ConfirmationNumberOutlined,
  DiscountOutlined,
  ContactSupportOutlined,
} from "@mui/icons-material";

// IMPORT OTHER COMPONENTS
import UnitMenu from "./unitmenu/UnitMenu";

const BottomMenu = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    <div className="w-full">
      <div className="flex block fixed inset-x-0 bottom-0 z-10 py-4 bg-white drop-shadow-xl">
        <UnitMenu active={activeMenu} name="home">
          <Link to="/">
            <HomeOutlined />
            <p>Beranda</p>
          </Link>
        </UnitMenu>
        <UnitMenu active={activeMenu} name="ticket">
          <ConfirmationNumberOutlined />
          <p>E-Tiket</p>
        </UnitMenu>
        <UnitMenu active={activeMenu} name="discount">
          <DiscountOutlined />
          <p>Diskon</p>
        </UnitMenu>
        <UnitMenu active={activeMenu} name="help">
          <Link to="/help">
            <ContactSupportOutlined />
            <p>Bantuan</p>
          </Link>
        </UnitMenu>
      </div>
    </div>
  );
};

export default BottomMenu;
