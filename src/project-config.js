import Expense from "./Assets/Images/2020-10-24 (7).png";
import Comer from "./Assets/Images/2020-10-24 (8).png";
import Chat from "./Assets/Images/2020-10-24 (9).png";
import Morty from "./Assets/Images/2020-10-24 (10).png";
import Covid from "./Assets/Images/2020-10-24 (11).png";
import Game from "./Assets/Images/2020-10-24 (12).png";
import Weather from "./Assets/Images/2020-10-24 (13).png";
import Relax from "./Assets/Images/2020-10-24 (14).png";
import Pokemon from "./Assets/Images/2020-10-24 (15).png";

const projects = [
  {
    id: 1,
    title: "covid tracker",
    photo: `${Covid}`,
    description:
      "You can see charts with different shapes to see how many people are infected, recovered and death from any place in the world by covid19.",
    url: "https://covid19-tracker-by-carlosrobles.netlify.app/",
  },
  {
    id: 2,
    title: "Rick and Morty",
    photo: `${Morty}`,
    description:
      "You'll see all the characters from all the season of rick and morty.",
    url: "https://friendly-sinoussi-bb7fff.netlify.app/",
  },
  {
    id: 3,
    title: "Expense tracker",
    photo: `${Expense}`,
    description:
      "Here you can track any expense that you did on the day, week or month, to see how much money you expended.",
    url: "https://thirsty-kowalevski-fcfc2d.netlify.app/",
  },
  {
    id: 4,
    title: "Comercializadora CA",
    photo: `${Comer}`,
    description: "E-commerce web store to buy home design products. ",
    url: "https://comercializadoracatalog.netlify.app/",
  },
  {
    id: 5,
    title: "Weather App",
    photo: `${Weather}`,
    description:
      "You can be checking the weather of any place with this incredible application created.",
    url: "https://happy-perlman-ec2f95.netlify.app/",
  },
  {
    id: 6,
    title: "Relaxer App",
    photo: `${Relax}`,
    description:
      "You can simply put this app and follow the steps, to have peace of mind again.",
    url: "https://gallant-haibt-80a581.netlify.app/",
  },
  {
    id: 7,
    title: "Game store App",
    photo: `${Game}`,
    description:
      " E-commerce store to be able to buy and verify current video games.",
    url: "https://roger-core.github.io/Reactjs-gameapi-deploy/",
  },
  {
    id: 8,
    title: "Real time chat app",
    photo: `${Chat}`,
    description:
      "You can chat with the whole group and the people who want to join, in complete privacy.",
    url: "https://real-time-chat-e674d.firebaseapp.com/",
  },
  {
    id: 9,
    title: "The Pokemon Api app",
    photo: `${Pokemon}`,
    description:
      "pokemon app where you can see all the information of each of them with the following pages",
    url: "https://roger-core.github.io/React-Pokemon-API/",
  },
];

const creators = [
  {
    id: 1,
    name: "Carlos Alfredo Robles Nuño",
    role: "Full Stack Javascript Developer",
    message:
      "Software engineer & Frontend developer, Javascript and React lover, growing every day to be the best developer on the whole world. (little backend with node and no relational databases & graphql)",
    photo:
      "https://media-exp1.licdn.com/dms/image/C4E03AQF0GZz3bIhFag/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=FXo3lfKs2Os2b5VfCnvKCSs_7jjc0r13jBKSrw-OABw",
  },
  {
    id: 2,
    name: "Mauricio Perea Aguilar",
    role: "Full Stack Engineer",
    message:
      "Experienced Mechatronics Engineer with a Bachelor of Engineering focused in Autonomous Intelligent Systems, working experience in the industrial automation industry. Specialist in resolve problems, take on a variety of tasks and find creative solutions to problems. Experience in PLC languages like StructuredText, ladder and Sequential Function Chart. Strong knowledge in PLC platforms like Twincat2, Twincat3 and TIA Portal. Experience in Robots Programming in brands like ABB, Universal Robots, Stäubli, Epson. Functional Testing experience, electrical design and programming of automate equipmet for testing electronic products. Some experience with CAN bus protocol (automotive communication). Full-Stack Web Developer skills, focused in python and libraries related like Django.",
    photo:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFLaY5wZvKJiA/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=zNhcI_mO7RB-GN1fxUT5PRqbHxUNYp7p7nY__xZAdgk",
  },
  {
    id: 3,
    name: "Rogelio Plata Cortés",
    role: "Full Stack Web Developer",
    message:
      "Hi i am Full Stack Web Developer with experience in Javascript and their library ReactJS, i know nodejs with their library express, A little of Databases like mongoDB, and their driver for use in applications of Back-end, Mongoose. I dont have to much experiencies with sql databases. I love tech and I am willing to learn more.",
    photo:
      "https://media-exp1.licdn.com/dms/image/C5603AQEtAaXHeP0J2g/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=7FvInK9g6F2gtxhcJFb63mS2307wxP9U_RacYGYlzA8",
  },
];

export default {
  projects,
  creators,
};
