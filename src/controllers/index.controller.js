import Home from "./home.controller";
import Projects from "./projects.controller";
import About from "./about.controller";
import Contact from "./contact.controller";
import NotFound from "./404.controller";

const Pages = {
   home: Home,
   projects: Projects,
   about: About,
   contact: Contact,
   notFound: NotFound
}

export { Pages };