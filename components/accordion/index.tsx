import { useState, SyntheticEvent } from "react";
import {
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";

import styles from "./Accordion.module.scss";

const Accordion = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <MuiAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<MdExpandMore size={25} />}>
          <Typography
            sx={{ width: "33%", flexShrink: 0, fontFamily: "ElaineKinandhita" }}
          >
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "13px" }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
      <MuiAccordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<MdExpandMore size={25} />}>
          <Typography
            sx={{ width: "33%", flexShrink: 0, fontFamily: "ElaineKinandhita" }}
          >
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "13px" }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
      <MuiAccordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<MdExpandMore size={25} />}>
          <Typography
            sx={{ width: "33%", flexShrink: 0, fontFamily: "ElaineKinandhita" }}
          >
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "13px" }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
    </div>
  );
};

export default Accordion;
