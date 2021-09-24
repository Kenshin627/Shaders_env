import GLCreator from "../base/glCreator";
import shader from "../../shader/particle";
let ctx = null;
let program = null;
let count = 0;
let triangles = [];
const MAX_PARTICLE_PER_FRAME = 5;

export function affineTransform() {
  const position = [-1, -1, 0, 1, 1, -1];
  const builder = new GLCreator("canvas", shader);
  ctx = builder.getCtx();
  program = builder.getProgram();
  const bufferId = ctx.createBuffer();
  ctx.bindBuffer(ctx.ARRAY_BUFFER, bufferId);
  ctx.bufferData(ctx.ARRAY_BUFFER, position, ctx.STATIC_DRAW);

  const vPosition = ctx.getAttribLocation(program, "position");
  ctx.vertexAttribPointer(vPosition, 2, ctx.FLOAT, false, 0, 0);
  ctx.enableVertexAttribArray(vPosition);
  count = position.length / 2;

  //
  update();
}

function randomTriangles() {
  const u_Color = [Math.random(), Math.random(), Math.random(), 1.0];
  const u_Rotation = Math.random() * Math.PI;
  const u_Scale = Math.random() * 0.05 + 0.03;
  const u_Time = 0;
  const u_Duration = 3.0;
  const rad = Math.random() * Math.PI * 2;
  const u_Dir = [Math.cos(rad), Math.sin(rad)];
  const startTime = performance.now();
  return {
    u_Color,
    u_Rotation,
    u_Scale,
    u_Time,
    u_Duration,
    u_Dir,
    startTime,
  };
}

function setUniforms(
  gl,
  program,
  { u_Color, u_Rotation, u_Scale, u_Time, u_Duration, u_Dir }
) {
  let loc = gl.getUniformLocation(program, "u_Color");
  gl.uniform4fv(loc, u_Color);
  loc = gl.getUniformLocation(program, "u_Rotation");
  gl.uniform1f(loc, u_Rotation);
  loc = gl.getUniformLocation(program, "u_Scale");
  gl.uniform1f(loc, u_Scale);
  loc = gl.getUniformLocation(program, "u_Time");
  gl.uniform1f(loc, u_Time);
  loc = gl.getUniformLocation(program, "u_Duration");
  gl.uniform1f(loc, u_Duration);
  loc = gl.getUniformLocation(program, "u_Dir");
  gl.uniform2fv(loc, u_Dir);
}

/**
 *
 * @param {WebGLRenderingContext} ctx
 * @param {WebGLProgram} program
 * @param {Object[]} triangles
 * @param {Number} cps
 */
function update() {
  for (let i = 0; i < MAX_PARTICLE_PER_FRAME * Math.random(); i++) {
    triangles.push(randomTriangles());
  }

  ctx.clear(ctx.COLOR_BUFFER_BIT);
  triangles.forEach((triangle) => {
    triangle.u_Time = (performance.now() - triangle.startTime) / 1000;
    setUniforms(ctx, program, triangle);
    ctx.drawArrays(ctx.TRIANGLES, 0, count);
  });

  triangles = triangles.filter((t) => {
    return t.u_Time <= t.u_Duration;
  });
  requestAnimationFrame(update);
}
