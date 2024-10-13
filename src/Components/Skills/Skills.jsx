import * as React from "react";
import AccordionNoice from "./AccordionNoice";


export default function Skills() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1 className="text-6xl  my-10 dark:text-[#ffffff]" id="Skills">
      SKILLS
      </h1>
      <h1 className="text-4xl dark:text-[#ffffff] ">
      Development Skills
      </h1>


      <AccordionNoice
      isExpanded="true"
      name="pannel1" 
      imgSrc={require("../../assets/img/cyber-security.png")}
      skillTopic="Cyber Security"
      desc="I have solid expertise in cyber security acquired through my
            participation. active participation in competitions such as CTFs
            (Capture The Flags)."
      > </AccordionNoice>

<AccordionNoice
      name="pannel2" 
      imgSrc={require("../../assets/img/cloud-computing.png")}
      skillTopic="Cloud Computing"
      desc="My skills in DevOps and cloud computing are reinforced by a
            certification in Introduction to DevOps and AWS Cloud Practitioner,
            which allows me to design secure and scalable cloud solutions. and
            Azure hands on experience."
      > </AccordionNoice>


<AccordionNoice
      name="pannel3" 
      imgSrc={require("../../assets/img/ai (1).png")}
      skillTopic="Artificial Intelligence"
      desc="YES AI"
      > </AccordionNoice>

<AccordionNoice
      name="pannel4" 
      imgSrc={require("../../assets/img/webdev.png")}
      skillTopic="Web Development"
      desc="My expertise in web development, particularly in React frameworks ,
            Spring Boot and Flask, gives me a global approach for projects
            combining security, performance and user-friendliness."
      > </AccordionNoice>
      

     
    </div>
  );
}
