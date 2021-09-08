#ifdef GL_ES
precision mediump float;
#endif

float random(float x){
    return fract(sin(x) * 10.0);
}

void main(){
    vec2 st=gl_FragCoord.xy/iResolution.xy;
    st.y -= 0.5;
    vec3 color=vec3(0.,0.,0.);
    st*=vec2(10,2);
    // st  = fract(st);
    if(st.y<sin(st.x)+.005&&st.y>sin(st.x)-.005){
        //0.3765, 1.0, 0.8667
        color=vec3(smoothstep(0.,1.,st.y),smoothstep(0.,1.,st.x),random(st.x));
    }
    gl_FragColor=vec4(color,1.);
}