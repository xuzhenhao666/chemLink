<template>
    <div class="co2fit-detail-page bg-white">
        <!-- 顶部横幅 -->
        <header class="relative h-[500px] flex items-center text-white overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-700/50"></div>

            <div class="container mx-auto px-6 md:px-12 relative z-10">
                <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">CO<sub>2</sub>FIT 系列</h1>
                <h2 class="text-2xl md:text-3xl font-light mb-8 text-blue-100">二氧化碳基高性能弹性体材料</h2>
                <div class="max-w-2xl mb-12">
                    <p class="text-lg leading-relaxed opacity-90">
                        独特的二氧化碳基多元醇与特殊化学品改性工艺，将工业二氧化碳转化为功能材料。
                        实现高性能与低碳足迹的协同发展。
                    </p>
                </div>


            </div>
        </header>

        <!-- 产品描述区域 -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 md:px-12">
                <div class="flex flex-col lg:flex-row items-center gap-16">
                    <div class="lg:w-1/2 relative">
                        <div class="bg-gray-100 rounded-lg overflow-hidden shadow-xl h-[400px] w-full flex items-center justify-center bg-cover bg-center group"
                             :style="{ backgroundImage: `url(${co2fitImage})` }">
                            <div class="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 text-sm rounded backdrop-blur-sm">
                                产品 CO<sub>2</sub>FIT 258
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2">
                        <div class="flex items-center gap-4 mb-4">
                            <h3 class="text-2xl font-bold text-gray-800">产品描述 (Description)</h3>
                        </div>
                        <h4 class="text-xl font-bold text-brand-blue mb-4">牌号：CO<sub>2</sub>FIT 258</h4>

                        <div class="text-gray-600 leading-relaxed space-y-4 text-justify">
                            <p>
                                CO<sub>2</sub>FIT系列是铂昕锐（BXR）推出的二氧化碳基高性能弹性体材料产品线。该系列以 <strong>CO<sub>2</sub>FIT 258</strong> 为代表产品，通过独特的二氧化碳基多元醇与特殊化学品改性工艺，将工业二氧化碳转化为具备优异综合性能的功能材料，实现高性能与低碳足迹的协同发展。
                            </p>
                            <p>
                                材料具有优异的抗化学性、回弹性，以及优异的抗撕裂性、可挠性。其碳足迹显著低于传统对比材料。该材料工艺友好，容易进行注塑、挤出工艺生产和超临界发泡工艺生产。
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
                            <i class="fas fa-leaf text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-3 text-gray-800">低碳足迹</h4>
                        <p class="text-gray-500 leading-relaxed text-sm">
                            材料生产过程中减少传统石油基原料使用，显著降低产品全生命周期碳足迹，符合绿色环保趋势。
                        </p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-t-4 border-green-500">
                        <div class="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6">
                            <i class="fas fa-gem text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-3 text-gray-800">性能卓越</h4>
                        <p class="text-gray-500 leading-relaxed text-sm">
                            具备优异的回弹性、抗撕裂性、抗化学性和可挠性，在各种严苛环境下仍能保持良好的物理性能。
                        </p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-t-4 border-orange-500">
                        <div class="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6">
                            <i class="fas fa-cogs text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-3 text-gray-800">工艺友好</h4>
                        <p class="text-gray-500 leading-relaxed text-sm">
                            加工适应性强，适用于注塑、挤出及超临界发泡等多种成型工艺，满足多样化生产需求。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 核心产品指标 -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 md:px-12">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">核心产品指标</h2>
                    <div class="h-1 w-12 bg-brand-blue mx-auto mt-4 rounded"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center md:items-start">
                        <!-- 左侧：表格 -->
                        <div class="order-2 lg:order-1">
                            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <i class="fas fa-table mr-2 text-brand-blue"></i> 技术参数表 (Technical Data)
                            </h3>
                            <div class="overflow-x-auto rounded-lg shadow-sm border border-gray-100">
                                <table class="w-full tech-table">
                                    <thead>
                                        <tr>
                                            <th>项目 (Item)</th>
                                            <th>数值 (Value)</th>
                                            <th>测试方法</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>熔融指数 MI 2.16</td>
                                            <td>1.8 g/10min</td>
                                            <td>ASTM D1238</td>
                                        </tr>
                                        <tr>
                                            <td>密度</td>
                                            <td>0.938 g/cm³</td>
                                            <td>ASTM D1505</td>
                                        </tr>
                                        <tr>
                                            <td>降伏点强度</td>
                                            <td>45 Kg/cm²</td>
                                            <td>ASTM D638</td>
                                        </tr>
                                        <tr>
                                            <td>断裂点强度</td>
                                            <td>150 Kg/cm²</td>
                                            <td>ASTM D638</td>
                                        </tr>
                                        <tr>
                                            <td>硬度 (Shore A)</td>
                                            <td>88</td>
                                            <td>ASTM D2240</td>
                                        </tr>
                                        <tr>
                                            <td>硬度 (Shore D)</td>
                                            <td>38</td>
                                            <td>ASTM D2240</td>
                                        </tr>
                                        <tr>
                                            <td>熔点</td>
                                            <td>84 ℃</td>
                                            <td>DSC</td>
                                        </tr>
                                        <tr>
                                            <td>软化点</td>
                                            <td>60 ℃</td>
                                            <td>ASTM D1525</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 右侧：雷达图 -->
                        <div class="order-1 lg:order-2">
                            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center lg:justify-start">
                                <i class="fas fa-chart-radar mr-2 text-brand-blue"></i> 产品性能可视化 (Performance Visualization)
                            </h3>
                            <div class="bg-white border border-gray-100 rounded-lg p-6 shadow-sm h-[400px] flex flex-col justify-center items-center">
                                <div class="w-full h-full">
                                    <canvas ref="indicatorsChart"></canvas>
                                </div>
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
                    应用案例：瑜伽垫性能对比
                </h3>

                <div class="bg-white rounded-xl p-8 shadow-sm">
                    <div class="flex flex-col lg:flex-row gap-10 items-center">
                        <div class="lg:w-2/5">
                            <img :src="yogaImage" alt="Yoga Mat Detail" class="rounded-lg shadow-md w-full object-cover h-64">
                        </div>
                        <div class="lg:w-3/5">
                            <p class="text-gray-600 mb-6 leading-relaxed">
                                <strong class="text-brand-blue text-lg block mb-2">用于瑜伽垫，具有优异的压缩回弹</strong>
                                合适的拉伸强度和动/静摩擦系数以满足舒适性和功能性。CO<sub>2</sub>FIT 258 材料在实际应用中展现出了远超市面普通产品的性能优势。
                            </p>

                            <div class="overflow-x-auto rounded-lg border border-gray-100">
                                <table class="w-full tech-table">
                                    <thead>
                                        <tr>
                                            <th class="bg-slate-700">对比项目</th>
                                            <th class="bg-slate-700">压缩回弹</th>
                                            <th class="bg-slate-700">最大伸长率</th>
                                            <th class="bg-slate-700">静摩擦系数</th>
                                            <th class="bg-slate-700">耐磨性%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="font-bold text-brand-blue bg-blue-50">
                                            <td>瑜伽垫 (CO<sub>2</sub>FIT 258)</td>
                                            <td>优异</td>
                                            <td>503%</td>
                                            <td>0.785</td>
                                            <td>0.42</td>
                                        </tr>
                                        <tr class="text-gray-500">
                                            <td>市面产品</td>
                                            <td>优秀</td>
                                            <td>158%</td>
                                            <td>0.274</td>
                                            <td>0.38</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-4 flex justify-between items-center text-xs text-gray-400">
                                <span>* 数据对比基于标准测试</span>
                                <span class="flex items-center gap-1"><i class="fas fa-check-circle text-green-500"></i> 实测数据</span>
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
import co2fitImage from '@/images/CO2FIT2.png'
import yogaImage from '@/images/yoga.jpg'

