const UnitMenu = ({ children, active, name }) => {
  return (
    <div
      className={`w-1/4 text-center font-semibold text-sm ease-in duration-100 hover:text-primmary-blue ${
        active === name ? "text-primmary-blue" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default UnitMenu;
