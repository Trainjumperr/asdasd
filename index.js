const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello! Welcome back!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()


client.on('ready', () => {
 client.user.setActivity(`V1`, { type: 'By Trainjumperr'})
})

client.login(process.env.token);
