export default {
  vertex: `
    attribute vec2 position;
    varying vec3 color;
    void main() {
        gl_PointSize = 10.0;
        color = vec3(0.5 + position * 0.5,0.0);
        gl_Position = vec4(position,1.0,1.0);
    }
  `,
  fragment: `
    precision mediump float;
    varying vec3 color;

    void main(){
        gl_FragColor = vec4(color, 1.0);
    }
  `,
};
