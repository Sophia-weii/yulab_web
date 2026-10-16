/* Original, synthetic hero illustrations. Not sampled from a study or reference image.
   Manhattan points are precomputed OLS association tests on simulated diploid
   genotypes and a simulated quantitative trait, with a left-side −log10(P) axis. */
window.startHeroMotion = function (root, language) {
  const canvas = root.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const dotCanvas = document.createElement('canvas');
  const dotContext = dotCanvas.getContext('2d');
  let cachedPoints = null;
  const denseCanvas = document.createElement('canvas');
  const denseContext = denseCanvas.getContext('2d');
  const zh = language === 'zh';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const buttons = [...root.querySelectorAll('[data-stage]')];
  const pause = root.querySelector('[data-motion-toggle]');
  const title = root.querySelector('[data-motion-title]');
  const subtitle = root.querySelector('[data-motion-subtitle]');
  const titles = zh ? ['解读遗传变异','跨分子层级建模细胞状态','理解疾病'] : ['Interpreting genetic variation','Modeling cell states across molecular layers','Understanding diseases'];
  const descriptions = zh ? ['序列建模 · 功能解读','精细调控 · 多组学整合 · 细胞功能','早期预警 · 虚拟干预'] : ['SEQUENCE MODELING · FUNCTIONAL INTERPRETATION','FINE-SCALE REGULATION · MULTIOMICS · CELL FUNCTION','EARLY WARNING · VIRTUAL INTERVENTION'];
  const palette = [[82,151,255],[80,216,239],[155,157,255],[206,232,255],[67,132,242],[92,235,206],[92,182,255],[168,200,255],[78,171,219],[140,210,247]];
  const gwas = window.HERO_GWAS;
  const variantCount = gwas.points.length / 3;
  const count = Math.min(variantCount, innerWidth < 600 ? 4000 : 7200);
  const selectedVariants = new Set(Array.from({length:count},(_,i)=>Math.floor(i*variantCount/count)));
  root.dataset.variantCount = String(variantCount);
  const notes = root.querySelector('.phenotype-notes');
  let seed = 240926;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const gaussian = () => Math.sqrt(-2 * Math.log(Math.max(random(), 1e-8))) * Math.cos(2 * Math.PI * random());
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const smooth = t => t * t * (3 - 2 * t);
  const shapes = [[], [], []];
  const chromosomeLengths = gwas.chromosomeLengths;
  const genomeLength = chromosomeLengths.reduce((a,b)=>a+b,0);
  let cursor=0;
  const chromosomes=chromosomeLengths.map((length,index)=>{
    const c={index,offset:cursor,start:cursor/genomeLength,width:length/genomeLength};
    cursor+=length;return c;
  });
  const yMaximum=gwas.yMax;
  const chromosomeColors=[[94,154,247],[151,220,255]];
  function variantPoint(index) {
    const [chromosome,position,score]=gwas.points.slice(index*3,index*3+3);
    const chr=chromosomes[chromosome-1];
    return {x:.105+(chr.offset+position)/genomeLength*.86,y:.835-score/yMaximum*.72,
      color:chromosomeColors[chr.index%2],r:score>7.3?.82:.58,alpha:score>7.3?.94:.7,z:0};
  }
  const denseBuckets=chromosomeColors.flatMap(color=>[false,true].map(significant=>({
    color:`rgba(${color.join(',')},${significant?.85:.60})`,radius:significant?.80:.53,points:[]
  })));
  for(let i=0;i<variantCount;i++) {
    if(selectedVariants.has(i))continue;
    const j=i*3,chromosome=gwas.points[j],position=gwas.points[j+1],score=gwas.points[j+2];
    const chr=chromosomes[chromosome-1];
    denseBuckets[(chr.index%2)*2+(score>7.3?1:0)].points.push(.105+(chr.offset+position)/genomeLength*.86,.835-score/yMaximum*.72);
  }
  function rasterizeDenseVariants() {
    denseContext.clearRect(0,0,width,height);
    const dotScale=clamp(width/800,.72,1.1);
    for(const bucket of denseBuckets) {
      denseContext.fillStyle=bucket.color;denseContext.beginPath();
      const r=bucket.radius*dotScale;
      for(let i=0;i<bucket.points.length;i+=2) {
        const x=bucket.points[i]*width,y=bucket.points[i+1]*height;
        denseContext.moveTo(x+r,y);denseContext.arc(x,y,r,0,Math.PI*2);
      }
      denseContext.fill();
    }
  }
  // UMAP fitted to synthetic high-dimensional profiles, projected isotropically.
  const umap=window.HERO_UMAP;
  const statePalette=[0,6,7,0,4,1,5,1,9,2,7,2,8,6,8,3,9];
  root.dataset.umapCells=String(umap.cells);
  // A continuous adult outline: head, neck, shoulders, arms, pelvis and legs.
  // Coordinates are isotropic and independent of the canvas aspect ratio.
  const bodyPath = new Path2D(`M200 18 C177 18 163 35 163 62 C163 87 173 108 185 114
    L184 132 C177 143 151 145 138 151 C119 157 111 175 108 200
    L99 259 C96 278 88 298 82 320 L67 379 L60 398
    C56 407 55 417 57 425 L60 443 Q63 448 66 442 L66 423
    L70 451 Q73 456 76 449 L78 424 L81 447 Q85 451 88 444
    L89 420 L95 431 Q100 434 102 429 L97 410 L96 396
    L115 346 C123 326 126 304 129 285 L139 227
    C141 248 146 273 145 292 L138 344 C133 363 133 383 137 403
    C136 431 138 457 142 481 L148 524 C141 549 140 570 143 593
    L151 702 L149 724 L135 744 Q129 755 141 758 L169 758
    Q177 758 178 750 L176 726 L181 666 L190 583
    C193 562 191 542 188 524 L194 442 Q196 429 200 428
    Q204 429 206 442 L212 524 C209 542 207 562 210 583
    L219 666 L224 726 L222 750 Q223 758 231 758 L259 758
    Q271 755 265 744 L251 724 L249 702 L257 593
    C260 570 259 549 252 524 L258 481 C262 457 264 431 263 403
    C267 383 267 363 262 344 L255 292 C254 273 259 248 261 227
    L271 285 C274 304 277 326 285 346 L304 396 L303 410
    L298 429 Q300 434 305 431 L311 420 L312 444 Q315 451 319 447
    L322 424 L324 449 Q327 456 330 451 L334 423 L334 442
    Q337 448 340 443 L343 425 C345 417 344 407 340 398
    L333 379 L318 320 C312 298 304 278 301 259 L292 200
    C289 175 281 157 262 151 C249 145 223 143 216 132
    L215 114 C227 108 237 87 237 62 C237 35 223 18 200 18 Z`);
  const lungs = new Path2D(`M188 173 C176 166 164 181 157 201 C150 222 149 249 153 272
    C155 283 168 278 187 271 C192 268 191 249 192 235 L192 184 Q192 177 188 173 Z
    M212 173 C224 166 236 181 243 201 C250 222 251 249 247 272
    C245 283 232 278 213 271 C208 268 209 249 208 235 L208 184 Q208 177 212 173 Z`);
  for (let i = 0; i < count; i++) {
    shapes[0].push(variantPoint(Math.floor(i*variantCount/count)));
    const cell=Math.floor(i*umap.cells/count)*4;
    const ux=umap.points[cell],uy=umap.points[cell+1],stateId=umap.points[cell+2];
    shapes[1].push({x:ux+.5,y:uy+.5,umapX:ux,umapY:uy,stateId,
      color:palette[statePalette[stateId]],r:.78+random()*.32,alpha:.68+random()*.30,z:0});
    let hx, hy;
    do { hx=53+random()*294; hy=18+random()*740; } while (!ctx.isPointInPath(bodyPath,hx,hy));
    const lung = ctx.isPointInPath(lungs,hx,hy);
    shapes[2].push({x:.5+(hx-200)/800,humanX:hx-200,humanY:hy,y:.06+hy/800*.9,color:lung?[133,244,249]:palette[i%3===0?3:6],r:lung?.85+random()*.4:.48+random()*.55,alpha:lung?.9:.32+random()*.48,z:0});
  }
  // Spatially ordered correspondence keeps the three views legible in motion.
  shapes.forEach(shape => shape.sort((a,b) => a.x-b.x || a.y-b.y));
  let points=shapes[0].map(p=>({...p})), origin=points;
  let stage=0, oldStage=0, progress=1, hold=0, elapsed=0;
  let playing=!reduced.matches, manualTransition=false, transitioning=false;
  let visible=true, disposed=false, frame=0, last=0, width=1, height=1;
  let bodyScale=1, bodyLeft=0, bodyTop=0;
  let umapScale=1,umapLeft=0,umapTop=0,umapWidth=1,umapHeight=1;
  const duration=2300, dwell=5100;
  function labels() {
    title.textContent=titles[stage]; subtitle.textContent=descriptions[stage];
    root.dataset.currentStage=String(stage);
    notes.setAttribute('aria-hidden',String(stage!==2));
    root.dataset.motionState=playing?'playing':transitioning&&manualTransition?'transitioning':'paused';
    buttons.forEach((b,i)=>{b.classList.toggle('active',i===stage);b.setAttribute('aria-pressed',String(i===stage));});
    pause.textContent=playing?'Ⅱ':'▶';
    pause.setAttribute('aria-label',playing?(zh?'暂停动画':'Pause animation'):(zh?'播放动画':'Play animation'));
    pause.setAttribute('aria-pressed',String(!playing));
  }
  function segment(x1,y1,x2,y2,color='rgba(161,198,240,.28)',lineWidth=.65) {
    ctx.strokeStyle=color;ctx.lineWidth=lineWidth;ctx.beginPath();ctx.moveTo(x1*width,y1*height);ctx.lineTo(x2*width,y2*height);ctx.stroke();
  }
  function bodyLayer(opacity) {
    if(opacity<.005)return;
    ctx.save();ctx.globalAlpha=opacity;ctx.translate(bodyLeft,bodyTop);ctx.scale(bodyScale,bodyScale);
    const fill=ctx.createLinearGradient(130,0,260,760);
    fill.addColorStop(0,'rgba(128,190,255,.12)');fill.addColorStop(.5,'rgba(79,156,225,.085)');fill.addColorStop(1,'rgba(70,203,227,.08)');
    ctx.fillStyle=fill;ctx.fill(bodyPath);
    // The silhouette is formed by light and particles, without a contour frame.
    ctx.fillStyle='rgba(101,231,245,.13)';ctx.fill(lungs);
    ctx.strokeStyle='rgba(148,244,255,.40)';ctx.lineWidth=.6/bodyScale;
    ctx.beginPath();ctx.moveTo(200,139);ctx.lineTo(200,188);ctx.lineTo(181,212);
    ctx.moveTo(200,188);ctx.lineTo(219,212);ctx.stroke();
    ctx.strokeStyle='rgba(117,225,244,.28)';ctx.lineWidth=.45/bodyScale;
    ctx.beginPath();ctx.moveTo(181,212);ctx.lineTo(169,237);ctx.moveTo(181,212);ctx.lineTo(182,250);
    ctx.moveTo(219,212);ctx.lineTo(231,237);ctx.moveTo(219,212);ctx.lineTo(218,250);ctx.stroke();
    ctx.restore();
  }
  function labelsForStage(s, opacity) {
    if(opacity<.005)return;
    ctx.save();ctx.globalAlpha=opacity;
    const fontSize=width<420?7.5:clamp(width*.012,9,13);
    ctx.font=`${fontSize}px ui-monospace, monospace`;ctx.fillStyle='#8fadce';
    if(s===0) {
      segment(.1,.84,.969,.84);segment(.1,.84,.1,.09);
      for(let value=0;value<=yMaximum;value+=10) {
        const y=.835-value/yMaximum*.72;
        ctx.textAlign='right';ctx.fillText(String(value),.082*width,y*height+3);
        if(value)segment(.101,y,.969,y,'rgba(160,200,241,.065)');
      }
      ctx.save();ctx.translate(.029*width,.46*height);ctx.rotate(-Math.PI/2);ctx.textAlign='center';ctx.fillText('−log₁₀(P)',0,0);ctx.restore();
      ctx.textAlign='center';ctx.fillText(zh?'染色体':'Chromosome',.537*width,.949*height);
      ctx.setLineDash([3,5]);segment(.1,.835-7.3/yMaximum*.72,.969,.835-7.3/yMaximum*.72,'rgba(185,218,254,.25)');ctx.setLineDash([]);
    } else if(s===1) {
      const left=Math.max(25,umapLeft-26),bottom=Math.min(height-24,umapTop+umapHeight+23);
      const arm=Math.min(42,Math.min(width,height)*.10);
      segment(left/width,bottom/height,(left+arm)/width,bottom/height,'rgba(153,206,250,.4)');
      segment(left/width,bottom/height,left/width,(bottom-arm)/height,'rgba(153,206,250,.4)');
      ctx.textAlign='left';ctx.fillText('UMAP 1',left+5,bottom+16);
      ctx.save();ctx.translate(left-10,bottom-arm/2);ctx.rotate(-Math.PI/2);ctx.textAlign='center';ctx.fillText('UMAP 2',0,0);ctx.restore();
    }
    ctx.restore();
  }
  function draw() {
    ctx.clearRect(0,0,width,height);
    const glow=ctx.createRadialGradient(width*.54,height*.45,0,width*.54,height*.45,width*.48);
    glow.addColorStop(0,'rgba(54,149,235,.085)');glow.addColorStop(1,'rgba(41,139,224,0)');
    ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
    const blend=transitioning?smooth(progress):1;
    const humanOpacity=stage===2?blend:oldStage===2&&transitioning?1-blend:0;
    root.style.setProperty('--phenotype-opacity',String(humanOpacity));
    const gwasOpacity=stage===0?blend:oldStage===0&&transitioning?1-blend:0;
    if(gwasOpacity>0){ctx.save();ctx.globalAlpha=gwasOpacity;ctx.drawImage(denseCanvas,0,0,width,height);ctx.restore();}
    bodyLayer(humanOpacity);
    if(transitioning){labelsForStage(oldStage,1-blend);labelsForStage(stage,blend);}else labelsForStage(stage,1);
    // Rasterize a settled point field once; redraw only when positions change.
    if(cachedPoints!==points) {
      dotContext.clearRect(0,0,width,height);
      const dotScale=clamp(width/650,.65,1.15),buckets=new Map();
      for(const p of points) {
        const color=p.color.map(v=>Math.round(v/3)*3).join(',');
        const alpha=Math.round(p.alpha*8)/8,size=Math.round(p.r*dotScale*4)/4;
        const key=`${color}|${alpha}|${size}`;
        if(!buckets.has(key))buckets.set(key,{color,alpha,size,points:[]});
        buckets.get(key).points.push(p);
      }
      for(const bucket of buckets.values()) {
        dotContext.fillStyle=`rgba(${bucket.color},${bucket.alpha})`;dotContext.beginPath();
        for(const p of bucket.points){const x=p.x*width,y=p.y*height;dotContext.moveTo(x+bucket.size,y);dotContext.arc(x,y,bucket.size,0,Math.PI*2);}
        dotContext.fill();
      }
      cachedPoints=points;
    }
    ctx.drawImage(dotCanvas,0,0,width,height);
    if(stage===1&&!transitioning) {
      // A restrained glint within each state; coordinates stay fixed.
      ctx.save();ctx.globalCompositeOperation='screen';
      for(let i=0;i<shapes[1].length;i+=1357) {
        const p=shapes[1][i],r=1.1+Math.sin(elapsed*.0007+i)*.25;
        ctx.fillStyle='rgba(194,237,255,.55)';ctx.beginPath();ctx.arc(p.x*width,p.y*height,r,0,Math.PI*2);ctx.fill();
      }
      ctx.restore();
    }
  }

  function schedule(){if(!frame&&!disposed&&visible&&!document.hidden&&(playing||(transitioning&&manualTransition)))frame=requestAnimationFrame(tick);}
  function tick(now) {
    frame=0;const dt=last?Math.min(now-last,60):0;last=now;elapsed+=dt;
    if(transitioning) {
      progress=Math.min(1,progress+dt/duration);
      const target=shapes[stage];
      points=target.map((p,i)=>{
        const a=origin[i],delay=(i%31)/31*.12;
        const local=clamp((progress-delay)/(1-.12),0,1),mix=smooth(local);
        const arc=Math.sin(local*Math.PI)*Math.sin(i*.37)*.025;
        return {x:a.x+(p.x-a.x)*mix+arc,y:a.y+(p.y-a.y)*mix-arc*.55,r:a.r+(p.r-a.r)*mix,alpha:a.alpha+(p.alpha-a.alpha)*mix,color:a.color.map((v,c)=>v+(p.color[c]-v)*mix)};
      });
      if(progress===1){transitioning=false;manualTransition=false;hold=0;points=target.map(p=>({...p}));labels();}
    } else if(playing) {hold+=dt;if(hold>=dwell)transitionTo((stage+1)%3);}
    root.style.setProperty('--stage-progress',`${transitioning?0:Math.min(1,hold/dwell)*100}%`);
    draw();schedule();
  }
  function transitionTo(next) {
    oldStage=stage;stage=next;origin=points.map(p=>({...p,color:[...p.color]}));progress=0;hold=0;
    transitioning=!reduced.matches;
    if(!transitioning){points=shapes[stage].map(p=>({...p}));progress=1;manualTransition=false;}
    labels();draw();schedule();
  }
  function resize() {
    const rect=canvas.getBoundingClientRect();width=Math.max(1,rect.width);height=Math.max(1,rect.height);
    // One scale for both UMAP axes: a wide viewport must never flatten clusters.
    umapScale=Math.min(width*.80/umap.bounds[0],height*.75/umap.bounds[1]);
    umapWidth=umap.bounds[0]*umapScale;umapHeight=umap.bounds[1]*umapScale;
    const centerX=width*.53,centerY=height*.51;
    umapLeft=centerX-umapWidth/2;umapTop=centerY-umapHeight/2;
    shapes[1].forEach(p=>{p.x=(centerX+p.umapX*umapScale)/width;p.y=(centerY+p.umapY*umapScale)/height;});
    // Leave one clear column for the four phenotype themes.
    const bodyCenter=width<420?.24:.34;
    bodyScale=height*.82/758;bodyLeft=width*bodyCenter-200*bodyScale;bodyTop=height*.10;
    shapes[2].forEach(p=>{p.x=(bodyLeft+p.humanX*bodyScale+200*bodyScale)/width;p.y=(bodyTop+p.humanY*bodyScale)/height;});
    if(!transitioning)points=shapes[stage].map(p=>({...p}));
    const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    dotCanvas.width=canvas.width;dotCanvas.height=canvas.height;dotContext.setTransform(dpr,0,0,dpr,0,0);cachedPoints=null;
    denseCanvas.width=canvas.width;denseCanvas.height=canvas.height;denseContext.setTransform(dpr,0,0,dpr,0,0);rasterizeDenseVariants();draw();
  }
  const handlers=buttons.map((button,i)=>{const handler=()=>{
    playing=false;last=0;
    if(stage===i&&!transitioning){manualTransition=false;cancelAnimationFrame(frame);frame=0;labels();draw();}
    else {manualTransition=true;transitionTo(i);}
  };button.addEventListener('click',handler);return handler;});
  const toggle=()=>{playing=!playing;manualTransition=false;last=0;if(!playing){cancelAnimationFrame(frame);frame=0;}labels();schedule();};
  pause.addEventListener('click',toggle);
  const visibility=()=>{last=0;if(document.hidden){cancelAnimationFrame(frame);frame=0;}else schedule();};
  document.addEventListener('visibilitychange',visibility);
  const motionChange=()=>{playing=!reduced.matches;if(reduced.matches){transitioning=false;manualTransition=false;points=shapes[stage].map(p=>({...p}));cancelAnimationFrame(frame);frame=0;}labels();draw();schedule();};
  reduced.addEventListener('change',motionChange);
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;last=0;if(!visible){cancelAnimationFrame(frame);frame=0;}else schedule();});observer.observe(root);
  const resizer=new ResizeObserver(resize);resizer.observe(canvas);
  labels();resize();schedule();
  return ()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();resizer.disconnect();document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',motionChange);pause.removeEventListener('click',toggle);buttons.forEach((button,i)=>button.removeEventListener('click',handlers[i]));};
};
