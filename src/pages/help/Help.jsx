// IMPORT LIBRARY
import { useState } from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import SlimCard from "../../components/cards/SlimCard";

// IMPORT ICONS
import { HelpOutlineOutlined } from "@mui/icons-material";

// IMPORT ASSETS
import CSicon from "../../assets/icons/CS_icon.svg";
import BigButtons from "../../components/buttons/BigButtons";

const Help = () => {
  const [isOpen, setIsOpen] = useState("");

  const accordHandle = () => {
    setIsOpen("1");
  };

  return (
    <div className="pt-20px mx-36px pb-60px">
      <img src={CSicon} alt="" />
      <div className="text-center my-24px">
        <p>
          Anda punya pertanyaan seputar TravelGo ? Tanyakan ke customer service
          TravelGo yang sedang live sekarang juga
        </p>
      </div>
      <div>
        <Link to="/live-chat">
          <BigButtons label="Tanya CS" />
        </Link>
      </div>
      <div className="my-60px">
        <div className="flex font-semibold mb-20px items-center">
          <HelpOutlineOutlined className="mr-4px" />
          <p>FAQ</p>
        </div>
        <SlimCard isOpen={isOpen} onClick={accordHandle} />
      </div>
    </div>
  );
};

export default Help;
