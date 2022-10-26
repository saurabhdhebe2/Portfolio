import Image from "next/image";
import Link from "next/link";
import React from "react";
import imdbImg from "../public/assets/projects/imdb.png";
import googleImg from "../public/assets/projects/google.png";
import amazonImg from "../public/assets/projects/amazon.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="IMDB-clone"
            backgroundImg={imdbImg}
            projectUrl="/imdb"
            tech="React JS"
          />
          <ProjectItem
            title="Google-clone"
            backgroundImg={googleImg}
            projectUrl="/google"
            tech="React JS"
          />
          <ProjectItem
            title="Amazon-clone"
            backgroundImg={amazonImg}
            projectUrl="/amazon"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
