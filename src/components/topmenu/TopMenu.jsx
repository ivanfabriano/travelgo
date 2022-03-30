// MUI ICONS IMPORT
import { NotificationsOutlined } from "@mui/icons-material";
import TravelLogo from "../../assets/icons/travelgo.svg";

const TopMenu = () => {
  return (
    <div className="flex">
      <div className="w-4/5">
        <div className="mb-12px mt-16px ml-36px">
          <img src={TravelLogo} alt="" style={{ width: 110 }} />
        </div>
      </div>
      <div className="w-1/5 flex items-center justify-center">
        <div className="relative">
          <span class="flex h-3 w-3 absolute top-0 right-0">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primmary-blue opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-primmary-blue"></span>
          </span>
          <NotificationsOutlined />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
