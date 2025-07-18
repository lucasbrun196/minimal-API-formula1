import fastify from "fastify";
import { TeamModule } from "./app/teams/teams_module";
import cors from "@fastify/cors"
import "reflect-metadata"
import { DriversModule } from "./app/drivers/drivers_module";
import { UsersModule } from "./app/users/user_module";
import { Locals } from "../locals";
import { PublicationModule } from "./app/publication/publications_module";


declare module 'fastify' {
  interface FastifyReply {
    locals: Locals
  }
}

export function createApp() {
  const app = fastify({ logger: true });
  app.register(cors, {
    origin: "*",
    methods: [
      "GET",
      "POST",
      "DELETE",
      "UPDATE"
    ]
  });
  app.register(new TeamModule().register);
  app.register(new DriversModule().register);
  app.register(new UsersModule().register);
  app.register(new PublicationModule().register);

  return app;
}