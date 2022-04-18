// IMPORT LIBRARIES
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import BigButtons from "../../components/buttons/BigButtons";
import SevenSeater from "../../components/cars/SevenSeater";

const ChooseSeat = () => {
  return (
    <div className="pt-20px mx-36px pb-80px">
      <SevenSeater />
      <div className="mt-16px">
        <Link to="/checkout">
          <BigButtons label="Checkout" />
        </Link>
      </div>
    </div>
  );
};

export default ChooseSeat;
