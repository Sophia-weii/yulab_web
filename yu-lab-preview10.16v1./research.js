function research(){
  const scales = [
    [t('序列与遗传变异','Sequence and variation'),t('遗传信息与分子功能','Genetic information and molecular function')],
    [t('细胞与调控功能','Cells and regulation'),t('细胞状态与多层调控','Cell states and multilayer regulation')],
    [t('个体表型与人群风险','Phenotypes and population risk'),t('疾病轨迹与干预响应','Disease trajectories and intervention responses')]
  ];
  const ai = [t('基础模型','Foundation models'),t('生成式框架','Generative frameworks'),t('训练与评估数据','Training and evaluation data'),t('智能体系统','Agent systems')];
  return `<section class="research-opening"><div class="wrap">
    <div class="section-label">${t('研究方向','RESEARCH')}</div>
    <h1>${t('贯通尺度，<br>理解疾病。','Connecting scales.<br>Understanding disease.')}</h1>
    <p class="research-opening-copy">${t('我们从四个互补的技术角度，连接序列变异、细胞调控与人群健康。面向广泛生命科学问题开发方法，重点研究传染病预警预防，以及慢阻肺的早期诊断与治疗。','Four complementary approaches connect sequence variation, cellular regulation and population health. We develop methods for the wider life sciences, with focused applications in infectious disease warning and prevention, and early diagnosis and treatment research for COPD.')}</p>
    <div class="research-continuum" aria-label="${t('共同科学问题','Our shared scientific framework')}">${scales.map(([title,desc])=>`<div><h2>${title}</h2><p>${desc}</p></div>`).join('')}</div>
    <p class="research-context">${t('贯穿各尺度：环境、暴露与政策背景','Across scales: environment, exposures and policy context')}</p>
  </div></section>
  <section class="research-methods"><div class="wrap">
    <div class="methods-heading"><div class="section-label">${t('四个技术方向','FOUR TECHNICAL APPROACHES')}</div><nav class="method-index" aria-label="${t('研究方向导航','Research approaches')}">${lab.research.map(r=>`<a href="#research/${r.id}">${tr(r.title)}</a>`).join('')}</nav></div>
    ${lab.research.map(r=>`<article class="method-detail" id="${r.id}">
      <figure class="method-figure"><img src="assets/research/${r.art}.svg" alt="${esc(t('研究示意图：','Research schematic: ')+tr(r.title))}" loading="lazy" width="600" height="360"><figcaption>${tr(r.short)}</figcaption></figure>
      <div class="method-copy"><h2>${tr(r.title)}</h2><p class="method-question">${tr(r.question)}</p><p class="method-body">${tr(r.body)}</p><ul class="method-focus">${r.focus.map(pair=>`<li>${tr(pair)}</li>`).join('')}</ul></div>
    </article>`).join('')}
    <div class="ai-foundation"><h2>${t('共同的 AI 方法基础','A shared foundation in AI')}</h2><div>${ai.map(label=>`<span>${label}</span>`).join('')}</div><p>${t('以统计推断、可复现评估和功能实验连接模型与证据，让预测成为可以检验的科学假说。','Statistical inference, reproducible evaluation and functional experiments connect models with evidence, turning predictions into testable scientific hypotheses.')}</p></div>
  </div></section>${applications()}`;
}
