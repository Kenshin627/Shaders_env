#ifdef GL_ES
precision mediump float;
#endif

float rand(float x){
    return fract(sin(x)*1.);
}

void main(){
    vec2 st=gl_FragCoord.xy/iResolution.xy;
    float i=floor(st.x);
    float f=fract(st.x);
    float y=rand(i);
    gl_FragColor=vec4(y,y,y,1.);
}