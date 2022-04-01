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
    let temp = { ...availableSeat };
    bookedSeat.map((seat) => {
      temp[seat] = "booked";
    });
    setAvailableSeat(temp);
  }, []);

  return (
    <div className="bg-gray-200 py-40px px-12 rounded-lg">
      <div className="text-center bg-gray-300 mb-8px">
        <p>Depan</p>
      </div>
      <div class="grid grid-cols-3 gap-10">
        <button
          disabled={availableSeat.seat1 === "booked" ? true : false}
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat1: !availableSeat.seat1 });
          }}
          className={`${
            availableSeat.seat1 === true
              ? "text-black"
              : availableSeat.seat1 === "booked"
              ? "text-red-600"
              : "text-primmary-blue"
          }`}
        >
          <Weekend />
          <p>1</p>
        </button>
        <button></button>
        <button className="text-gray-500">
          <Weekend />
          <p>Driver</p>
        </button>
        <button
          disabled={availableSeat.seat2 === "booked" ? true : false}
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat2: !availableSeat.seat2 });
          }}
          className={`${
            availableSeat.seat2 === true
              ? "text-black"
              : availableSeat.seat2 === "booked"
              ? "text-red-600"
              : "text-primmary-blue"
          }`}
        >
          <Weekend />
          <p>2</p>
        </button>
        <button
          disabled={availableSeat.seat3 === "booked" ? true : false}
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat3: !availableSeat.seat3 });
          }}
          className={`${
            availableSeat.seat3 === true
              ? "text-black"
              : availableSeat.seat3 === "booked"
              ? "text-red-600"
              : "text-primmary-blue"
          }`}
        >
          <Weekend />
          <p>3</p>
        </button>
        <button
          disabled={availableSeat.seat4 === "booked" ? true : false}
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat4: !availableSeat.seat4 });
          }}
          className={`${
            availableSeat.seat4 === true
              ? "text-black"
              : availableSeat.seat4 === "booked"
              ? "text-red-600"
              : "text-primmary-blue"
          }`}
        >
          <Weekend />
          <p>4</p>
        </button>
        <button
          disabled={availableSeat.seat5 === "booked" ? true : false}
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat5: !availableSeat.seat5 });
          }}
          className={`${
            availableSeat.seat5 === true
              ? "text-black"
              : availableSeat.seat5 === "booked"
              ? "text-red-600"
              : "text-primmary-blue"
          }`}
        >
          <Weekend />
          <p>5</p>
        </button>
        <button
          disabled={availableSeat.seat6 === "booked" ? true : false}
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat6: !availableSeat.seat6 });
          }}
          className={`${
            availableSeat.seat6 === true
              ? "text-black"
              : availableSeat.seat6 === "booked"
              ? "text-red-600"
              : "text-primmary-blue"
          }`}
        >
          <Weekend />
          <p>6</p>
        </button>
        <button
          disabled={availableSeat.seat7 === "booked" ? true : false}
          onClick={() => {
            setAvailableSeat({ ...availableSeat, seat7: !availableSeat.seat7 });
          }}
          className={`${
            availableSeat.seat7 === true
              ? "text-black"
              : availableSeat.seat7 === "booked"
              ? "text-red-600"
              : "text-primmary-blue"
          }`}
        >
          <Weekend />
          <p>7</p>
        </button>
      </div>
      <div className="text-center bg-gray-300 mt-12px">
        <p>Bagasi Belakang</p>
      </div>
    </div>
  );
};

export default SevenSeater;