const showBackToTop = ref(false)
const indicatorsChart = ref(null)
let chartInstance = null

const handleScroll = () => {
    showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    // 绘制图表：产品指标可视化 (雷达图/六芒星图)
    nextTick(() => {
        if (indicatorsChart.value && window.Chart) {
            const ctx = indicatorsChart.value.getContext('2d')
            chartInstance = new window.Chart(ctx, {
                type: 'radar', // 修改为雷达图
                data: {
                    // 选取6个关键指标作为六芒星的顶点
                    labels: ['降伏强度', '断裂强度', '硬度(A)', '硬度(D)', '熔点', '软化点'],
                    datasets: [{
                        label: 'CO2FIT 258 性能指标',
                        data: [45, 150, 88, 38, 84, 60],
                        backgroundColor: 'rgba(0, 91, 172, 0.2)', // 品牌蓝半透明填充
                        borderColor: '#005bac', // 品牌蓝边框
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
                        r: { // 雷达图的径向轴配置
                            angleLines: {
                                color: '#e2e8f0' // 轴线颜色
                            },
                            grid: {
                                color: '#e2e8f0' // 网格线颜色
                            },
                            pointLabels: {
                                font: {
                                    size: 12,
                                    weight: '600'
                                },
                                color: '#475569' // 标签颜色
                            },
                            // 设置建议的最大值，使图表看起来更饱满，避免数值触顶
                            suggestedMin: 0,
                            suggestedMax: 160,
                            ticks: {
                                backdropColor: 'transparent', // 隐藏刻度背景
                                display: false // 隐藏刻度数字，使图表更简洁
                            }
                        }
                    },
                    plugins: {
                        legend: { display: false }, // 隐藏图例
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    // 在提示框中添加单位
                                    const units = ['Kg/cm²', 'Kg/cm²', 'Shore A', 'Shore D', '℃', '℃']
                                    return context.dataset.label + ': ' + context.raw + ' ' + units[context.dataIndex]
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
    if (chartInstance) {
        chartInstance.destroy()
        chartInstance = null
    }
})
</script>

<style scoped>
/* 全局字体设置 */
.co2fit-detail-page {
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
    padding: 10px;
    text-align: center;
    border: 1px solid #e2e8f0;
    font-size: 13px;
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
