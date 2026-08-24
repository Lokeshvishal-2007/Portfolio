"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { config } from "@/data/config";
import Link from "next/link";
import { useEffect, useState } from "react";

type OrbitItem = {
  label: string;
  angle: number;
};

type OrbitProps = {
  items: OrbitItem[];
  orbitClass: string;
  dotVariant: "dot-blue" | "dot-purple" | "dot-subtle";
  duration: string;
  reverse?: boolean;
};

const orbitOneItems: OrbitItem[] = [
  { label: "AI", angle: 20 },
  { label: "PYTHON", angle: 200 },
];

const orbitTwoItems: OrbitItem[] = [
  { label: "COMPUTER VISION", angle: 65 },
  { label: "ML", angle: 245 },
];

const orbitThreeItems: OrbitItem[] = [
  { label: "REACT", angle: 125 },
  { label: "FULL STACK", angle: 305 },
];

function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const [parallax, setParallax] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");

    const updateViewport = () => {
      setIsMobile(
        mediaQuery.matches || window.innerWidth < 768
      );
    };

    updateViewport();

    window.addEventListener("resize", updateViewport);
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  const resetParallax = () => {
    setParallax({
      x: 0,
      y: 0,
    });
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (
      shouldReduceMotion ||
      isMobile ||
      event.pointerType !== "mouse"
    ) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    const relativeX =
      (event.clientX - rect.left) / rect.width - 0.5;

    const relativeY =
      (event.clientY - rect.top) / rect.height - 0.5;

    setParallax({
      x: relativeX * 12,
      y: relativeY * 12,
    });
  };

  const renderOrbit = ({
    items,
    orbitClass,
    dotVariant,
    duration,
    reverse = false,
  }: OrbitProps) => {
    return (
      <div
        className={`orbit-track ${orbitClass} ${
          reverse ? "orbit-reverse" : ""
        }`}
        style={
          {
            "--orbit-duration": duration,
          } as React.CSSProperties
        }
        aria-hidden="true"
      >
        {items.map((item) => (
          <div
            key={`${orbitClass}-${item.label}`}
            className="orbit-planet"
            style={
              {
                "--planet-angle": `${item.angle}deg`,
              } as React.CSSProperties
            }
          >
            <div className="orbit-body">
              <span className={`orbit-node ${dotVariant}`} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const legendItems: {
    label: string;
    top: string;
    left: string;
    dot: "dot-blue" | "dot-purple" | "dot-subtle";
    align: "left" | "right" | "center";
  }[] = [
    {
      label: "AI",
      top: "-4%",
      left: "50%",
      dot: "dot-blue",
      align: "center",
    },
    {
      label: "PYTHON",
      top: "104%",
      left: "50%",
      dot: "dot-blue",
      align: "center",
    },
    {
      label: "COMPUTER VISION",
      top: "23%",
      left: "97%",
      dot: "dot-purple",
      align: "right",
    },
    {
      label: "ML",
      top: "77%",
      left: "3%",
      dot: "dot-purple",
      align: "left",
    },
    {
      label: "REACT",
      top: "77%",
      left: "97%",
      dot: "dot-subtle",
      align: "right",
    },
    {
      label: "FULL STACK",
      top: "23%",
      left: "3%",
      dot: "dot-subtle",
      align: "left",
    },
  ];

  const isActive = isHovered || isPressed;

  return (
    <div className="hero-visual">
      <motion.div
        className="hero-orbit-interactive"
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") {
            setIsHovered(true);
          }
        }}
        onPointerLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
          resetParallax();
        }}
        onPointerDown={(event) => {
          if (event.pointerType === "touch") {
            setIsPressed(true);
          }
        }}
        onPointerUp={() => {
          setIsPressed(false);
        }}
        onPointerCancel={() => {
          setIsPressed(false);
          resetParallax();
        }}
        onPointerMove={handlePointerMove}
        animate={{
          x: isMobile ? 0 : parallax.x,
          y: isMobile ? 0 : parallax.y,
          scale: isActive ? 1.07 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 18,
          mass: 0.7,
        }}
      >
        {renderOrbit({
          items: orbitOneItems,
          orbitClass: "orbit-1",
          dotVariant: "dot-blue",
          duration: "28s",
        })}

        {renderOrbit({
          items: orbitTwoItems,
          orbitClass: "orbit-2",
          dotVariant: "dot-purple",
          duration: "18s",
          reverse: true,
        })}

        {renderOrbit({
          items: orbitThreeItems,
          orbitClass: "orbit-3",
          dotVariant: "dot-subtle",
          duration: "36s",
        })}

        <div className="hero-photo">
          <div className="hero-photo-glow" />

          <div className="hero-photo-frame">
            <img
              src="/profile/Image.jpg"
              alt="Lokeshvishal"
              width={220}
              height={220}
              className="profile-photo"
            />
          </div>
        </div>

        <div className="orbit-legend" aria-hidden="true">
          {legendItems.map((item) => (
            <div
              key={item.label}
              className={`legend-item legend-${item.align}`}
              style={{
                top: item.top,
                left: item.left,
              }}
            >
              <span className={`orbit-node ${item.dot}`} />
              <span className="orbit-label">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_50%)]
          "
        />

        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  backgroundPosition: [
                    "0px 0px",
                    "36px 36px",
                  ],
                }
          }
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        />
      </div>

      <div
        className="
          container
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-5rem)]
          items-center
          gap-8
          px-5
          py-10
          sm:px-6
          md:grid-cols-2
          md:gap-12
          md:px-12
          md:py-0
          lg:gap-16
        "
      >
        <div className="flex w-full flex-col">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              flex
              flex-col
              items-center
              text-center
              md:items-start
              md:text-left
            "
          >
            <span
              className="
                mb-4
                text-xs
                font-bold
                uppercase
                tracking-[0.28em]
                text-accent
                sm:text-sm
              "
            >
              AI & Data Science Student
            </span>

            <h1
              className="
                mb-4
                text-4xl
                font-bold
                leading-[0.95]
                tracking-[-0.06em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              LOKESHVISHAL{" "}
              <span className="text-white">R</span>
            </h1>

            <h2
              className="
                mb-8
                text-base
                font-light
                uppercase
                tracking-[0.18em]
                text-gray-400
                sm:text-lg
                md:mb-6
                md:text-2xl
              "
            >
              {config.secondaryRole}
            </h2>
          </motion.div>

          <div
            className="
              order-2
              flex
              w-full
              items-center
              justify-center
              py-8
              md:hidden
            "
          >
            <HeroVisual />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              order-3
              flex
              flex-col
              items-center
              text-center
              md:order-2
              md:items-start
              md:text-left
            "
          >
            <p
              className="
                mb-10
                max-w-lg
                text-base
                leading-relaxed
                text-gray-400
                sm:text-lg
                md:text-xl
              "
            >
              {config.shortDescription}
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
                md:justify-start
              "
            >
              <Link
                href="#projects"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-colors
                  hover:bg-gray-200
                  sm:px-8
                  sm:text-base
                "
                aria-label="View My Projects"
              >
                View My Projects

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                    motion-reduce:group-hover:translate-x-0
                  "
                  aria-hidden="true"
                />
              </Link>

              <a
                href={config.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-white/10
                  sm:px-8
                  sm:text-base
                "
                aria-label="Visit my GitHub profile"
              >
                <FaGithub
                  size={18}
                  aria-hidden="true"
                />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            hidden
            w-full
            items-center
            justify-center
            md:flex
          "
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}