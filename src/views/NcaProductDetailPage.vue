<template>
    <div class="nca-detail-page bg-white">
        <!-- 顶部横幅 -->
        <header class="relative h-[500px] flex items-center text-white overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/40"></div>

            <div class="container mx-auto px-6 md:px-12 relative z-10">
                <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">NCA 系列</h1>
                <h2 class="text-2xl md:text-3xl font-light mb-8 text-blue-100">二氧化碳基聚氨酯技术负碳材料</h2>
                <div class="max-w-2xl mb-12">
                    <p class="text-lg leading-relaxed opacity-90">
                        基于自主研发的二氧化碳捕集与催化聚合工艺，将工业废弃二氧化碳转化为具有优异性能的功能性多元醇。
                        实现从"碳源"到"材料"的绿色闭环。
                    </p>
                </div>

                <div class="flex gap-4">
                    <button 
                        @click="downloadTestReport"
                        class="bg-transparent text-white border border-white px-8 py-3 rounded font-medium hover:bg-white/10 transition">
                        下载检测报告
                    </button>
                    <button 
                        @click="downloadBVCertificate"
                        class="bg-transparent text-white border border-white px-8 py-3 rounded font-medium hover:bg-white/10 transition">
                        下载 BV 证书
                    </button>
                </div>
            </div>
        </header>

        <!-- 产品描述区域 -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 md:px-12">
                <div class="flex flex-col lg:flex-row items-center gap-16">
                    <div class="lg:w-1/2 relative">
                        <div class="bg-gray-100 rounded-lg overflow-hidden shadow-xl h-[400px] w-full flex items-center justify-center bg-cover bg-center group" 
                             :style="{ backgroundImage: `url(${ncaImage1})` }">
                            <div class="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 text-sm rounded backdrop-blur-sm">
                                负碳醇 (NCA-PC25)
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2">
                        <div class="flex items-center gap-4 mb-4">
                            <h3 class="text-2xl font-bold text-gray-800">产品描述 (Description)</h3>
                        </div>
                        <h4 class="text-xl font-bold text-brand-blue mb-4">牌号：负碳醇（NCA-PC25）</h4>
                        
                        <div class="text-gray-600 leading-relaxed space-y-4 text-justify">
                            <p>
                                NCA系列是铂昕锐（BXR）基于自主研发的二氧化碳基聚氨酯技术推出的高性能负碳材料产品线。该系列以 <strong>NCA-PC25</strong> 为核心产品，通过创新的二氧化碳捕集与催化聚合工艺，将工业废弃二氧化碳转化为具有优异性能的功能性多元醇。
                            </p>
                            <p>
                                该材料实现了从"碳源"到"材料"的绿色闭环，不仅在固碳减排方面表现卓越，更突破了传统PPC材料的应用限制，兼具优异的物理性能与加工适用性。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 核心产品特点 -->
        <section class="py-16 bg-section-gray">
            <div class="container mx-auto px-6 md:px-12">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800">核心产品特点</h2>
                    <div class="h-1 w-12 bg-brand-blue mx-auto mt-4 rounded"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-t-4 border-brand-blue">
                        <div class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue mb-6">
                            <i class="fas fa-tree text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-3 text-gray-800">固碳减排</h4>
                        <p class="text-gray-500 leading-relaxed text-sm">
                            每生产1000kg NCA-PC25，较传统PU材料减少约192kg二氧化碳排放，相当于18棵乔木的年固碳量，助力碳中和目标。
                        </p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-t-4 border-green-500">
                        <div class="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6">
                            <i class="fas fa-flask text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-3 text-gray-800">性能优化</h4>
                        <p class="text-gray-500 leading-relaxed text-sm">
                            通过脱催化剂、脱副产物等精炼工艺，显著提升反应活性与加工适用性，突破了传统PPC材料的应用限制。
                        </p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-t-4 border-orange-500">
                        <div class="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6">
                            <i class="fas fa-layer-group text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-3 text-gray-800">多功能适配</h4>
                        <p class="text-gray-500 leading-relaxed text-sm">
                            兼容性强，可与聚氨酯、TPU、EVA等多种体系复配，广泛适用于发泡、注塑、挤出等多种成型工艺。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 权威认证与性能指标 -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 md:px-12">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">权威认证与性能指标</h2>
                    <div class="h-1 w-12 bg-brand-blue mx-auto mt-4 rounded"></div>
                    <p class="mt-4 text-gray-500 max-w-3xl mx-auto">
                        获必维（BV）产品碳足迹认证，实现二氧化碳利用可量化、可追溯；经第三方检测，关键物理性能表现优异。
                    </p>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:items-start">
                    <!-- 左侧：表格 -->
                    <div class="order-2 lg:order-1">
                        <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <i class="fas fa-table mr-2 text-brand-blue"></i> 关键性能指标 (Key Indicators)
                        </h3>
                        <div class="overflow-x-auto rounded-lg shadow-sm border border-gray-100">
                            <table class="w-full tech-table">
                                <thead>
                                    <tr>
                                        <th>检测项目 (Item)</th>
                                        <th>性能表现 (Performance)</th>
                                        <th>备注/对比</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>回弹性 (Resilience)</td>
                                        <td>优异 (Superior)</td>
                                        <td>优于一般高弹PU</td>
                                    </tr>
                                    <tr>
                                        <td>耐冲击性 (Impact)</td>
                                        <td>高 (High)</td>
                                        <td>第三方检测验证</td>
                                    </tr>
                                    <tr>
                                        <td>压缩形变 (Compression Set)</td>
                                        <td>低 (Low)</td>
                                        <td>长期受压不易塌陷</td>
                                    </tr>
                                    <tr>
                                        <td>碳足迹 (Carbon Footprint)</td>
                                        <td>显著降低</td>
                                        <td>获BV认证</td>
                                    </tr>
                                    <tr>
                                        <td>反应活性</td>
                                        <td>高</td>
                                        <td>精炼工艺优化</td>
                                    </tr>
                                    <tr>
                                        <td>体系兼容性</td>
                                        <td>优良</td>
                                        <td>PU/TPU/EVA适配</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-800 border border-blue-100">
                            <i class="fas fa-certificate mr-2"></i>
                            <strong>认证信息：</strong> 产品已获必维（BV）产品碳足迹认证，支持客户完成绿色产品认证与碳减排目标申报。
                        </div>
                    </div>

                    <!-- 右侧：雷达图 -->
                    <div class="order-1 lg:order-2">
                        <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center lg:justify-start">
                            <i class="fas fa-chart-area mr-2 text-brand-blue"></i> 综合性能雷达图 (Performance Radar)
                        </h3>
                        <div class="bg-white border border-gray-100 rounded-lg p-6 shadow-sm h-[400px] flex flex-col justify-center items-center">
                            <div class="w-full h-full">
                                <canvas ref="radarChartCanvas"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 应用案例 -->
        <section class="py-20 bg-section-gray">
            <div class="container mx-auto px-6 md:px-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center">
                    <span class="w-2 h-6 bg-brand-blue mr-3 rounded-full"></span>
                    应用案例：高弹PU发泡运动鞋材
                </h3>
                
                <div class="bg-white rounded-xl p-8 shadow-sm">
                    <div class="flex flex-col lg:flex-row gap-10 items-center">
                        <div class="lg:w-2/5">
                            <img :src="ncaImage2" alt="Sports Shoe Material Application" class="rounded-lg shadow-md w-full object-cover h-64">
                        </div>
                        <div class="lg:w-3/5">
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                <strong class="text-brand-blue text-lg block mb-2">用于高弹PU发泡：吸震与支撑的完美平衡</strong>
                                NCA-PC25鞋垫相比传统弹性PU，在吸震与支撑的平衡性上表现更优。其独特的慢回弹结构可吸收较大的冲击力，显著降低运动对关节的损伤，同时保持足弓稳定支撑。目前已获安踏、特步等品牌应用于专业运动鞋系列 [cite: 17]。
                            </p>
                            
                            <div class="overflow-x-auto rounded-lg border border-gray-100">
                                <table class="w-full tech-table">
                                    <thead>
                                        <tr>
                                            <th class="bg-slate-700">对比项目</th>
                                            <th class="bg-slate-700">吸震/支撑平衡</th>
                                            <th class="bg-slate-700">长时间行走</th>
                                            <th class="bg-slate-700">碳足迹</th>
                                            <th class="bg-slate-700">安全性</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="font-bold text-brand-blue bg-blue-50">
                                            <td>NCA-PC25 鞋垫</td>
                                            <td>更优 (慢回弹结构)</td>
                                            <td>不易塌陷</td>
                                            <td>降低约 4%</td>
                                            <td>绿色环保/安全舒适</td>
                                        </tr>
                                        <tr class="text-gray-500">
                                            <td>传统弹性 PU</td>
                                            <td>一般</td>
                                            <td>易疲劳/变形</td>
                                            <td>基准值</td>
                                            <td>一般</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-4 flex justify-between items-center text-xs text-gray-400">
                                <span>* 数据基于内部测试与第三方认证对比</span>
                                <span class="flex items-center gap-1"><i class="fas fa-check-circle text-green-500"></i> 已商业化应用</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 返回顶部按钮 -->
        <button 
            id="backToTop" 
            v-show="showBackToTop"
            @click="scrollToTop"
            class="fixed bottom-6 right-6 z-50 bg-[#0060b0] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#004e90] transition">
            ↑
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import ncaImage1 from '@/images/NCA1.png'
import ncaImage2 from '@/images/NCA2.jpg'

