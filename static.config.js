// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
export default {
  siteRoot: "https://robinvdb.me",
  getRoutes() {
    return [
      {
        path: "/",
        component: "src/Containers/home"
      },
      {
        path: "/contact",
        component: "src/Containers/contact"
      },
      {
        path: "/projects",
        component: "src/Containers/projects"
      },
      {
        path: "/skills",
        component: "src/Containers/skills"
      }
    ];
  }
};
