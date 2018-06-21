const parties = ["demo1", "demo2", "demo3"];

module.exports = {
  start: {
    type: "list",
    name: "name",
    message: "你想启动哪一个文档服务器？",
    choices: parties
  },
  deploy: {
    type: "list",
    name: "name",
    message: "你想发布哪一个文档（成功后需要在jenkins上手动发布）？",
    choices: parties
  }
};
