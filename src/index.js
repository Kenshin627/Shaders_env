import React, { Component } from "react";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";

const shaders = Shaders.create({
  helloGL: {
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        void main() {
            gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0);
        }
    `,
  },
});
