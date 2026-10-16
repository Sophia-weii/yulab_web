window.LAB = {
  research: [
  {
    "id": "cohorts",
    "title": [
      "大队列基因组学",
      "Large-cohort genomics"
    ],
    "short": [
      "定位人群风险，预测疾病进展。",
      "Locate population risk and anticipate disease progression."
    ],
    "question": [
      "哪些遗传与环境因素，让不同个体走向不同的疾病轨迹？",
      "Why do people follow different disease trajectories?"
    ],
    "body": [
      "我们结合大规模人群队列、遗传变异与纵向临床信息，研究疾病易感性、异质性和进展。通过统计遗传学与风险建模，将人群关联定位到可解释的生物学因素，并评估模型在不同人群中的适用性。",
      "We combine large population cohorts, genetic variation and longitudinal clinical information to study disease susceptibility, heterogeneity and progression. Statistical genetics and risk modeling connect population associations to interpretable biological factors, with attention to how findings transfer across populations."
    ],
    "focus": [
      [
        "遗传关联与精细定位",
        "Genetic association and fine-mapping"
      ],
      [
        "纵向表型与疾病轨迹",
        "Longitudinal phenotypes and disease trajectories"
      ],
      [
        "环境暴露与人群差异",
        "Environmental exposures and population diversity"
      ]
    ],
    "art": "cohorts"
  },
  {
    "id": "sequence",
    "title": [
      "序列表征",
      "Sequence representation learning"
    ],
    "short": [
      "学习序列规律，预测与设计功能。",
      "Learn sequence rules to predict and design function."
    ],
    "question": [
      "如何从序列中读出功能，并预测改变序列的后果？",
      "How can we read function from sequence—and predict the effects of changing it?"
    ],
    "body": [
      "我们开发 DNA、RNA 与蛋白序列的表征模型，学习遗传变异、分子结构与生物学功能之间的联系。结合进化信息、功能测量与计算扰动，探索具有可解释性、能够提出实验假说的序列模型，并研究功能导向的序列设计。",
      "We develop representations of DNA, RNA and protein sequences that connect genetic variation to molecular structure and biological function. Evolutionary information, functional measurements and in silico perturbations help us build interpretable models, generate experimental hypotheses and explore function-guided sequence design."
    ],
    "focus": [
      [
        "序列基础模型与进化信息",
        "Sequence foundation models and evolution"
      ],
      [
        "遗传变异的功能解读",
        "Functional interpretation of genetic variants"
      ],
      [
        "计算扰动与功能设计",
        "In silico perturbation and functional design"
      ]
    ],
    "art": "sequence"
  },
  {
    "id": "multiomics",
    "title": [
      "多组学整合",
      "Multiomics integration"
    ],
    "short": [
      "连接细胞状态与多层调控功能。",
      "Connect cell states with regulation across molecular layers."
    ],
    "question": [
      "不同分子层面的信息，如何共同塑造细胞状态与功能？",
      "How do molecular layers work together to shape cell states and function?"
    ],
    "body": [
      "我们整合染色质、RNA、蛋白及空间信息，在单细胞尺度刻画细胞状态与精细调控。通过多模态模型学习不同组学之间共享或特有的信息，研究遗传效应如何依赖细胞环境，以及细胞如何响应感染、疾病与扰动。",
      "We integrate chromatin, RNA, protein and spatial information to resolve cell states and fine-scale regulation. Multimodal models capture shared and layer-specific signals, revealing how genetic effects depend on cellular context and how cells respond to infection, disease and perturbation."
    ],
    "focus": [
      [
        "单细胞与空间多组学",
        "Single-cell and spatial multiomics"
      ],
      [
        "细胞状态表征与跨模态建模",
        "Cell-state representations and cross-modal models"
      ],
      [
        "多层调控与细胞功能",
        "Multilayer regulation and cellular function"
      ]
    ],
    "art": "multiomics"
  },
  {
    "id": "virtual-cohorts",
    "title": [
      "虚拟队列与智能体系统",
      "Virtual cohorts and agent systems"
    ],
    "short": [
      "组织证据，模拟干预，支持群体预警。",
      "Organize evidence, simulate interventions and support early warning."
    ],
    "question": [
      "如何连接多尺度证据，在虚拟队列中检验干预假说？",
      "How can we connect evidence across scales to test interventions in virtual cohorts?"
    ],
    "body": [
      "我们探索将遗传、细胞与临床证据组织为可持续更新的计算系统。科学智能体支持分析流程与知识组织，虚拟队列用于模拟不同情景下的疾病风险和干预响应，并纳入环境、暴露与政策背景，为实验验证和群体预警提供可检验的假说。",
      "We explore computational systems that connect genetic, cellular and clinical evidence as it accumulates. Scientific agents support analysis and knowledge organization; virtual cohorts allow us to study disease risk and intervention responses across scenarios, incorporating environmental exposures and policy context to generate testable hypotheses for validation and population-level early warning."
    ],
    "focus": [
      [
        "自动分析与证据组织",
        "Automated analysis and evidence organization"
      ],
      [
        "虚拟队列与情景模拟",
        "Virtual cohorts and scenario modeling"
      ],
      [
        "虚拟干预与群体预警",
        "Virtual intervention and population early warning"
      ]
    ],
    "art": "virtual-cohorts"
  }
],
  papers: [
  {
    "year": 2026,
    "kind": "published",
    "topic": "models",
    "name": "CAPTAIN",
    "title": "CAPTAIN: a multimodal foundation model pretrained on co-assayed single-cell RNA and protein",
    "authors": [
      {
        "name": "Boya Ji",
        "first": true
      },
      {
        "name": "Tingting Hu",
        "lab": true,
        "first": true
      },
      {
        "name": "Jiawen Wang",
        "lab": true,
        "first": true
      },
      {
        "name": "Mengmeng Liu",
        "lab": true
      },
      {
        "name": "Liwen Xu"
      },
      {
        "name": "Qinhao Zhang",
        "lab": true
      },
      {
        "name": "Siyun Zhong",
        "lab": true
      },
      {
        "name": "Libo Qiao",
        "lab": true
      },
      {
        "name": "Yan Zhang",
        "corresponding": true
      },
      {
        "name": "Shaoliang Peng",
        "corresponding": true
      },
      {
        "name": "Fulong Yu",
        "lab": true,
        "corresponding": true
      }
    ],
    "journal": "Nature Communications",
    "url": "https://www.nature.com/articles/s41467-026-72882-y"
  },
  {
    "year": 2026,
    "kind": "published",
    "topic": "models",
    "name": "Host responses",
    "title": "Explainable AI multiomics analysis reveals shared and divergent host responses in COVID-19 and influenza",
    "authors": [
      {
        "name": "Yan Zhang",
        "first": true
      },
      {
        "name": "Lining Zhang",
        "first": true
      },
      {
        "name": "Zehong Zhang",
        "lab": true
      },
      {
        "name": "Yuxi Lin",
        "lab": true
      },
      {
        "name": "Zexu Jiang",
        "lab": true
      },
      {
        "name": "Fulong Yu",
        "lab": true,
        "corresponding": true
      }
    ],
    "journal": "npj Digital Medicine",
    "url": "https://www.nature.com/articles/s41746-025-02291-w"
  },
  {
    "year": 2024,
    "kind": "published",
    "topic": "cells",
    "name": "ReDeeM",
    "title": "Deciphering cell states and genealogies of human haematopoiesis",
    "authors": [
      {
        "name": "Chen Weng",
        "first": true
      },
      {
        "name": "Fulong Yu",
        "lab": true
      },
      {
        "name": "Dian Yang"
      },
      {
        "name": "Michael Poeschla"
      },
      {
        "name": "L. Alexander Liggett"
      },
      {
        "name": "Matthew G. Jones"
      },
      {
        "name": "Xiaojie Qiu"
      },
      {
        "name": "Lara Wahlster"
      },
      {
        "name": "Alexis Caulier"
      },
      {
        "name": "Jeffrey A. Hussmann"
      },
      {
        "name": "Alexandra Schnell"
      },
      {
        "name": "Kathryn E. Yost"
      },
      {
        "name": "Luke W. Koblan"
      },
      {
        "name": "Jorge D. Martin-Rufino"
      },
      {
        "name": "Joseph Min"
      },
      {
        "name": "Alessandro Hammond"
      },
      {
        "name": "Daniel Ssozi"
      },
      {
        "name": "Raphael Bueno"
      },
      {
        "name": "Hari Mallidi"
      },
      {
        "name": "Antonia Kreso"
      },
      {
        "name": "Javier Escabi"
      },
      {
        "name": "William M. Rideout III"
      },
      {
        "name": "Tyler Jacks"
      },
      {
        "name": "Sahand Hormoz"
      },
      {
        "name": "Peter van Galen"
      },
      {
        "name": "Jonathan S. Weissman",
        "corresponding": true
      },
      {
        "name": "Vijay G. Sankaran",
        "corresponding": true
      }
    ],
    "journal": "Nature",
    "url": "https://www.nature.com/articles/s41586-024-07066-z"
  },
  {
    "year": 2022,
    "kind": "published",
    "topic": "genetics",
    "name": "SCAVENGE",
    "title": "Variant to function mapping at single-cell resolution through network propagation",
    "authors": [
      {
        "name": "Fulong Yu",
        "lab": true,
        "first": true
      },
      {
        "name": "Liam D. Cato"
      },
      {
        "name": "Chen Weng"
      },
      {
        "name": "L. Alexander Liggett"
      },
      {
        "name": "Soyoung Jeon"
      },
      {
        "name": "Keren Xu"
      },
      {
        "name": "Charleston W. K. Chiang"
      },
      {
        "name": "Joseph L. Wiemels"
      },
      {
        "name": "Jonathan S. Weissman"
      },
      {
        "name": "Adam J. de Smith"
      },
      {
        "name": "Vijay G. Sankaran",
        "corresponding": true
      }
    ],
    "journal": "Nature Biotechnology",
    "url": "https://www.nature.com/articles/s41587-022-01341-y"
  },
  {
    "year": 2022,
    "kind": "published",
    "topic": "genetics",
    "name": "HemeMap",
    "title": "A genetic disorder reveals a hematopoietic stem cell regulatory network co-opted in leukemia",
    "authors": [
      {
        "name": "Richard A. Voit",
        "first": true,
        "corresponding": true
      },
      {
        "name": "Liming Tao",
        "first": true
      },
      {
        "name": "Fulong Yu",
        "lab": true,
        "first": true
      },
      {
        "name": "Liam D. Cato"
      },
      {
        "name": "Blake Cohen"
      },
      {
        "name": "Travis J. Fleming"
      },
      {
        "name": "Mateusz Antoszewski"
      },
      {
        "name": "Xiaotian Liao"
      },
      {
        "name": "Claudia Fiorini"
      },
      {
        "name": "Satish K. Nandakumar"
      },
      {
        "name": "Lara Wahlster"
      },
      {
        "name": "Kristian Teichert"
      },
      {
        "name": "Aviv Regev"
      },
      {
        "name": "Vijay G. Sankaran",
        "corresponding": true
      }
    ],
    "journal": "Nature Immunology",
    "url": "https://www.nature.com/articles/s41590-022-01370-4"
  },
  {
    "year": 2021,
    "kind": "published",
    "topic": "cells",
    "name": "CUT&RUNTools 2.0",
    "title": "CUT&RUNTools 2.0: a pipeline for single-cell and bulk-level CUT&RUN and CUT&Tag data analysis",
    "authors": [
      {
        "name": "Fulong Yu",
        "lab": true,
        "first": true
      },
      {
        "name": "Vijay G. Sankaran"
      },
      {
        "name": "Guo-Cheng Yuan",
        "corresponding": true
      }
    ],
    "journal": "Bioinformatics",
    "url": "https://academic.oup.com/bioinformatics/article/38/1/252/6318389"
  },
  {
    "year": 2020,
    "kind": "published",
    "topic": "genetics",
    "name": "CFEA",
    "title": "CFEA: a cell-free epigenome atlas in human diseases",
    "authors": [
      {
        "name": "Fulong Yu",
        "lab": true,
        "first": true
      },
      {
        "name": "Kai Li",
        "first": true
      },
      {
        "name": "Shuangquan Li",
        "first": true
      },
      {
        "name": "Jiaqi Liu"
      },
      {
        "name": "Yan Zhang"
      },
      {
        "name": "Meng Zhou"
      },
      {
        "name": "Hengqiang Zhao"
      },
      {
        "name": "Hongyan Chen"
      },
      {
        "name": "Nan Wu"
      },
      {
        "name": "Zhihua Liu",
        "corresponding": true
      },
      {
        "name": "Jianzhong Su",
        "corresponding": true
      }
    ],
    "journal": "Nucleic Acids Research",
    "url": "https://academic.oup.com/nar/article/48/D1/D40/5552060"
  },
  {
    "year": 2026,
    "kind": "preprint",
    "topic": "models",
    "name": "DERIVE",
    "title": "Disentangled multimodal evolutionary representations for cross-virus predictive modeling of antigenic change",
    "authors": [
      {
        "name": "Zehong Zhang",
        "lab": true,
        "first": true
      },
      {
        "name": "Yuxi Lin",
        "lab": true,
        "first": true
      },
      {
        "name": "Siyun Zhong",
        "lab": true
      },
      {
        "name": "Peng Zhou"
      },
      {
        "name": "Yixue Li"
      },
      {
        "name": "Fulong Yu",
        "lab": true,
        "corresponding": true
      }
    ],
    "journal": "bioRxiv",
    "url": "https://www.biorxiv.org/content/10.64898/2026.02.12.705501v1"
  },
  {
    "year": 2025,
    "kind": "preprint",
    "topic": "models",
    "name": "MethylAI",
    "title": "Dissecting sequence determinants of DNA methylation and in silico perturbation",
    "authors": [
      {
        "name": "Faming Chen",
        "lab": true,
        "first": true
      },
      {
        "name": "Qinhao Zhang",
        "lab": true,
        "first": true
      },
      {
        "name": "Shiwei Zhu",
        "lab": true,
        "first": true
      },
      {
        "name": "Jinxia Liang",
        "first": true
      },
      {
        "name": "Siyun Zhong",
        "lab": true
      },
      {
        "name": "Zehong Zhang",
        "lab": true
      },
      {
        "name": "Jianzhong Su"
      },
      {
        "name": "Yangfan Guo",
        "corresponding": true
      },
      {
        "name": "Xiaoying Fan",
        "corresponding": true
      },
      {
        "name": "Yan Zhang",
        "corresponding": true
      },
      {
        "name": "Fulong Yu",
        "lab": true,
        "corresponding": true
      }
    ],
    "journal": "bioRxiv",
    "url": "https://www.biorxiv.org/content/10.1101/2025.11.20.689274v1"
  }
],
  resources: [
    {name:'CAPTAIN',type:'model',desc:['基于同细胞 RNA 与蛋白联合测量预训练的多模态基础模型。','A multimodal foundation model pretrained on co-assayed single-cell RNA and protein.'],url:'https://github.com/Yu-Lab-Genomics/CAPTAIN',label:'MULTIMODAL FOUNDATION MODEL'},
    {name:'SCAVENGE',type:'tool',desc:['通过网络传播，在单细胞分辨率下识别遗传性状相关的细胞类型与状态。','Network propagation for mapping genetic trait relevance at single-cell resolution.'],url:'https://github.com/sankaranlab/SCAVENGE',label:'VARIANT TO FUNCTION'},
    {name:'CUT&RUNTools 2.0',type:'tool',desc:['支持 bulk 与单细胞 CUT&RUN、CUT&Tag 数据处理与分析。','Processing and analysis of bulk and single-cell CUT&RUN and CUT&Tag data.'],url:'https://github.com/fl-yu/CUT-RUNTools-2.0',label:'EPIGENOMICS TOOLKIT'},
    {name:'UTR-STCNet',type:'model',desc:['用于可变长度 5′UTR 的 Transformer 模型，研究翻译相关的功能序列。','A Transformer architecture for modeling variable-length 5′UTRs and translation-related sequences.'],url:'https://github.com/Yu-Lab-Genomics/UTR-STCNet',label:'SEQUENCE MODELING'},
    {name:'HemeMap',type:'tool',desc:['整合造血细胞多组学，探索顺式调控元件及其靶基因连接。','Integrating hematopoietic multiomics to identify candidate cis-regulatory elements and gene links.'],url:'https://github.com/sankaranlab/mecom_var',label:'REGULATORY GENOMICS'}
  ]
};

