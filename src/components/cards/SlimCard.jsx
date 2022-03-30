// IMPORT LIBRARY
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// IMPORT ICONS
import { ExpandMore } from "@mui/icons-material";

const SlimCard = ({ isOpen, onClick }) => {
  return (
    <>
      <div className="rounded-md shadow-sm border border-gray-300 py-12px px-12px" onClick={onClick}>
        <h1 className="text-lg font-semibold">Pembatalan Tiket</h1>
        <p>Pertanyaan terkait pembatalan tiket</p>
      </div>
      {isOpen === '1' && (
        <div className="my-12px mx-8px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Cara pembatalan tiket?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </>
  );
};

export default SlimCard;
