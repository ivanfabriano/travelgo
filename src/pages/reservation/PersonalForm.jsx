// IMPORT LIBRARY
import { useState } from "react";
import Car1 from "../../assets/images/car1.png";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import TextField from "../../components/forms/TextField";
import AutoField from "../../components/forms/AutoField";
import BigButtons from "../../components/buttons/BigButtons";

// IMPORT ICONS
import {
  BadgeOutlined,
  EmailOutlined,
  PhoneAndroidOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";

const PersonalForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const findHandle = () => {
    setIsLoading(true);
  };

  return (
    <div className="pt-20px mx-36px pb-80px">
      <p>
        Keberangkatan : <span className="font-semibold ">09.00 WIB</span>
      </p>
      <div className="relative my-12px">
        <img src={Car1} alt="" />
        <div>
          <span className="bg-primmary-blue rounded-tl-lg text-white font-semibold py-1 px-2 absolute bottom-0 right-0">
            Emerald-20
          </span>
        </div>
      </div>
      <div className="mt-8px">
        <Stack spacing={2}>
          <TextField label="Nama Pemesan">
            <BadgeOutlined />
          </TextField>
          <TextField label="Email Pemesan">
            <EmailOutlined />
          </TextField>
          <TextField label="Nomor Pemesan">
            <PhoneAndroidOutlined />
          </TextField>
          <AutoField label="Pilih Kota Asal">
            <LocationOnOutlined />
          </AutoField>
        </Stack>
      </div>
      <div className="mt-32px mb-16px">
        <Link to="/choose-seat">
          <BigButtons
            label="Pilih Kursi"
            isLoading={isLoading}
            onClick={findHandle}
          />
        </Link>
      </div>
    </div>
  );
};

export default PersonalForm;
