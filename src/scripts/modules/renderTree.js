export default function renderTree() {
    
}

function transformCoordnate(ctx) {
  ctx.translate(0, ctx.height);
  ctx.scale(1.0, -1.0);
  ctx.lineCap = "round";
}