const showBackToTop = ref(false)
const radarChartCanvas = ref(null)
let radarChart = null

const handleScroll = () => {
    showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 下载文件通用函数
const downloadFile = async (filePath, filename) => {
    try {
        const response = await fetch(filePath)
        if (!response.ok) {
            throw new Error('文件不存在')
        }
        const blob = await response.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(downloadUrl)
        return true
    } catch (error) {
        console.error('文件下载失败:', error)
        return false
    }
}

// 创建并下载文本文件（占位文件）
const createAndDownloadText = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
}

// 下载检测报告
const downloadTestReport = async () => {
    // 先尝试从服务器下载文件（如果文件存在）
    const filePath = '/files/NCA-PC25-检测报告.pdf'
    const downloaded = await downloadFile(filePath, 'NCA-PC25-检测报告.pdf')
    
    // 如果文件不存在，创建占位文件
    if (!downloaded) {
        const content = `NCA-PC25 产品检测报告

产品名称：负碳醇 (NCA-PC25)
产品牌号：NCA-PC25

检测项目及结果：

1. 回弹性 (Resilience)
   性能表现：优异 (Superior)
   备注：优于一般高弹PU

2. 耐冲击性 (Impact)
   性能表现：高 (High)
   备注：第三方检测验证

3. 压缩形变 (Compression Set)
   性能表现：低 (Low)
   备注：长期受压不易塌陷

4. 反应活性
   性能表现：高
   备注：精炼工艺优化

5. 体系兼容性
   性能表现：优良
   备注：PU/TPU/EVA适配

检测机构：第三方检测机构
检测日期：2025年

注：此文件为占位文件，如需正式检测报告，请联系我们。
联系方式：contact@chemlink-qz.com`
        
        createAndDownloadText(content, 'NCA-PC25-检测报告.txt')
    }
}

