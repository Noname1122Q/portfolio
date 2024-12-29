"use client";
import { Dot, Link2 } from "lucide-react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const projectDetails = [
  {
    title: "Quizy",
    image:
      "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
    stack: ["Next", "PostgreSQL"],
    points: [
      "An AI-powered platform for creating and participating in quizzes.",
      "Allows users to generate quizzes on any topic using AI technology.",
      "Provides detailed score breakdowns and result analysis for every quiz.",
      "Enables users to participate in quizzes created by others.",
    ],
    hostedLink: "",
    githubLink: "https://github.com/Noname1122Q/Quizy",
    isUnderDevelopment: false,
    carouselImages: [],
  },
  {
    title: "Netflix Recommendation Algorithm",
    image:
      "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
    stack: ["Python", "Jupyter", "Pandas"],
    points: [
      "Recommends personalized movie suggestions based on user preferences.",
      "Processes large datasets efficiently by reading complete CSV files.",
      "Utilizes the Pandas library for advanced data manipulation and analysis.",
      "Successfully sold the algorithm to a computer teacher for practical use.",
    ],
    hostedLink: "",
    githubLink: "https://github.com/Noname1122Q/Netflix-Recommendation",
    isUnderDevelopment: false,
    carouselImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAqRyMXOOUYEZJO2KBPLbq-caFS9XAD9Ncg&s",
      "./projects/nfx.png",
      "./projects/nfx2.png",
    ],
  },
  {
    title: "Online Chess Game",
    image:
      "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
    stack: ["Next", "Websockets", "ShadcnUI"],
    points: [
      "A fully functional multiplayer chess game with real-time gameplay.",
      "Includes built-in validation to ensure legal moves during play.",
      "Leverages optimized WebSockets for fast and seamless player interactions.",
      "Future updates planned to introduce new game modes and features.",
    ],
    hostedLink: "",
    githubLink: "https://github.com/Noname1122Q/chess-game",
    isUnderDevelopment: false,
    carouselImages: [],
  },
  {
    title: "Effortless UI",
    image:
      "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
    stack: ["Next", "ShadcnUI"],
    points: [
      "A personal component library aimed at streamlining development.",
      "Offers a curated collection of reusable UI components and functions.",
      "Facilitates quick integration of third-party services into projects.",
      "Designed to significantly reduce development time for web applications.",
    ],
    hostedLink: "",
    githubLink: "https://github.com/Noname1122Q/EffortlessUI",
    isUnderDevelopment: true,
    carouselImages: [],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl my-4 font-semibold text-white">Projects</h1>
      <div>
        {projectDetails.map((project, idx) => (
          <div
            key={idx}
            className="border-l border-slate-400 flex flex-col mb-4"
          >
            <div className=" flex flex-row mb-4">
              <Dialog>
                <DialogTrigger>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg size-24 mx-2 hover:cursor-pointer hover:scale-125 transition-all duration-500"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle></DialogTitle>
                  {/* <Carousel>
                    <CarouselContent>
                      {project.carouselImages &&
                        project.carouselImages.map((image) => (
                          <CarouselItem>
                            <img
                              src={image}
                              alt="img"
                              className="object-contain rounded-lg"
                            />
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                  </Carousel> */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain rounded-lg"
                  />
                </DialogContent>
              </Dialog>
              <div className="flex flex-col justify-center">
                <h3 className="font-medium text-lg flex md:flex-row flex-col text-slate-100">
                  {project.title}
                  <span className="font-semibold text-sm text-center my-auto text-blue-500">
                    {project.isUnderDevelopment && "(Under Development)"}
                  </span>
                </h3>
                <div className="flex flex-row gap-3">
                  {project.stack.map((item) => (
                    <Badge
                      key={item}
                      className={
                        "rounded-full font-bold border-slate-400 text-sm text-slate text-slate-400"
                      }
                      variant={"outline"}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="flex flex-row gap-4 py-2">
                  {project.githubLink != "" && (
                    <Link href={project.githubLink}>
                      <SiGithub className="size-5 text-gray-400 hover:text-white hover:cursor-pointer transition-colors duration-200" />
                    </Link>
                  )}
                  {project.hostedLink != "" && (
                    <Link href={project.githubLink}>
                      <Link2 className="size-5 text-gray-400 hover:text-white hover:cursor-pointer transition-colors duration-200" />
                    </Link>
                  )}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <ul className="custom-list flex flex-col ml-2 mb-1">
                {project.points.map((point, i) => (
                  <li
                    className="text-slate-300 font-medium text-sm py-1 flex text-center "
                    key={i}
                  >
                    <Dot /> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
