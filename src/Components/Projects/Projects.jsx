import * as React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <h1 className="text-6xl my-10 dark:text-[#ffffff]" id="Projects">
        PROJECTS
      </h1>

      <ProjectCard
        title="Design and Development Project"
        name="HandDrawn Interface Coder"
        description="The project enables the detection and conversion of hand-drawn interfaces
into functional code using OpenCV and CNN, supporting various frameworks including HTML, React, and Angular with AI model."
        imgPath={require("../../assets/img/under_const.jpg")}
        videoLink=""
      ></ProjectCard>

      <ProjectCard
        title="AI-Powered Heart Disease Prediction"
        name="Heart Disease Prediction"
        description="The project aims to predict the likelihood of an individual having heart disease based on various input factors. Extensive testing and data analysis has
been conducted on a variety of AI models to enhance predictive accuracy"
        imgPath={require("../../assets/img/under_const.jpg")}
        videoLink=""
      ></ProjectCard>

      <ProjectCard
        title="CoffeeShop Management System"
        name="CoffeeShop"
        description="Developed a comprehensive coﬀee shop management system featuring a
user-friendly interface using JavaFX . Employed a variety of design patterns
to enhance code modularity."
        imgPath={require("../../assets/img/under_const.jpg")}
        videoLink=""
      ></ProjectCard>

      <ProjectCard
        title="RAT USB Rubber-Ducky"
        name="Ratatouille"
        description="A remote access tool that enables users to access and control a computer or
device from a remote machine over a network connection and an ssh server."
        imgPath={require("../../assets/img/under_const.jpg")}
        videoLink=""
      ></ProjectCard>

      <ProjectCard
        title="Jumping Man"
        name="literally a who just jumps"
        description=""
        imgPath={require("../../assets/img/under_const.jpg")}
        videoLink=""
      ></ProjectCard>
    </>
  );
}
