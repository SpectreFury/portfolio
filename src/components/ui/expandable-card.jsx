"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";
import Tag from "../Tag";

import SocketIcon from "../../assets/socket.svg";
import AuthIcon from "../../assets/auth.svg";
import ZustandIcon from "../../assets/zustand.svg";
import ThreeIcon from "../../assets/three.svg";
import TypescriptIcon from "../../assets/typescript.svg";
import JavascriptIcon from "../../assets/javascript.svg";
import ReactIcon from "../../assets/react.svg";
import NextJSIcon from "../../assets/nextjs.svg";
import TailwindIcon from "../../assets/tailwind.svg";
import ViteIcon from "../../assets/vitejs.svg";
import AstroIcon from "../../assets/astro.svg";
import GoIcon from "../../assets/go.svg";
import NodeIcon from "../../assets/nodejs.svg";
import ExpressIcon from "../../assets/express.svg";
import MongoDBIcon from "../../assets/mongodb.svg";
import WebpackIcon from "../../assets/webpack.svg";
import PostgresIcon from "../../assets/postgres.svg";
import LinuxIcon from "../../assets/linux.svg";
import GinIcon from "../../assets/gin.svg";
import HtmlIcon from "../../assets/html.svg";
import CssIcon from "../../assets/css.svg";
import DockerIcon from "../../assets/docker.svg";
import JestIcon from "../../assets/jest.svg";

export function ExpandableCard() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 px-4 md:px-0">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Portfolio Website",
    description: "A portfolio made with React",
    src: "/images/portfolio.png",
    ctaText: "Visit",
    ctaLink: "https://spectrefury.in",
    content: () => {
      return (
        <div>
          <ul className="flex">
            <Tag size="md" imageUrl={TypescriptIcon} />
            <Tag size="md" imageUrl={ViteIcon} />
            <Tag size="md" imageUrl={ReactIcon} />
            <Tag size="md" imageUrl={TailwindIcon} />
            <Tag size="md" imageUrl={ThreeIcon} />
            <Tag size="md" imageUrl={ZustandIcon} />
          </ul>
        </div>
      );
    },
  },
  {
    title: "Bliss Note Taking",
    description: "AI powered note taking",
    src: "/images/bliss.png",
    ctaText: "Visit",
    ctaLink: "https://bliss-puce.vercel.app",
    content: () => {
      return (
        <div>
          <ul className="flex">
            <Tag size="md" imageUrl={TypescriptIcon} />
            <Tag size="md" imageUrl={NextJSIcon} />
            <Tag size="md" imageUrl={ReactIcon} />
            <Tag size="md" imageUrl={TailwindIcon} />
            <Tag size="md" imageUrl={ZustandIcon} />
            <Tag size="md" imageUrl={AuthIcon} />
          </ul>
        </div>
      );
    },
  },
  {
    title: "Nodebased Email Sequencer",
    description: "A node based email sequencer",
    src: "/images/futureblink.png",
    ctaText: "Visit",
    ctaLink: "https://futureblink-task.vercel.app",
    content: () => {
      return (
        <div>
          <ul className="flex flex-wrap">
            <Tag size="md" imageUrl={TypescriptIcon} />
            <Tag size="md" imageUrl={NextJSIcon} />
            <Tag size="md" imageUrl={ReactIcon} />
            <Tag size="md" imageUrl={TailwindIcon} />
            <Tag size="md" imageUrl={ZustandIcon} />
            <Tag size="md" imageUrl={AuthIcon} />
            <Tag size="md" imageUrl={NodeIcon} />
            <Tag size="md" imageUrl={ExpressIcon} />
            <Tag size="md" imageUrl={MongoDBIcon} />
          </ul>
        </div>
      );
    },
  },
  {
    title: "Lobby",
    description: "Realtime audio and chat app",
    src: "/images/lobby.png",
    ctaText: "Visit",
    ctaLink: "https://lobby-teal.vercel.app",
    content: () => {
      return (
        <div>
          <ul className="flex flex-wrap">
            <Tag size="md" imageUrl={TypescriptIcon} />
            <Tag size="md" imageUrl={NextJSIcon} />
            <Tag size="md" imageUrl={ReactIcon} />
            <Tag size="md" imageUrl={TailwindIcon} />
            <Tag size="md" imageUrl={ZustandIcon} />
            <Tag size="md" imageUrl={AuthIcon} />
            <Tag size="md" imageUrl={NodeIcon} />
            <Tag size="md" imageUrl={ExpressIcon} />
            <Tag size="md" imageUrl={MongoDBIcon} />
            <Tag size="md" imageUrl={SocketIcon} />
          </ul>
        </div>
      );
    },
  },
];
