#ifdef GL_ES
precision mediump float;
#endif

void main(){
    vec2 st=gl_FragCoord.xy/iResolution.xy;
    float y=mod(st.x,2.);
    y=step(1.,y);
    gl_FragColor=vec4(y,y,y,1.);
}