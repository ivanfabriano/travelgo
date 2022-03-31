// IMPORT LIBRARY
import { useState, useEffect } from "react";

// IMPORT ICONS
import { Weekend } from "@mui/icons-material";

const SevenSeater = () => {
  const [availableSeat, setAvailableSeat] = useState({
    seat1: true,
    seat2: true,
    seat3: true,
    seat4: true,
    seat5: true,
    seat6: true,
    seat7: true,
  });
  const [bookedSeat, setBookedSeat] = useState(["seat2", "seat4", "seat3"]);

  useEffect(() => {
    bookedSeat.map((seat) => {
      console.log(seat);
      return setAvailableSeat({ ...availableSeat, [seat]: false });
    });
  }, []);

  return (
    <div>
      <div class="grid grid-cols-3 gap-10">
        <button
          disabled={true}
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat1: !availableSeat.seat1 });
          }}
          className={`${
            availableSeat.seat1 === true ? "text-black" : "text-primmary-blue"
          }`}
        >
          <Weekend />
        </button>
        <button></button>
        <button className="text-gray-500">
          <Weekend />
        </button>
        <button
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat2: !availableSeat.seat2 });
          }}
          className={`${
            availableSeat.seat2 === true ? "text-black" : "text-primmary-blue"
          }`}
        >
          <Weekend />
        </button>
        <button
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat3: !availableSeat.seat3 });
          }}
          className={`${
            availableSeat.seat3 === true ? "text-black" : "text-primmary-blue"
          }`}
        >
          <Weekend />
        </button>
        <button
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat4: !availableSeat.seat4 });
          }}
          className={`${
            availableSeat.seat4 === true ? "text-black" : "text-primmary-blue"
          }`}
        >
          <Weekend />
        </button>
        <button
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat5: !availableSeat.seat5 });
          }}
          className={`${
            availableSeat.seat5 === true ? "text-black" : "text-primmary-blue"
          }`}
        >
          <Weekend />
        </button>
        <button
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat6: !availableSeat.seat6 });
          }}
          className={`${
            availableSeat.seat6 === true ? "text-black" : "text-primmary-blue"
          }`}
        >
          <Weekend />
        </button>
        <button
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat7: !availableSeat.seat7 });
          }}
          className={`${
            availableSeat.seat7 === true ? "text-black" : "text-primmary-blue"
          }`}
        >
          <Weekend />
        </button>
      </div>
    </div>
  );
};

export default SevenSeater;