window.MEMBERS = [{"id": "admin", "name": "Fulong Yu Ph.D.", "role": "Principal Investigator", "roleZh": "课题组负责人", "chinese": "", "group": "PI"}, {"id": "faming", "name": "Faming Chen Ph.D.", "role": "Assistant Researcher", "roleZh": "助理研究员", "chinese": "陈法铭", "group": "Researchers"}, {"id": "jiaheng", "name": "Jiaheng He", "role": "Intern Student", "roleZh": "实习学生", "chinese": "何佳珩", "group": "Grad Students"}, {"id": "jiawen", "name": "Jiawen Wang", "role": "Ph.D. Student", "roleZh": "博士研究生", "chinese": "王佳雯", "group": "Grad Students"}, {"id": "libo", "name": "Libo Qiao", "role": "Ph.D. Student", "roleZh": "博士研究生", "chinese": "乔立博", "group": "Grad Students"}, {"id": "peiyu", "name": "Peiyu Liang", "role": "Research Assistant", "roleZh": "研究助理", "chinese": "梁培雨", "group": "Researchers"}, {"id": "qinhao", "name": "Qinhao Zhang", "role": "Ph.D. Student", "roleZh": "博士研究生", "chinese": "张钦豪", "group": "Grad Students"}, {"id": "rui", "name": "Qirui Zhou", "role": "Ph.D. Student", "roleZh": "博士研究生", "chinese": "周颀睿", "group": "Grad Students"}, {"id": "shiwei", "name": "Shiwei Zhu Ph.D.", "role": "Postdoctoral Researcher", "roleZh": "博士后", "chinese": "朱士微", "group": "Researchers"}, {"id": "siyu", "name": "Siyu He Ph.D.", "role": "Postdoctoral Researcher", "roleZh": "博士后", "chinese": "何思宇", "group": "Researchers"}, {"id": "siyun", "name": "Siyun Zhong", "role": "Research Assistant", "roleZh": "研究助理", "chinese": "钟思芸", "group": "Researchers"}, {"id": "tingting", "name": "Tingting Hu", "role": "Ph.D. Student", "roleZh": "博士研究生", "chinese": "胡婷婷", "group": "Grad Students"}, {"id": "xing", "name": "Xing Wan", "role": "Research Assistant", "roleZh": "研究助理", "chinese": "万星", "group": "Researchers"}, {"id": "xiwen", "name": "Xiwen Zhang", "role": "Research Assistant", "roleZh": "研究助理", "chinese": "张希雯", "group": "Researchers"}, {"id": "xuanzhao", "name": "Xuanzhao Li", "role": "Ph.D. Student", "roleZh": "博士研究生", "chinese": "李炫钊", "group": "Grad Students"}, {"id": "yaping", "name": "Yaping Jin", "role": "Incoming Direct Ph.D. Student", "roleZh": "2027 级直博生", "chinese": "金雅娉", "group": "Grad Students"}, {"id": "yating", "name": "Yating Wei", "role": "Lab manager", "roleZh": "实验室管理员", "chinese": "魏亚婷", "group": "Lab manager"}, {"id": "ye", "name": "Ye Yang", "role": "Master Student", "roleZh": "硕士研究生", "chinese": "杨也", "group": "Grad Students"}, {"id": "zehong", "name": "Zehong Zhang Ph.D.", "role": "Postdoctoral Researcher", "roleZh": "博士后", "chinese": "张泽宏", "group": "Researchers"}, {"id": "zexu", "name": "Zexu Jiang", "role": "Ph.D. Student", "roleZh": "博士研究生", "chinese": "姜泽旭", "group": "Grad Students"}];

