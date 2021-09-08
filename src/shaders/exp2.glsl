#ifdef GL_ES
precision mediump float;
#endif

void main(){
    vec2 st = gl_FragCoord.xy/iResolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = st*2. - 1.;

    float r = length(pos);
    float a = atan(pos.y,pos.x);

    float f = cos(a*3.);
    // f = abs(cos(a));
    // f = abs(cos(a*2.5))*.5+.3;
    // f = abs(cos(a*12.)*sin(a*3.))*.8+.1;
    // f = smoothstep(-.5,1., cos(a*10.))*0.2+0.5;
    // f = st.x * st.x;
    // color = vec3(smoothstep(f, f + .01, r) );
    // float fx = pos.x - pos.x * pos.x;
    color = vec3(smoothstep(f, f + .01, r) );

    gl_FragColor = vec4(color, 1.0);
}