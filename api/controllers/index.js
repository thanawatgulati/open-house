export default async function index(fastify) {
  fastify.post("/link-richmenu", async (req, res) => {
    res.send({ message: "Hello World" });
  });
}