import shader from "../../shader/t1";
export function renderPipeline() {
  const canvas = document.querySelector("canvas");
  const gl = canvas.getContext("webgl");
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, shader.vertex);
  gl.compileShader(vertexShader);
  let vertexStatus = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
  if (!vertexStatus) {
    console.error(gl.getShaderInfoLog(vertexShader));
  }

  const frageShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(frageShader, shader.fragment);
  gl.compileShader(frageShader);

  let fragmentStatus = gl.getShaderParameter(frageShader, gl.COMPILE_STATUS);
  if (!fragmentStatus) {
    console.error(gl.getShaderInfoLog(frageShader));
  }

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, frageShader);
  gl.linkProgram(program);

  gl.useProgram(program);

  const points = new Float32Array([-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5]);

  const bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

  const vPosition = gl.getAttribLocation(program, "position");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, points.length / 2);
}
