import { rest } from "msw";

const apiUrl = process.env.REACT_APP_URL;

const handlers = [
  rest.get(
    `${apiUrl}/projects/loadAllProjects`,
    async (request, response, context) => {
      return response(context.status(200));
    }
  ),
  rest.post(`${apiUrl}/contacts/add`, async (request, response, context) => {
    return response.once(context.status(201));
  }),
];

export default handlers;
