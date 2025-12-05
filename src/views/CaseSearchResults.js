import { router } from '../router.js';

export default {
    name: 'CaseSearchResults',
    data() {
        return {
            searchQuery: '',
            keywords: [],
            activeCategory: 'general',
            sortBy: 'relevance',
            showSortDropdown: false,
            showAdvancedFilter: false,
            showCaseDetailModal: false,
            selectedCase: null,
            filterOptions: {
                caseTypes: [
                    { name: '民事案由', count: 643063 },
                    { name: '刑事案由', count: 20878 },
                    { name: '行政案由', count: 17178 },
                    { name: '国家赔偿与司法救助案由', count: 946 }
                ],
                regions: [
                    { name: '广东省', count: 128951 },
                    { name: '北京市', count: 48330 },
                    { name: '江苏省', count: 47728 },
                    { name: '山东省', count: 47002 },
                    { name: '湖南省', count: 45702 },
                    { name: '福建省', count: 43434 },
                    { name: '浙江省', count: 42572 },
                    { name: '四川省', count: 38654 }
                ],
                docTypes: [
                    { name: '裁定书', count: 53167 },
                    { name: '调解书', count: 16 },
                    { name: '判决书', count: 758252 }
                ]
            },
            results: [
                {
                    id: 1,
                    title: '张志祥诉东辽县人民政府、东辽县自贵镇人民政府、东辽县城市管...',
                    category: '普通案例',
                    caseNumber: '(2020) 吉行终199号',
                    court: '吉林省高级人民法院',
                    date: '2020-09-30',
                    procedure: '二审',
                    summary: '一、撤销吉林省辽源市中级人民法院（2020）吉04行初2号行政判决。二、确认东辽县人民政府组织的强制拆除张志祥位于东辽县自贵镇建设家村土地上的建筑物的行政行为违法。三、驳回张志祥其他诉讼请求。二审案件受理费50元，由东辽县人民政府负担。',
                    attachments: '一审',
                    activeTab: 'verdict',
                    verdictContent: '一、撤销吉林省辽源市中级人民法院（2020）吉04行初2号行政判决。二、确认东辽县人民政府组织的强制拆除张志祥位于东辽县自贵镇建设家村土地上的建筑物的行政行为违法。三、驳回张志祥其他诉讼请求。二审案件受理费50元，由东辽县人民政府负担。',
                    judgmentContent: '一、撤销吉林省辽源市中级人民法院（2020）吉04行初2号行政判决。\n二、确认东辽县人民政府组织的强制拆除张志祥位于东辽县自贵镇建设家村土地上的建筑物的行政行为违法。\n三、驳回张志祥其他诉讼请求。\n二审案件受理费50元，由东辽县人民政府负担。',
                    laws: {
                        title: '中华人民共和国行政诉讼法',
                        category: '法律',
                        publisher: '全国人民代表大会常务委员会',
                        publishDate: '2017-06-27',
                        effectiveDate: '2017-07-01',
                        status: '现行有效',
                        content: '第八十九条：人民法院审理上诉案件，按照下列情形，分别处理：（一）原判决、裁定认定事实清楚，适用法律、法规正确的，判决或者裁定驳回上诉，维持原判决、裁定；（二）原判决、裁定认定事实错误或者适用法律、法规错误的，依法改判、撤销或者变更；（三）原判决认定基本事实不清、证据不足的，发回原审人民法院重审，或者查清事实后改判；（四）原判决遗漏当事人或者违法缺席判决等严重违反法定程序的，裁定撤销原判决，发回原审人民法院重审。原审人民法院对发回重审的案件作出判决后，当事人提起上诉的，第二审人民法院不得再次发回重审。人民法院审理上诉案件，需要改变原审判决的，应当同时对诉讼行为作出判决。'
                    }
                },
                {
                    id: 2,
                    title: '吴雪梅与哈尔滨市南岗区人民政府、王郊新行政复议一审行政判决书',
                    category: '普通案例',
                    caseNumber: '(2022) 黑01行初13号',
                    court: '黑龙江省哈尔滨市中级人民法院',
                    date: '2022-09-20',
                    procedure: '一审',
                    summary: '本院认为，行政复议决定中对行政行为的处理和对一并提出的行政赔偿请求的处理彼此可分，当事人仅就行政赔偿偿请求的处理彼此可分...',
                    attachments: '',
                    activeTab: 'verdict',
                    verdictContent: '本院认为，行政复议决定中对行政行为的处理和对一并提出的行政赔偿请求的处理彼此可分，当事人仅就行政赔偿请求的处理提起诉讼的，人民法院应当受理。',
                    judgmentContent: '驳回原告吴雪梅的诉讼请求。\n案件受理费50元，由原告吴雪梅负担。',
                    laws: null
                },
                {
                    id: 3,
                    title: '李明诉北京市朝阳区人民政府房屋强制拆除案',
                    category: '普通案例',
                    caseNumber: '(2021) 京01行终32号',
                    court: '北京市第一中级人民法院',
                    date: '2021-05-15',
                    procedure: '二审',
                    summary: '一、维持一审判决。二、驳回原告其他诉讼请求。本案受理费100元，由原告负担。',
                    attachments: '一审',
                    activeTab: 'verdict',
                    verdictContent: '一、维持一审判决。二、驳回原告其他诉讼请求。本案受理费100元，由原告负担。',
                    judgmentContent: '一、维持一审判决。\n二、驳回原告其他诉讼请求。\n本案受理费100元，由原告负担。',
                    laws: null
                },
                {
                    id: 4,
                    title: '王芳诉上海市静安区人民政府行政强制执行案',
                    category: '普通案例',
                    caseNumber: '(2023) 沪02行初56号',
                    court: '上海市第二中级人民法院',
                    date: '2023-03-10',
                    procedure: '一审',
                    summary: '被告上海市静安区人民政府对原告房屋实施强制拆除的行政行为缺乏法定程序，应当确认违法。',
                    attachments: '',
                    activeTab: 'verdict',
                    verdictContent: '被告上海市静安区人民政府对原告房屋实施强制拆除的行政行为缺乏法定程序，应当确认违法。',
                    judgmentContent: '确认被告上海市静安区人民政府对原告王芳房屋实施强制拆除的行政行为违法。\n案件受理费50元，由被告负担。',
                    laws: null
                },
                {
                    id: 5,
                    title: '张伟诉广州市天河区人民政府房屋征收补偿决定案',
                    category: '普通案例',
                    caseNumber: '(2022) 粤01行终128号',
                    court: '广东省广州市中级人民法院',
                    date: '2022-11-25',
                    procedure: '二审',
                    summary: '一、撤销一审判决。二、确认被告广州市天河区人民政府作出的房屋征收补偿决定违法。',
                    attachments: '一审',
                    activeTab: 'verdict',
                    verdictContent: '一、撤销一审判决。二、确认被告广州市天河区人民政府作出的房屋征收补偿决定违法。',
                    judgmentContent: '一、撤销一审判决。\n二、确认被告广州市天河区人民政府作出的房屋征收补偿决定违法。\n二审案件受理费50元，由被告负担。',
                    laws: null
                }
            ],
            totalResults: 200
        };
    },
    mounted() {
        // 从路由参数获取搜索关键词
        const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
        this.searchQuery = urlParams.get('q') || '';
        if (this.searchQuery) {
            // 智能提取法律相关关键词
            this.keywords = this.extractLegalKeywords(this.searchQuery);
        }
    },
    methods: {
        extractLegalKeywords(text) {
            // 法律相关词汇库
            const legalTerms = [
                // 行政法相关
                '违章建筑', '强制拆除', '城管执法', '行政复议', '行政赔偿', '程序违法', '书面通知',
                '行政处罚', '行政许可', '行政强制', '征收补偿', '国有土地', '集体土地',
                // 民事法相关
                '合同纠纷', '买卖合同', '借款合同', '租赁合同', '违约责任', '侵权责任',
                '人身损害', '财产损失', '精神损害', '夫妻共同财产', '离婚诉讼', '抚养权',
                '继承权', '遗嘱', '债权债务', '担保', '抵押', '质押',
                // 刑事法相关
                '刑事责任', '故意伤害', '盗窃罪', '诈骗罪', '职务侵占', '贪污受贿',
                '交通肇事', '危险驾驶', '寻衅滋事', '聚众斗殴',
                // 劳动法相关
                '劳动合同', '劳动争议', '工伤赔偿', '经济补偿', '违法解除', '加班费',
                '社会保险', '竞业限制', '劳务派遣',
                // 知识产权相关
                '著作权', '商标权', '专利权', '侵权', '不正当竞争', '商业秘密',
                // 程序法相关
                '诉讼时效', '管辖权', '证据', '举证责任', '一审', '二审', '再审', '执行',
                '调解', '和解', '仲裁', '上诉', '申诉'
            ];

            const keywords = [];
            const textLower = text.toLowerCase();

            // 1. 提取法律术语
            legalTerms.forEach(term => {
                if (text.includes(term)) {
                    keywords.push(term);
                }
            });

            // 2. 如果没有匹配到法律术语，尝试分词提取关键词
            if (keywords.length === 0) {
                // 简单的中文分词：提取2-4字的词组
                const words = [];
                for (let len = 4; len >= 2; len--) {
                    for (let i = 0; i <= text.length - len; i++) {
                        const word = text.substring(i, i + len);
                        // 过滤掉常见的停用词
                        if (!['可以', '如何', '怎么', '什么', '哪些', '因为', '所以', '但是', '然后', '我的', '我家'].includes(word)) {
                            words.push(word);
                        }
                    }
                }
                // 去重并限制数量
                const uniqueWords = [...new Set(words)];
                keywords.push(...uniqueWords.slice(0, 7));
            }

            // 去重并限制最多7个关键词
            return [...new Set(keywords)].slice(0, 7);
        },
        goBack() {
            router.back();
        },
        newSearch() {
            router.push('/legal-research');
        },
        switchCategory(category) {
            this.activeCategory = category;
        },
        toggleSortDropdown() {
            this.showSortDropdown = !this.showSortDropdown;
        },
        changeSortBy(sort) {
            this.sortBy = sort;
            this.showSortDropdown = false;
        },
        toggleAdvancedFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
        },
        switchCaseTab(caseItem, tab) {
            caseItem.activeTab = tab;
        },
        viewCaseDetail(caseId) {
            // 找到对应的案例
            const caseData = this.results.find(r => r.id === caseId);
            if (caseData) {
                this.selectedCase = {
                    ...caseData,
                    fullText: this.generateFullText(caseData)
                };
                this.showCaseDetailModal = true;
            }
        },
        closeCaseDetailModal() {
            this.showCaseDetailModal = false;
            this.selectedCase = null;
        },
        downloadCase() {
            if (!this.selectedCase) return;
            const content = `${this.selectedCase.title}\n\n${this.selectedCase.fullText}`;
            const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${this.selectedCase.caseNumber}.txt`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        },
        generateFullText(caseData) {
            // 生成完整的判决书文本
            return `${caseData.court}

${caseData.docType || '行政判决书'}

${caseData.caseNumber}

${caseData.verdictContent || caseData.summary}

${caseData.judgmentContent || ''}

审判长  李明
审判员  王芳  
审判员  张伟

${caseData.date}
书记员  刘洋`;
        }
    },
    template: `
        <div class="smart-page" style="background: #fff;">
            <div class="smart-container" style="max-width: 1200px;">
                <!-- 顶部搜索栏 -->
                <div style="display: flex; align-items: center; gap: 16px; padding: 20px 0; border-bottom: 1px solid #e5e5e5;">
                    <div style="flex: 1; display: flex; align-items: center; gap: 12px;">
                        <div style="flex: 1; font-size: 16px; color: #1a1a1a;">
                            {{ searchQuery }}
                        </div>
                        <button class="smart-btn-primary" @click="newSearch" style="padding: 8px 20px;">
                            <i class="fas fa-plus"></i> 新检索
                        </button>
                    </div>
                </div>

                <!-- 关键词标签 -->
                <div style="padding: 16px 0; border-bottom: 1px solid #e5e5e5;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="color: #666; font-size: 14px;">关键词：</span>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <span 
                                v-for="keyword in keywords" 
                                :key="keyword"
                                style="padding: 4px 12px; background: #f5f5f5; border-radius: 4px; font-size: 14px; color: #1a1a1a;"
                            >
                                {{ keyword }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 分类和筛选 -->
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 20px 0; border-bottom: 1px solid #e5e5e5;">
                    <div style="display: flex; gap: 24px;">
                        <button 
                            @click="switchCategory('general')"
                            :style="{
                                color: activeCategory === 'general' ? '#1a73e8' : '#1a1a1a',
                                fontWeight: activeCategory === 'general' ? '600' : '400',
                                borderBottom: activeCategory === 'general' ? '2px solid #1a73e8' : 'none',
                                padding: '8px 0',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '15px'
                            }"
                        >
                            普通案例 ({{ totalResults }})
                        </button>
                        <button 
                            @click="switchCategory('public')"
                            :style="{
                                color: activeCategory === 'public' ? '#1a73e8' : '#999',
                                fontWeight: activeCategory === 'public' ? '600' : '400',
                                borderBottom: activeCategory === 'public' ? '2px solid #1a73e8' : 'none',
                                padding: '8px 0',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '15px'
                            }"
                        >
                            公报案例 (0)
                        </button>
                        <button 
                            @click="switchCategory('guiding')"
                            :style="{
                                color: activeCategory === 'guiding' ? '#1a73e8' : '#999',
                                fontWeight: activeCategory === 'guiding' ? '600' : '400',
                                borderBottom: activeCategory === 'guiding' ? '2px solid #1a73e8' : 'none',
                                padding: '8px 0',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '15px'
                            }"
                        >
                            指导性案例 (0)
                        </button>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: center; position: relative;">
                        <!-- 相关度排序 -->
                        <div style="position: relative;">
                            <button class="smart-btn-secondary" @click="toggleSortDropdown" style="padding: 6px 16px; font-size: 14px;">
                                <i class="fas fa-sort-amount-down"></i> 相关度
                            </button>
                            <div v-if="showSortDropdown" style="position: absolute; top: 100%; right: 0; margin-top: 8px; background: white; border: 1px solid #e5e5e5; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 1000; min-width: 180px;">
                                <div 
                                    @click="changeSortBy('relevance')"
                                    style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #f5f5f5;"
                                    :style="{ background: sortBy === 'relevance' ? '#f5f5f5' : 'white' }"
                                >
                                    <i class="fas fa-sort-amount-down" style="color: #666;"></i>
                                    <span style="flex: 1; color: #1a1a1a; font-size: 14px;">相关度</span>
                                    <i v-if="sortBy === 'relevance'" class="fas fa-check" style="color: #1a73e8;"></i>
                                </div>
                                <div 
                                    @click="changeSortBy('date-desc')"
                                    style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #f5f5f5;"
                                    :style="{ background: sortBy === 'date-desc' ? '#f5f5f5' : 'white' }"
                                >
                                    <i class="fas fa-arrow-down" style="color: #666;"></i>
                                    <span style="flex: 1; color: #1a1a1a; font-size: 14px;">裁判日期</span>
                                    <i v-if="sortBy === 'date-desc'" class="fas fa-check" style="color: #1a73e8;"></i>
                                </div>
                                <div 
                                    @click="changeSortBy('date-asc')"
                                    style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 12px;"
                                    :style="{ background: sortBy === 'date-asc' ? '#f5f5f5' : 'white' }"
                                >
                                    <i class="fas fa-arrow-up" style="color: #666;"></i>
                                    <span style="flex: 1; color: #1a1a1a; font-size: 14px;">裁判日期</span>
                                    <i v-if="sortBy === 'date-asc'" class="fas fa-check" style="color: #1a73e8;"></i>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 高级筛选 -->
                        <button class="smart-btn-secondary" @click="toggleAdvancedFilter" style="padding: 6px 16px; font-size: 14px;">
                            <i class="fas fa-sliders-h"></i> 高级筛选
                        </button>
                    </div>
                </div>

                <!-- 高级筛选侧边栏 -->
                <div v-if="showAdvancedFilter" @click="toggleAdvancedFilter" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.3); z-index: 999;"></div>
                <div 
                    :style="{
                        position: 'fixed',
                        top: 0,
                        right: showAdvancedFilter ? 0 : '-400px',
                        width: '400px',
                        height: '100vh',
                        background: 'white',
                        boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        transition: 'right 0.3s ease',
                        overflowY: 'auto'
                    }"
                >
                    <!-- 筛选面板头部 -->
                    <div style="padding: 20px; border-bottom: 1px solid #e5e5e5; display: flex; align-items: center; justify-content: space-between;">
                        <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">高级筛选</h3>
                        <div style="display: flex; gap: 12px;">
                            <button @click="toggleAdvancedFilter" style="background: none; border: none; cursor: pointer; padding: 4px;">
                                <i class="fas fa-bars" style="color: #666; font-size: 16px;"></i>
                            </button>
                            <button @click="toggleAdvancedFilter" style="background: none; border: none; cursor: pointer; padding: 4px;">
                                <i class="fas fa-times" style="color: #666; font-size: 18px;"></i>
                            </button>
                        </div>
                    </div>

                    <!-- 结案案由分布 -->
                    <div style="padding: 20px; border-bottom: 1px solid #e5e5e5;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-list" style="color: #666;"></i>
                                <span style="font-weight: 600; color: #1a1a1a;">结案案由分布</span>
                            </div>
                            <i class="fas fa-chevron-down" style="color: #666;"></i>
                        </div>
                        <div v-for="type in filterOptions.caseTypes" :key="type.name" style="padding: 8px 0; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-chevron-right" style="color: #999; font-size: 12px;"></i>
                                <span style="color: #1a1a1a; font-size: 14px;">{{ type.name }}</span>
                            </div>
                            <span style="color: #999; font-size: 13px;">{{ type.count.toLocaleString() }}</span>
                        </div>
                    </div>

                    <!-- 地域与法院 -->
                    <div style="padding: 20px; border-bottom: 1px solid #e5e5e5;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-globe" style="color: #666;"></i>
                                <span style="font-weight: 600; color: #1a1a1a;">地域与法院</span>
                            </div>
                            <i class="fas fa-chevron-down" style="color: #666;"></i>
                        </div>
                        <div v-for="region in filterOptions.regions" :key="region.name" style="padding: 8px 0; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-chevron-right" style="color: #999; font-size: 12px;"></i>
                                <span style="color: #1a1a1a; font-size: 14px;">{{ region.name }}</span>
                            </div>
                            <span style="color: #999; font-size: 13px;">{{ region.count.toLocaleString() }}</span>
                        </div>
                    </div>

                    <!-- 文书类型 -->
                    <div style="padding: 20px;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-file-alt" style="color: #666;"></i>
                                <span style="font-weight: 600; color: #1a1a1a;">文书类型</span>
                            </div>
                            <i class="fas fa-chevron-down" style="color: #666;"></i>
                        </div>
                        <div v-for="docType in filterOptions.docTypes" :key="docType.name" style="padding: 8px 0; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="color: #1a1a1a; font-size: 14px;">{{ docType.name }}</span>
                            </div>
                            <span style="color: #999; font-size: 13px;">{{ docType.count.toLocaleString() }}</span>
                        </div>
                    </div>
                </div>

                <!-- 案例列表 -->
                <div style="padding: 20px 0; max-height: calc(100vh - 300px); overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none;">
                    <style>
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    </style>
                    <div 
                        v-for="result in results" 
                        :key="result.id"
                        style="padding: 24px; border-bottom: 1px solid #e5e5e5; cursor: pointer;"
                        @click="viewCaseDetail(result.id)"
                    >
                        <!-- 标题和标签 -->
                        <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px;">
                            <h3 style="flex: 1; font-size: 16px; font-weight: 500; color: #1a73e8; margin: 0; line-height: 1.5;">
                                {{ result.title }}
                            </h3>
                            <span style="padding: 2px 8px; background: #f5f5f5; border-radius: 4px; font-size: 12px; color: #666; white-space: nowrap;">
                                {{ result.category }}
                            </span>
                        </div>

                        <!-- 案件信息 -->
                        <div style="display: flex; gap: 24px; margin-bottom: 12px; font-size: 13px; color: #666;">
                            <span>{{ result.caseNumber }}</span>
                            <span>{{ result.court }}</span>
                            <span>{{ result.date }}</span>
                            <span>{{ result.procedure }}</span>
                        </div>

                        <!-- Tab栏 -->
                        <div @click.stop style="border-bottom: 1px solid #e5e5e5; margin-bottom: 12px;">
                            <div style="display: flex; gap: 24px;">
                                <button 
                                    @click.stop="switchCaseTab(result, 'verdict')"
                                    :style="{
                                        background: 'none',
                                        border: 'none',
                                        color: result.activeTab === 'verdict' ? '#1a1a1a' : '#666',
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        padding: '8px 0',
                                        borderBottom: result.activeTab === 'verdict' ? '2px solid #1a73e8' : 'none',
                                        marginBottom: '-1px'
                                    }"
                                >
                                    本院认为
                                </button>
                                <button 
                                    @click.stop="switchCaseTab(result, 'judgment')"
                                    :style="{
                                        background: 'none',
                                        border: 'none',
                                        color: result.activeTab === 'judgment' ? '#1a1a1a' : '#666',
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        padding: '8px 0',
                                        borderBottom: result.activeTab === 'judgment' ? '2px solid #1a73e8' : 'none',
                                        marginBottom: '-1px'
                                    }"
                                >
                                    裁判结果
                                </button>
                                <button 
                                    @click.stop="switchCaseTab(result, 'laws')"
                                    :style="{
                                        background: 'none',
                                        border: 'none',
                                        color: result.activeTab === 'laws' ? '#1a73e8' : '#666',
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        padding: '8px 0',
                                        borderBottom: result.activeTab === 'laws' ? '2px solid #1a73e8' : 'none',
                                        marginBottom: '-1px'
                                    }"
                                >
                                    相关法条
                                </button>
                            </div>
                        </div>

                        <!-- Tab内容 -->
                        <div @click.stop style="font-size: 14px; color: #1a1a1a; line-height: 1.8; margin-bottom: 12px; white-space: pre-wrap;">
                            <template v-if="result.activeTab === 'verdict'">
                                {{ result.verdictContent || result.summary }}
                            </template>
                            <template v-else-if="result.activeTab === 'judgment'">
                                {{ result.judgmentContent || result.summary }}
                            </template>
                            <template v-else-if="result.activeTab === 'laws'">
                                <div v-if="result.laws" style="background: #f9f9f9; padding: 20px; border-radius: 4px;">
                                    <!-- 法律标题 -->
                                    <h4 style="margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #1a73e8;">
                                        {{ result.laws.title }}
                                    </h4>
                                    
                                    <!-- 法律元信息 -->
                                    <div style="display: flex; gap: 16px; margin-bottom: 16px; font-size: 13px; color: #666; flex-wrap: wrap;">
                                        <span>{{ result.laws.category }}</span>
                                        <span>|</span>
                                        <span>{{ result.laws.publisher }}</span>
                                        <span>|</span>
                                        <span>{{ result.laws.publishDate }} 公布</span>
                                        <span>|</span>
                                        <span>{{ result.laws.effectiveDate }} 施行</span>
                                    </div>
                                    
                                    <!-- 法律内容 -->
                                    <div style="background: white; padding: 16px; border-radius: 4px; border-left: 3px solid #1a73e8; line-height: 1.8; color: #1a1a1a;">
                                        {{ result.laws.content }}
                                    </div>
                                    
                                    <!-- 状态标签 -->
                                    <div style="margin-top: 12px; text-align: right;">
                                        <span style="color: #1a73e8; font-size: 13px; cursor: pointer;">{{ result.laws.status }}</span>
                                    </div>
                                </div>
                                <div v-else style="color: #999;">暂无相关法条信息</div>
                            </template>
                        </div>

                        <!-- 附件 -->
                        <div v-if="result.attachments" style="margin-top: 12px;">
                            <span style="font-size: 13px; color: #666;">关联案件</span>
                            <button style="background: none; border: none; color: #1a1a1a; font-size: 13px; cursor: pointer; padding: 0 8px;">
                                {{ result.attachments }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 案例详情模态框 -->
                <div v-if="showCaseDetailModal" @click="closeCaseDetailModal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px;">
                    <div @click.stop style="background: white; border-radius: 12px; max-width: 1000px; width: 100%; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
                        <!-- 模态框头部 -->
                        <div style="padding: 24px; border-bottom: 2px solid #e5e5e5; flex-shrink: 0;">
                            <h2 style="margin: 0; font-size: 18px; font-weight: 600; color: #1a1a1a; line-height: 1.6;">
                                {{ selectedCase.title }}
                            </h2>
                        </div>

                        <!-- 模态框内容 -->
                        <div style="padding: 32px; overflow-y: auto; flex: 1;">
                            <div style="background: #fafafa; padding: 32px; border-radius: 8px; line-height: 2; color: #1a1a1a; white-space: pre-wrap; font-size: 15px;">{{ selectedCase.fullText }}</div>
                        </div>

                        <!-- 底部操作按钮 -->
                        <div style="padding: 20px; border-top: 1px solid #e5e5e5; display: flex; gap: 12px; justify-content: center; flex-shrink: 0;">
                            <button class="smart-btn-secondary" @click="closeCaseDetailModal" style="padding: 8px 24px;">
                                <i class="fas fa-times"></i> 关闭
                            </button>
                            <button class="smart-btn-secondary" @click="downloadCase" style="padding: 8px 24px;">
                                <i class="fas fa-download"></i> 原文下载
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};
