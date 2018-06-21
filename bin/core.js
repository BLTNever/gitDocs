const query = require("./query");
const docMapper = require("../config/docMapper.json");

const { promisifyTaskRunner, taskRunnerAsync } = require("../utils/taskRunner");

module.exports = {
  start: () =>
    query("start").then(({ name }) => {
      const location = docMapper[name];

      taskRunnerAsync(`docsify serve ${location}docs`);
    }),
  deploy: () =>
    query("deploy").then(({ name }) => {
      const location = docMapper[name];

      promisifyTaskRunner(
        `rm -rf server/public/docs/${location.slice(4, -1)}` // why 4？ 为了删除/3rd/
      ).then(() =>
        promisifyTaskRunner(
          `cp -R ${location}docs server/public/docs/${location.slice(4, -1)}` // why 4？ 为了删除/3rd/
        )
      );
    })
};
