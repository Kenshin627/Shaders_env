export default class GLCreator {
  constructor(el, shaders) {
    this.container = document.querySelector(el);
    if (!this.container) {
      throw new Error("container not exists!");
    }
    /**@type { WebGLRenderingContext } */
    const gl = (this._gl = this.container.getContext("webgl"));

    const vertex = this._compileShader(shaders.vertex, gl.VERTEX_SHADER);
    const fragment = this._compileShader(shaders.fragment, gl.FRAGMENT_SHADER);
    this._linkProgram({
      vertex,
      fragment,
    });
  }

  /**
   * 获取webgl上下文
   * @returns {WebGLRenderingContext}
   */
  getCtx() {
    return this._gl;
  }

  getProgram() {
    return this._program;
  }

  /**
   * 编译shader
   * @param {String} source
   * @param {Number} type
   */
  _compileShader(source, type) {
    const shader = this._gl.createShader(type);
    this._gl.shaderSource(shader, source);
    this._gl.compileShader(shader);
    const compileShaderStatus = this._gl.getShaderParameter(
      shader,
      this._gl.COMPILE_STATUS
    );
    if (!compileShaderStatus) {
      console.error(this._gl.getShaderInfoLog(shader));
    }
    return shader;
  }

  /**
   * 链接程序
   * @param {Object} shaders
   */
  _linkProgram(shaders) {
    const program = (this._program = this._gl.createProgram());
    this._gl.attachShader(program, shaders.vertex);
    this._gl.attachShader(program, shaders.fragment);
    this._gl.linkProgram(program);
    this._gl.useProgram(program);
  }
}
