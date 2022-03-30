// IMPORT LIBRARY
import CircularProgress from "@mui/material/CircularProgress";

const BigButtons = ({ label, onClick, isLoading }) => {
  return (
    <>
      <button
        className="bg-primmary-blue text-white font-semibold rounded-md shadow-sm py-8px w-full relative"
        onClick={onClick}
      >
        {label}
        {isLoading && (
          <div className="absolute inset-0 mx-auto bg-white opacity-50 z-50">
            <CircularProgress
              size={24}
              sx={{
                color: "#1C86D6",
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          </div>
        )}
      </button>
    </>
  );
};

export default BigButtons;
