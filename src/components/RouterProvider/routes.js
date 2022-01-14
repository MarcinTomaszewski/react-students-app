import HomePage from "../../views/Home/HomePage";
import ProjectsPage from "../../views/Projects/ProjectsPage";
import SkillsPage from "../../views/Skills/SkillsPage";
import StudentsPage from "../../views/Students/StudentsPage";
import ErrorPage from "../../views/Error/ErrorPage";

const routes = [
  {
    path: "/",
    component: <HomePage />,
    exact: true,
  },
  {
    path: "/projects",
    component: <ProjectsPage />,
    exact: true,
  },
  {
    path: "/skills",
    component: <SkillsPage />,
    exact: true,
  },
  {
    path: "/students",
    component: <StudentsPage />,
    exact: true,
  },
  {
    path: "/error",
    component: <ErrorPage />,
    exact: true,
  },
];

export default routes;
