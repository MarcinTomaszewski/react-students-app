import HomePage from "../../views/Home/HomePage";
import ProjectsPage from "../../views/Projects/ProjectsPage";
import SkillsPage from "../../views/Skills/SkillsPage";
import StudentsPage from "../../views/Students/StudentsPage";
import ErrorPage from "../../views/Error/ErrorPage";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/projects",
    component: <ProjectsPage />,
  },
  {
    path: "/skills",
    component: <SkillsPage />,
  },
  {
    path: "/students",
    component: <StudentsPage />,
  },
  {
    path: "/error",
    component: <ErrorPage />,
  },
];

export default routes;
