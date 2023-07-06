import type { APIRoute } from "astro";
import { prisma } from "../db";

export const get: APIRoute = async function get({ params, request }) {
  const user = await prisma.user.findFirst();

  return {
    body: JSON.stringify(user),
  };
};
