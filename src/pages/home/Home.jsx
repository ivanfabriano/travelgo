// IMPORT LIBRARY
import { useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// IMPORT COMPONENTS
import DateField from "../../components/forms/DateField";
import AutoField from "../../components/forms/AutoField";
import BigButtons from "../../components/buttons/BigButtons";
import MiniCard from "../../components/cards/MiniCard";
import BigCard from "../../components/cards/BigCard";
import Footer from "../../components/footer/Footer";

// IMPORT ICONS
import {
  LocationOnOutlined,
  CalendarMonthOutlined,
  LocalOfferOutlined,
  PagesOutlined,
} from "@mui/icons-material";

const Home = () => {
  const [origin, setOrigin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date("2014-08-18T21:11:54"));
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const findHandle = () => {
    setIsLoading(true);
  };

  const handleCheck = (event) => {
    setIsRoundTrip(!isRoundTrip);
  };

  return (
    <>
      <div className="pt-20px mx-36px">
        {/* RESERVATION FORM */}
        <div className="text-center mt-20px">
          <Stack spacing={3}>
            <AutoField label="Pilih Kota Asal">
              <LocationOnOutlined />
            </AutoField>
            <AutoField label="Pilih Kota Tujuan">
              <LocationOnOutlined />
            </AutoField>
            <div className="pt-24px">
              <DateField
                handleChange={handleChange}
                value={date}
                label="Tanggal Keberangkatan"
              >
                <CalendarMonthOutlined />
              </DateField>
            </div>
            {isRoundTrip && (
              <div className="pt-8px">
                <DateField
                  handleChange={handleChange}
                  value={date}
                  label="Tanggal Pulang"
                >
                  <CalendarMonthOutlined />
                </DateField>
              </div>
            )}
            <div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={handleCheck} />}
                  label="Pulang-pergi ?"
                />
              </FormGroup>
            </div>
          </Stack>

          <div className="mt-32px">
            <Link to="/show-schedule">
              <BigButtons
                label="Cari Tiket"
                isLoading={isLoading}
                onClick={findHandle}
              />
            </Link>
          </div>
        </div>

        {/* DISCOUNTS SECTION */}
        <div className="my-60px">
          <div className="flex font-semibold mb-20px items-center">
            <LocalOfferOutlined className="mr-4px" />
            <p>Daftar Diskon</p>
          </div>
          <MiniCard />
        </div>

        {/* NEWS SECTION */}
        <div className="my-60px">
          <div className="flex font-semibold mb-20px items-center">
            <PagesOutlined className="mr-4px" />
            <p>Berita Travel</p>
          </div>
          <BigCard />
          <div className="mt-12px">
            <MiniCard />
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
