import { useState } from "react";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { MdExpandMore } from "react-icons/md";
import Typography from "@mui/material/Typography";
import { Divider, IconButton } from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "transparent",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  padding: "10px 0",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <IconButton
        sx={{
          background: "var(--primary)",
          "&:hover": {
            background: "#064e56",
          },
        }}
      >
        <MdExpandMore color="#fff" />
      </IconButton>
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  background: "transparent",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState<string>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(panel);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Des raisons de voter pour nous ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "ElaineKinandhita",
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed sol
            amet eiusmod tempor incididunt ut labore et dolore magna et aliqua.
            Ut eos enim ad minim veniam, quis nostrud exercitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Qu'est-ce que vous devez savoir avant le caucus ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "ElaineKinandhita",
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed sol
            amet eiusmod tempor incididunt ut labore et dolore magna et aliqua.
            Ut eos enim ad minim veniam, quis nostrud exercitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Quel est notre plan économique pour cette année ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "ElaineKinandhita",
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed sol
            amet eiusmod tempor incididunt ut labore et dolore magna et aliqua.
            Ut eos enim ad minim veniam, quis nostrud exercitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Comment savoir si j'ai voté ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "ElaineKinandhita",
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed sol
            amet eiusmod tempor incididunt ut labore et dolore magna et aliqua.
            Ut eos enim ad minim veniam, quis nostrud exercitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </div>
  );
}
