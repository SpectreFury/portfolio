import React from "react";
import { useDarkModeStore } from "../store/useDarkMode";
import { motion } from "motion/react";
import Tag from "./Tag";
import { GlareCard } from "./ui/glare-card";
import { LinkPreview } from "./ui/link-preview";

const Projects = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <section className={`${darkMode ? "bg-[#1d1d1d]" : "bg-[#f1f1f1]"}`}>
      <div className="container m-auto">
        <div
          className={`text-5xl max-w-fit font-bold bg-gradient-to-r from-emerald-300 to-emerald-600 text-transparent bg-clip-text`}
        >
          My Projects
        </div>
        <div className="container m-auto flex mt-20 gap-10">
          <div className="max-w-[750px] px-10 py-5 rounded text-white">
            <h1 className="text-3xl font-bold text-slate-100">Reddit</h1>
            <p className="mt-5 text-lg font-medium text-gray-300">
              A clone of reddit that incorporates all the major instead the
              actual app. It has an amazing UI which is mobile responsive and
              uses latest Chakra UI components to model different parts, this is
              a full-stack application.
            </p>
            <ul className="flex mt-5 gap-3">
              <Tag text="Next.js" imageUrl="/icons/next-js.png" />
              <Tag text="Typescript" imageUrl="/icons/typescript.png" />
              <Tag text="Firebase" imageUrl="/icons/firebase.png" />
            </ul>
          </div>
          <motion.div className="max-w-[500px] h-full rounded overflow-hidden">
            <GlareCard>
              <img src="/reddit.png" />
            </GlareCard>
          </motion.div>
        </div>
        <div className="container m-auto flex mt-20 gap-10">
          <motion.div className="max-w-[500px] rounded overflow-hidden mx-10">
            <GlareCard>
              <img src="/lobby.png" />
            </GlareCard>
          </motion.div>
          <div className="max-w-[750px] py-5 rounded text-white">
            <h1 className="text-3xl font-bold text-slate-100">Lobby</h1>
            <p className="mt-5 text-lg font-medium text-gray-300">
              I wanted to learn how discord works and so I created Lobby. I used
              WebSockets and other browser APIs to let users talk to each other
              using their voice as well as through text messages.
            </p>
            <ul className="flex mt-5 gap-3">
              <Tag text="Next.js" imageUrl="/icons/next-js.png" />
              <Tag text="Typescript" imageUrl="/icons/typescript.png" />
              <Tag text="Firebase" imageUrl="/icons/firebase.png" />
            </ul>
          </div>
        </div>
        <div className="container m-auto flex mt-20 gap-10">
          <div className="max-w-[750px] px-10 py-5 rounded text-white">
            <h1 className="text-3xl font-bold text-slate-100">Querify</h1>
            <p className="mt-5 text-lg font-medium text-gray-300">
              This is my final university project where we tried to make life
              easier for people who don't know how to interact with databases
              using query languages. I used NLP to talk to the user and generate
              queries
            </p>
            <ul className="flex mt-5 gap-3">
              <Tag text="Next.js" imageUrl="/icons/next-js.png" />
              <Tag text="Typescript" imageUrl="/icons/typescript.png" />
              <Tag text="Firebase" imageUrl="/icons/firebase.png" />
            </ul>
          </div>
          <motion.div className="max-w-[500px] h-full rounded overflow-hidden">
            <GlareCard>
              <img src="/querify.png" />
            </GlareCard>
          </motion.div>
        </div>
        <div className="flex justify-center items-center h-[20rem] flex-col px-4">
          <p className="text-slate-200 dark:text-neutral-400 text-xl md:text-5xl max-w-5xl text-left mb-10">
            I make a lot of stuff so visit my{"  "}
            <LinkPreview
              url="https://github.com/SpectreFury"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Github
            </LinkPreview>{" "}
            to view my other projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
