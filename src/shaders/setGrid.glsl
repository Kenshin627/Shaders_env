#ifdef GL_ES
precision mediump float;
#endif

vec3 square(in vec2 _st){
    float x=_st.x;
    float y=_st.y;
    if(y<.1||x>.9){
        return vec3(0.);
    }else{
        return vec3(_st.x,_st.x,_st.x);
    }
}

void rotation(){
    
}

vec3 setGrid(vec2 _st,int col,int row){
    _st*=vec2(row,col);
    
    if(step(1.,mod(_st.y,2.))==1.){
        _st.x+=iTime;
    }else{
        _st.x-=iTime;
    }
    _st=fract(_st);
    return square(_st);
}

void main(){
    vec2 st=gl_FragCoord.xy/iResolution.xy;
    vec3 color=setGrid(st,15,5);
    gl_FragColor=vec4(color,.1);
}