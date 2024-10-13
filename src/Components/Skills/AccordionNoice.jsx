import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";


export default function AccordionNoice(props) {
    const [expanded, setExpanded] = useState(true);
  console.log(expanded);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  
    return (
        <div className="mt-5">
            <Accordion sx={{ backgroundColor: '#ffffff', }}
        expanded={expanded}
        onChange={handleChange(props.name)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls = {props.name+"-content"}
          id={props.name+"-header"}
        >
          <Typography sx={{height: "40%", width: "40%", flexShrink: 0 }}>
            <div class="grid grid-cols-3 gap-4">
              <div class="">
                <img
                  src={props.imgSrc}
                  className="w-20  m-0 p-0"
                  alt=""
                />
              </div>
              <div class="col-span-2  ml-4">
                <h1 className="text-3xl font-bold">{props.skillTopic}</h1>
              </div>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.desc}
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    );
}