import { disconnect } from "process";

const {PrismaClient} = require("@prisma/client");

const db = new PrismaClient();

async function main () {
    try{
        await db.category.createMany({
            data:[
                {name: "famous People"},
                {name: "famous People"},
                {name: "famous People"},
                {name: "famous People"},
                {name: "famous People"},
                {name: "famous People"},
                {name: "famous People"},
            ]
        })

    }catch (error){
        console.error("Error seeding default categories" , error)

    } finally {
        await db.$disconnect();
    }
    
    
}