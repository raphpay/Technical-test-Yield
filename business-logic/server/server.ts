import { createServer, Factory, Model } from "miragejs";

export function makeServer({ environment = "dev" } = {}) {
  let server = createServer({
    environment,

    models: {
      photo: Model,
    },

    factories: {
      photo: Factory.extend({
        title(i) {
          return `Photo ${i + 1}`;
        },
        url() {
          return "https://picsum.dev/300/200";
        },
        createdAt() {
          return new Date().toISOString();
        },
      }),
    },

    seeds(server) {
      server.createList("photo", 6);
    },

    routes() {
      this.namespace = "api";

      // GET /api/photos
      this.get("/photos", (schema) => {
        return schema.all("photo");
      });

      // GET /api/photos/:id
      this.get("/photos/:id", (schema, request) => {
        return schema.find("photo", request.params.id);
      });

      // POST /api/photos/
      this.post("/photos/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        if (attrs.localUri) {
          attrs.url = attrs.localUri;
        }

        return schema.create("photo", {
          ...attrs,
          url: attrs.localUri ?? attrs.url,
          createdAt: new Date().toISOString(),
        });
      });

      // DELETE /api/photos/:id
      this.del("/photos/:id", (schema, request) => {
        const id = request.params.id;
        const found = schema.find("photo", id);
        if (!found) {
          return new Error();
        }

        found.destroy();

        return { success: true, message: "Photo correctly deleted" };
      });
    },
  });

  return server;
}