// 下载 BV 证书
const downloadBVCertificate = async () => {
    // 先尝试从服务器下载文件（如果文件存在）
    const filePath = '/files/NCA-PC25-BV证书.pdf'
    const downloaded = await downloadFile(filePath, 'NCA-PC25-BV证书.pdf')
    
    // 如果文件不存在，创建占位文件
    if (!downloaded) {
        const content = `NCA-PC25 BV 产品碳足迹认证证书

产品名称：负碳醇 (NCA-PC25)
产品牌号：NCA-PC25

认证信息：
产品已获必维（BV）产品碳足迹认证，实现二氧化碳利用可量化、可追溯。

认证机构：必维（Bureau Veritas）
认证日期：2025年

认证内容：
- 产品碳足迹认证
- 二氧化碳利用可量化
- 二氧化碳利用可追溯
- 支持客户完成绿色产品认证
- 支持碳减排目标申报

注：此文件为占位文件，如需正式BV证书，请联系我们。
联系方式：contact@chemlink-qz.com`
        
        createAndDownloadText(content, 'NCA-PC25-BV证书.txt')
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    
    // 初始化雷达图
    nextTick(() => {
        if (radarChartCanvas.value && window.Chart) {
            const ctx = radarChartCanvas.value.getContext('2d')
            radarChart = new window.Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['固碳能力', '回弹性', '耐冲击性', '反应活性', '压缩形变', '兼容性'],
                    datasets: [{
                        label: 'NCA-PC25 性能评分',
                        data: [95, 90, 88, 85, 92, 90],
                        backgroundColor: 'rgba(0, 91, 172, 0.2)',
                        borderColor: '#005bac',
                        pointBackgroundColor: '#005bac',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#005bac',
                        borderWidth: 2,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: { color: '#e2e8f0' },
                            grid: { color: '#e2e8f0' },
                            pointLabels: {
                                font: { size: 12, weight: '600' },
                                color: '#475569'
                            },
                            suggestedMin: 0,
                            suggestedMax: 100,
                            ticks: {
                                backdropColor: 'transparent',
                                display: false
                            }
                        }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw
                                }
                            }
                        }
                    }
                }
            })
        }
    })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    // 销毁图表实例
    if (radarChart) {
        radarChart.destroy()
        radarChart = null
    }
})
</script>

<style scoped>
/* 全局字体设置 */
.nca-detail-page {
    font-family: 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
}

/* 品牌色定义 */
.text-brand-blue {
    color: #005bac;
}

.bg-brand-blue {
    background-color: #005bac;
}

.hover\:bg-brand-blue-dark:hover {
    background-color: #004a8c;
}

.border-brand-blue {
    border-color: #005bac;
}

/* 区域背景色 */
.bg-section-gray {
    background-color: #f5f7fa;
}

/* 表格样式优化 */
.tech-table th {
    background-color: #005bac;
    color: white;
    font-weight: 500;
}

.tech-table tr:nth-child(even) {
    background-color: #f8fafc;
}

.tech-table td,
.tech-table th {
    padding: 12px;
    text-align: center;
    border: 1px solid #e2e8f0;
    font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    header {
        height: 400px;
    }

    header h1 {
        font-size: 2.5rem;
    }

    header h2 {
        font-size: 1.5rem;
    }
}
</style>