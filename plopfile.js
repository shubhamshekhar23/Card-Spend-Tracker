const path = require("path");

module.exports = function (plop) {
  const currentWorkingDirectory = process.cwd();
  const name = path.basename(currentWorkingDirectory);

  plop.setGenerator("c", {
    description: "Create a new React TypeScript component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name in kebab-case:",
      },
    ],
    actions: [
      {
        type: "add",
        path:
          currentWorkingDirectory +
          "/{{kebabCase name}}/{{kebabCase name}}.module.scss",
        templateFile: "plop-templates/component.module.scss.hbs",
      },
      {
        type: "add",
        path:
          currentWorkingDirectory +
          "/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path:
          currentWorkingDirectory +
          "/{{kebabCase name}}/{{kebabCase name}}.spec.tsx",
        templateFile: "plop-templates/component.spec.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("t", {
    description:
      "Create a new component test file based on current folder name",
    prompts: [],
    actions: [
      {
        type: "add",
        path: currentWorkingDirectory + `/${name}.spec.tsx`,
        templateFile: "plop-templates/component.spec.tsx.hbs",
        data: { name },
      },
    ],
  });
};
