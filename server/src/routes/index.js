import Router from "koa-router";

import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.all("/", indexCtrl);

router.all("/sword-client", (ctx, next) => {
  ctx.redirect("/static/sword-client/dist/index.html");
});

// health check
router.all("/monitor/check", (ctx, next) => (ctx.body = "ok"));
export default router;
