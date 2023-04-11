import weather from "../src/images/weather.jpeg";
import JATE from "../src/images/JATE.png";
import Nutriplanner from "../src/images/Nutriplanner.jpg";
import password from "../src/images/password.jpeg";
import luv2H8 from "../src/images/luv2H8.png";
import workDay from "../src/images/workDay.jpeg";

const allProjects = [
  
  {
    id: 0,
    title: "Luv2H8",
    description: "Interactive Full-Stack Application for creating posts/reviews with complaints regarding any place or business.",
    link: "https://luv-2-h8.herokuapp.com/",
    gitHub: "https://github.com/SPloganathan/luv-2-h8",
    src: luv2H8,
  },
  {
    id: 1,
    title: "Work Day Scheduler",
    description: "This Work Day Scheduler created using JavaScript and JQuery. This application allows a user to save events for each hour of the working day (from 9AM to 5PM).",
    link: "https://lenache2022.github.io/work-day-scheduler/",
    gitHub: "https://github.com/LenaChe2022/work-day-scheduler",
    src: workDay,
  },
  {
    id: 2,
    title: "Weather-Dashboard",
    description: "App using API to show current weather and 5-Day forecast.",
    link: "https://lenache2022.github.io/Weather-Dashboard/",
    gitHub: "https://github.com/LenaChe2022/Weather-Dashboard",
    src: weather,
  },
  {
    id: 3,
    title: "Nutriplanner",
    description: "Day task planner with recipe of the day and callorie tracker.",
    link: "https://jordonlo.github.io/Nutri-planner/",
    gitHub: "https://jordonlo.github.io/Nutri-planner/",
    src: Nutriplanner,
  },
  {
    id: 4,
    title: "Password-Generator",
    description: "Application for generating a random password based on criteria user has selected.",
    link: "https://lenache2022.github.io/Password-Generator/",
    gitHub: "https://github.com/LenaChe2022/Password-Generator",
    src: password,
  },
  {
    id: 5,
    title: "TEXT-EDITOR (Progressive Web App)",
    description: " 'Just another text editor' that runs in the browser. This app is a single-page application that meets the Progressive Web Applications (PWA) criteria",
    link: "https://whispering-beach-05497.herokuapp.com/",
    gitHub: "https://github.com/LenaChe2022/TEXT-EDITOR_Progressive_Web_App",
    src: JATE,
  },

];

export default allProjects;