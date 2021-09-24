export default {
  vertex: `
        attribute vec2 position;

        uniform float u_Rotation;
        uniform float u_Time;
        uniform float u_Duration;
        uniform float u_Scale;
        uniform vec2 u_Dir;

        varying float vP;
        
        void main() {
            float p = min(1.0, u_Time / u_Duration);
            float rad = u_Rotation + 3.14 * 10.0 * p;
            float scale = u_Scale * p * (2.0 - p);
            vec2 offset = 2.0 * u_Dir * p * p;

            mat3 translateMatrix = mat3(
                1.0, 0.0, 0.0,
                0.0, 1.0, 0.0,
                offset.x, offset.y, 1.0
            );

            mat3 rotateMatrix = mat3(
                cos(rad), sin(rad), 0.0,
                -sin(rad), cos(rad), 0.0,
                0.0, 0.0, 1.0
            );

            mat3 scaleMatrix = mat3(
                scale, 0.0, 0.0,
                0.0, scale, 0.0,
                0.0, 0.0, 1.0
            );

            gl_PointSize = 1.0;
            vec3 pos = translateMatrix * rotateMatrix *scaleMatrix * vec3(position, 1.0);
            gl_Position = vec4(pos, 1.0);
            vP = p;

        }
    `,
  fragment: `
    precision mediump float;
    uniform vec4 u_Color;
    varying float vP;

    void main()
    {
        gl_FragColor.xyz = u_Color.xyz;
        gl_FragColor.a = (1.0 - vP) * u_Color.a;
    }
    `,
};
