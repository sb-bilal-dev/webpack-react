import { ProjectModel } from "../containers/Task/reducer";
import genId from "./genId";

if (!localStorage.getItem("projects")) {
  const projects: ProjectModel[] = [
    {
      id: genId(),
      name: "github"
    },
    {
      id: genId(),
      name: "google"
    }
  ];

  localStorage.setItem("projects", JSON.stringify(projects));
}
