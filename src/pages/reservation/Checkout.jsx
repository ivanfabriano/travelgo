import React from "react";

const Checkout = () => {
  return (
    <div className="pt-20px mx-36px pb-80px">
      <div>
        <h2 className="text-lg font-semibold text-primmary-blue mb-4px">Detail Pemesanan</h2>
        <ul>
          <li className="flex mb-2px">
            <div className="w-3/5">Nama Armada</div>
            <div className="w-2/5">: Emerald-20</div>
          </li>
          <li className="flex mb-2px">
            <div className="w-3/5">Jenis Armada</div>
            <div className="w-2/5">: Innova 2022</div>
          </li>
          <li className="flex mb-2px">
            <div className="w-3/5">Tanggal Keberangkatan</div>
            <div className="w-2/5">: 12 April 2022</div>
          </li>
          <li className="flex mb-2px">
            <div className="w-3/5">Jam Keberangkatan</div>
            <div className="w-2/5">: 09:00 WIB</div>
          </li>
          <li className="flex mb-2px">
            <div className="w-3/5">Titik Turun</div>
            <div className="w-2/5">: Jl. Pemuda</div>
          </li>
          <li className="flex mb-2px">
            <div className="w-3/5">Jumlah Penumpang</div>
            <div className="w-2/5">: 3 Orang</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Checkout;
