export default async (ctx, next) => {
  const title = "文档";

  await ctx.render("index", {
    title
  });
};
