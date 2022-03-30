// IMPORT COMPONENTS
import MiniButton from "../buttons/MiniButton";

// IMPORT IMAGES
import Car1 from "../../assets/images/car1.png";

// IMPORT ICONS
import { PersonOutlined } from "@mui/icons-material";

const CardWButtons = () => {
  return (
    <div className="rounded-md shadow-card py-16px mb-24px">
      <div className="relative">
        <img src={Car1} alt="" />
        <div>
          <span className="bg-primmary-blue rounded-tl-lg text-white font-semibold py-1 px-2 absolute bottom-0 right-0">
            Emerald-20
          </span>
        </div>
      </div>
      <div className="py-12px px-12px">
        <h1 className="text-lg font-semibold">Keberangkatan: 09.00 WIB</h1>
        <p className="mt-12px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rem
          expedita obcaecati fugit sit doloribus labore dolores dolorum fugiat
          vero.
        </p>
      </div>
      <div className="flex px-12px items-center w-full">
        <div className="w-1/2">
          <MiniButton label="Pilih Jadwal" />
        </div>
        <div className="flex font-semibold w-1/2 text-right justify-end">
          <PersonOutlined />
          5/10
        </div>
      </div>
    </div>
  );
};

export default CardWButtons;
