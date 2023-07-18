const express = require("express");
const app = express();
const { PrismaClient } = require ("@prisma/client")

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
});

app.post("/", async (req, res) => {
    const newUsers = await prisma.user.create({ data: req.body});
    res.json(newUsers);
});

app.put("/:id", async (req, res) => {
    const id = req.params.id;
    const newAge = req.body.age;
    const newName = req.body.name;
    const updateUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name: newName, age: newAge },
    });
    res.json(updateUser);
  });

app.delete("/:id", async (req, res) => {

    const id = parseInt(req.params.id);

    const jp = await prisma.user.findFirst({
            where: {
                id: id,
            }
        })

    if(!jp){
        return res.json({
            error: {
                message: "User not Found"
            }
        })
    }

    const updateUser = await prisma.user.delete({
        where: {
            id: id,
        }
    });

    res.json({
        success: {
            message: "user deleted successfully"
        }
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001')
});