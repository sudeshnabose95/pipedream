import clickup from "../../clickup.app.mjs";

export default {
  key: "clickup-get-spaces",
  name: "Get Spaces",
  description: "Get a list of spaces in a workplace. See the docs [here](https://clickup.com/api) in **Spaces  / Get Spaces** section.",
  version: "0.0.1",
  type: "action",
  props: {
    clickup,
    workspaceId: {
      propDefinition: [
        clickup,
        "workspaces",
      ],
    },
    archived: {
      type: "boolean",
      label: "Archived",
      description: "Filter for archived spaces",
      default: false,
      optional: true,
    },
  },
  async run({ $ }) {
    const {
      workspaceId,
      archived,
    } = this;

    return this.clickup.getSpaces({
      $,
      workspaceId,
      params: {
        archived,
      },
    });
  },
};