window.LAB.news = [
  {
    "date": "2026-10-10",
    "type": "award",
    "title": [
      "王佳雯获全球大学生生命科学挑战赛省级优秀奖",
      "Jiawen Wang receives Provincial Excellence Award at the Global University Student Life Science Challenge"
    ],
    "body": [
      "课题组博士生王佳雯在“多模态虚拟细胞小分子药物筛选 AI 平台”项目中获得全球大学生生命科学挑战赛省级优秀奖。",
      "Ph.D. student Jiawen Wang received the Provincial Excellence Award in the Global University Student Life Science Challenge for the project “Multimodal Virtual Cell Small Molecule Drug Screening AI Platform.”"
    ],
    "url": "https://competition.openlifesci-alliance.org/home/news/newsList?newsType=203&parName=%E8%B5%9B%E4%BA%8B%E5%8A%A8%E6%80%81&titleName=%E8%B5%9B%E4%BA%8B%E5%8A%A8%E6%80%81&titleTem=/news"
  },
  {
    "date": "2026-08-27",
    "photo": {"src": "assets/news/20260827-1.jpg", "alt": ["团队为 Yuxi 举办送别聚会", "The team at Yuxi’s farewell gathering"]},
    "type": "people",
    "title": [
      "祝福 Yuxi 的下一段旅程",
      "Wishing Yuxi well in the next chapter"
    ],
    "body": [
      "课题组为 Yuxi 举办送别聚会，祝愿未来一切顺利。",
      "The team gathered to say farewell to Yuxi and share our best wishes for the next chapter."
    ]
  },
  {
    "date": "2026-06-25",
    "type": "award",
    "title": [
      "Siyu 获得中国博士后科学基金资助",
      "Siyu receives postdoctoral research funding"
    ],
    "body": [
      "祝贺 Siyu 获得中国博士后科学基金面上资助。",
      "Congratulations to Siyu on receiving a China Postdoctoral Science Foundation General Grant."
    ]
  },
  {
    "date": "2026-05-09",
    "type": "publication",
    "title": [
      "CAPTAIN 发表于 Nature Communications",
      "CAPTAIN published in Nature Communications"
    ],
    "body": [
      "祝贺 Tingting、Jiawen 及合作者！这项研究连接同细胞 RNA 与蛋白测量，发展多模态基础模型。",
      "Congratulations to Tingting, Jiawen and collaborators on our multimodal foundation model for co-assayed single-cell RNA and protein."
    ],
    "url": "https://www.nature.com/articles/s41467-026-72882-y"
  },
  {
    "date": "2026-02-21",
    "type": "publication",
    "title": [
      "多项合作研究成果发表",
      "New research across three venues"
    ],
    "body": [
      "课题组近期工作发表于 npj Digital Medicine、BMC Medicine 和 BIBM。",
      "Recent work from the lab appeared in npj Digital Medicine, BMC Medicine and BIBM."
    ]
  },
  {
    "date": "2025-11-11",
    "photo": {"src": "assets/news/20251111-1.jpg", "alt": ["海鸥岛团队活动", "The lab retreat on Seagull Island"]},
    "type": "people",
    "title": [
      "课题组海鸥岛活动",
      "A lab retreat on Seagull Island"
    ],
    "body": [
      "团队在海鸥岛度过轻松的午后，分享美食与交流。",
      "An afternoon of food, conversation and time together on Seagull Island."
    ]
  },
  {
    "date": "2025-10-20",
    "photo": {"src": "assets/news/20251020-1.jpg", "alt": ["团队参加中国遗传学会全国学术会议", "Lab members at the Chinese Society of Genetics conference"]},
    "type": "conference",
    "title": [
      "参加中国遗传学会全国学术会议",
      "At the Chinese Society of Genetics conference"
    ],
    "body": [
      "课题组成员参加在合肥举行的中国遗传学会 2025 年全国学术会议。",
      "Lab members attended the Chinese Society of Genetics National Conference 2025 in Hefei."
    ]
  },
  {
    "date": "2025-10-08",
    "type": "conference",
    "title": [
      "在南宁交流慢阻肺研究",
      "Sharing our COPD research in Nanning"
    ],
    "body": [
      "于福龙研究员在第十四届全国生物信息学与系统生物学学术大会分享结合 HLA 分型与 AI 模型解析慢阻肺风险的研究。",
      "Fulong presented our work combining HLA genotyping and AI models to decode COPD risk at the 14th National Conference on Bioinformatics and Systems Biology."
    ]
  },
  {
    "date": "2025-09-21",
    "type": "conference",
    "title": [
      "CAPTAIN 亮相浦江创新论坛",
      "CAPTAIN at the Pujiang Innovation Forum"
    ],
    "body": [
      "课题组受邀在第十八届浦江创新论坛发布 CAPTAIN 模型。",
      "The lab was invited to present CAPTAIN at the 18th Pujiang Innovation Forum."
    ]
  },
  {
    "date": "2025-08-27",
    "type": "people",
    "title": [
      "为 Jianhong 和 Jiaheng 送别",
      "Farewell to Jianhong and Jiaheng"
    ],
    "body": [
      "课题组为 Jianhong 和 Jiaheng 举办送别活动。",
      "The team came together to celebrate Jianhong and Jiaheng and wish them well."
    ]
  },
  {
    "date": "2025-04-12",
    "type": "conference",
    "title": [
      "参加智能健康与生物信息学大会",
      "At IHB2025 in Harbin"
    ],
    "body": [
      "课题组成员参加在哈尔滨举办的第四届中国智能健康与生物信息学大会。",
      "Lab members attended the 4th Chinese Intelligent Health & Bioinformatics Conference in Harbin."
    ]
  }
];

// Alumni records follow content/people/alumni.md.
window.ALUMNI = [
  {
    "name": "Qi Wang",
    "years": "2024–2025",
    "role": [
      "实习学生",
      "Intern Student"
    ],
    "destination": [
      "昆明医科大学 · 研究生",
      "Graduate Student, Kunming Medical University"
    ]
  },
  {
    "name": "Mengmeng Liu",
    "years": "2024–2025",
    "role": [
      "研究助理",
      "Research Assistant"
    ],
    "destination": [
      "哈尔滨医科大学 · 博士研究生",
      "Ph.D. Student, Harbin Medical University"
    ]
  },
  {
    "name": "Jianhong Liu",
    "years": "2024–2025",
    "role": [
      "研究助理",
      "Research Assistant"
    ],
    "destination": [
      "华南农业大学 · 博士研究生",
      "Ph.D. Student, South China Agricultural University"
    ]
  },
  {
    "name": "Yuxi Lin",
    "years": "2025–2026",
    "role": [
      "研究助理",
      "Research Assistant"
    ],
    "destination": [
      "中山大学 · 博士研究生",
      "Ph.D. Student, Sun Yat-sen University"
    ]
  }
];
