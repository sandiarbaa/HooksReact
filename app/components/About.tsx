"use client";
import React from "react";
import { useAppState } from "../context/state";
import MainLayouts from "../layouts/MainLayouts";

const About = () => {
  const { isDarkMode } = useAppState();

  return (
    <MainLayouts>
      <h1 className={`${isDarkMode ? "title-dark" : "title-light"}`}>
        About Page
      </h1>
      <p className={`${isDarkMode ? "text-white" : "text-slate-600"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis rem
        eos odit, porro quod accusantium exercitationem adipisci est praesentium
        sunt similique neque corrupti ducimus commodi aperiam eaque libero?
        Ratione rerum facere minima mollitia placeat beatae sunt suscipit illo
        quaerat non, quasi eveniet alias voluptas repellat! Quaerat sit
        assumenda facilis?
      </p>
      <p className={`${isDarkMode ? "text-white" : "text-slate-600"} my-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis rem
        eos odit, porro quod accusantium exercitationem adipisci est praesentium
        sunt similique neque corrupti ducimus commodi aperiam eaque libero?
        Ratione rerum facere minima mollitia placeat beatae sunt suscipit illo
        quaerat non, quasi eveniet alias voluptas repellat! Quaerat sit
        assumenda facilis? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Consectetur tenetur pariatur exercitationem animi nemo voluptas
        veniam corporis ducimus est quae dolores deleniti, alias ab, quos
        debitis eum deserunt? Tempore itaque, a cum unde culpa provident quam
        eligendi reiciendis obcaecati quia, optio aliquid similique molestiae
        deserunt aspernatur fuga ad quibusdam voluptates.
      </p>
    </MainLayouts>
  );
};

export default About;
