const task = require("./core");

const taskName = process.argv[2];

// 目前只有两种命令，并且暂时不会扩展
const cmdName = taskName.includes("start") ? "start" : "deploy";

task[cmdName]();
