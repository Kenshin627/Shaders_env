#ifdef GL_ES
precision mediump float;
#endif

vec3 circle(in vec2 _st,in float _radius){
    vec2 dist=_st-vec2(.5);
    float res=1.-smoothstep(_radius-(_radius*.01),
    _radius+(_radius*.01),sqrt(dot(dist,dist)*100.));
    return vec3(0.,res,0.);
}

void rotation(vec2 _st){
    
}

vec3 setGrid(vec2 _st,int col,int row){
    _st*=vec2(row,col);
    bool isRow=step(1.,mod(iTime,2.))==1.;
    if(isRow){
        if(step(1.,mod(_st.y,2.))==0.){
            _st.x+=iTime;
        }else{
            _st.x-=iTime;
        }
    }else{
        if(step(1.,mod(_st.x,2.))==0.){
            _st.y+=iTime;
        }else{
            _st.y-=iTime;
        }
    }
    _st=fract(_st);
    return circle(_st,.5);
}

void main(){
    vec2 st=gl_FragCoord.xy/iResolution.xy;
    vec3 color=setGrid(st,50,50);
    gl_FragColor=vec4(color,.01);
}