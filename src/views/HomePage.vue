<template>
    <div>
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <span class="hero-tag">{{ t("home.heroTag") }}</span>

                    <h1>{{ t("home.heroTitle") }}</h1>

                    <div class="hero-divider"></div>

                    <p>
                        {{ t("home.heroDesc1") }}<br />
                        {{ t("home.heroDesc2") }}
                    </p>

                    <div>
                        <a href="products.html" class="btn-primary">
                            {{ t("home.btnProducts") }}
                        </a>
                        <a href="#contact" class="btn-outline-white">
                            {{ t("home.btnContact") }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="features-section">
                <div class="features-grid">
                    <div class="feature-item">
                        <div class="feature-icon-box"><i class="fas fa-users-cog"></i></div>
                        <div class="feature-text">
                            <h3>{{ t("home.features.t1") }}</h3>
                            <p>{{ t("home.features.d1") }}</p>
                        </div>
                    </div>

                    <div class="feature-item">
                        <div class="feature-icon-box"><i class="fas fa-file-contract"></i></div>
                        <div class="feature-text">
                            <h3>{{ t("home.features.t2") }}</h3>
                            <p>{{ t("home.features.d2") }}</p>
                        </div>
                    </div>

                    <div class="feature-item">
                        <div class="feature-icon-box"><i class="fas fa-flask"></i></div>
                        <div class="feature-text">
                            <h3>{{ t("home.features.t3") }}</h3>
                            <p>{{ t("home.features.d3") }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <section id="about" class="section-padding">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <h4 style="color:var(--brand-blue); font-weight:bold; margin-bottom:10px;">
                            {{ t("home.about.label") }} / {{ t("home.about.labelEn") }}
                        </h4>

                        <h2 class="section-title" style="white-space: pre-line;">
                            {{ t("home.about.title") }}
                        </h2>

                        <p class="text-desc">
                            {{ t("home.about.p1") }}
                        </p>

                        <p class="text-desc">
                            {{ t("home.about.p2") }}
                        </p>

                        <p class="text-desc">
                            {{ t("home.about.p3") }}
                        </p>

                        <div style="margin-top:30px;">
                            <span style="font-weight:bold; margin-right:20px;">
                                <i class="fas fa-check-circle" style="color:var(--brand-blue);"></i>
                                {{ t("home.about.badge1") }}
                            </span>

                            <span style="font-weight:bold;">
                                <i class="fas fa-check-circle" style="color:var(--brand-blue);"></i>
                                {{ t("home.about.badge2") }}
                            </span>
                        </div>
                    </div>

                    <div class="about-img">
                        <img src="../images/企业图.png" alt="Factory Building" />
                    </div>
                </div>
            </div>
        </section>


        <!-- 核心产品系列 -->
        <section id="core-products" class="section-padding bg-white">
            <div class="container">
                <div class="text-center mb-16">
                    <h2 class="section-title text-3xl font-bold text-slate-900 mb-4">核心产品系列</h2>
                    <p class="text-slate-500 text-base max-w-2xl mx-auto">以客户需求为研发导向，为您提供性能、稳定的新材料解决方案。</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <!-- 产品1 -->
                    <div class="product-showcase group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div class="product-image-wrapper bg-gradient-to-br from-slate-50 to-slate-100 p-6">
                            <img src="/src/assets/images/负碳醇.png" alt="CO₂基聚碳酸酯多元醇 Cardiol 2202" class="w-full h-auto max-h-60 object-contain transition-transform duration-500 group-hover:scale-105">
                        </div>
                        <div class="product-info p-6">
                            <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0060b0] transition-colors">负碳醇 (NCA-PC25)</h3>
                            <p class="text-sm text-slate-600 mb-5 leading-relaxed">基于二氧化碳基聚氨酯技术，通过创新工艺将废弃二氧化碳转化为高性能多元醇。每生产1吨可减少约192kg碳排放。</p>
                            <div class="flex flex-wrap gap-2 mb-6">
                                <span class="px-3 py-1 bg-[#0060b0]/5 text-[#0060b0] text-xs font-medium rounded-full">运动鞋材</span>
                                <span class="px-3 py-1 bg-[#0060b0]/5 text-[#0060b0] text-xs font-medium rounded-full">高回弹</span>
                                <span class="px-3 py-1 bg-[#0060b0]/5 text-[#0060b0] text-xs font-medium rounded-full">BV认证</span>
                            </div>
                            <router-link to="/nca-pc25" class="flex items-center gap-2 text-[#0060b0] font-bold transition-all duration-300 group-hover:gap-3">
                                <span>查看详情</span>
                                <i class="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                            </router-link>
                        </div>
                    </div>
                    
                    <!-- 产品2 -->
                    <div class="product-showcase group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div class="product-image-wrapper bg-gradient-to-br from-slate-50 to-slate-100 p-6">
                            <img src="/src/assets/images/CO2FIT.png" alt="CO₂FIT 258 增塑体" class="w-full h-auto max-h-60 object-contain transition-transform duration-500 group-hover:scale-105">
                        </div>
                        <div class="product-info p-6">
                            <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0060b0] transition-colors">CO₂FIT 258 增塑体</h3>
                            <p class="text-sm text-slate-600 mb-5 leading-relaxed">二氧化碳基高性能弹性体材料。具备优异的抗化学性、回弹性及抗撕裂性。适用于瑜伽垫、发泡鞋材等。</p>
                            <div class="flex flex-wrap gap-2 mb-6">
                                <span class="px-3 py-1 bg-[#0060b0]/5 text-[#0060b0] text-xs font-medium rounded-full">瑜伽垫</span>
                                <span class="px-3 py-1 bg-[#0060b0]/5 text-[#0060b0] text-xs font-medium rounded-full">高防滑
</span>
                                <span class="px-3 py-1 bg-[#0060b0]/5 text-[#0060b0] text-xs font-medium rounded-full">低碳足迹</span>
                            </div>
                            <router-link to="/co2fit-258" class="flex items-center gap-2 text-[#0060b0] font-bold transition-all duration-300 group-hover:gap-3">
                                <span>查看详情</span>
                                <i class="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="news" class="section-padding">
            <div class="container">
                <div style="display:flex; justify-content:space-between; align-items:end; margin-bottom:20px;">
                    <h2 class="section-title" style="margin-bottom:0;">
                        {{ t("home.news.title") }}
                    </h2>

                    <a href="/news" style="color:var(--brand-blue); font-weight:bold;">
                        {{ t("home.news.more") }}
                    </a>
                </div>

                <!-- 从wordpress导入数据 -->
                <div class="news-grid">
                    <div v-for="news in featuredNews" class="news-item" :key="news.id">
                        <span class="date">{{ formatDate(news.acf.date || news.date) }}</span>

                        <a :href="`/news/${news.id}`" class="news-title">
                            {{ news.acf.title || news.title.rendered }}
                        </a>

                        <p class="news-excerpt">
                            {{ news.acf.content }}
                        </p>
                    </div>
                </div>
                <!-- 导完 -->
            </div>
        </section>

    </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted, computed } from "vue";
const { t, locale } = useI18n();

// 导入新闻 API
import { apiGetNewsList } from "@/api/getNews";

// 新闻数据和状态
const newsList = ref([]);
const loading = ref(false);

// 格式化日期
function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

// 加载新闻数据
async function loadNews() {
    loading.value = true;
    try {
        const news = await apiGetNewsList();
        newsList.value = Array.isArray(news) ? news : [];
    } catch (error) {
        console.error("Failed to load news:", error);
        newsList.value = [];
    } finally {
        loading.value = false;
    }
}

// 精选新闻（前3条）
const featuredNews = computed(() => {
    return newsList.value.slice(0, 3);
});

// 组件挂载时加载数据
onMounted(() => {
    loadNews();
});
</script>

<style>
body {
    color: var(--text-main);
    line-height: 1.6;
    background-color: var(--bg-body);
}

a {
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
}

ul {
    list-style: none;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
}

.btn-primary {
    display: inline-block;
    background-color: var(--brand-blue);
    color: white;
    padding: 12px 32px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
}

.btn-primary:hover {
    background-color: var(--brand-blue-hover);
    transform: translateY(-2px);
}

.btn-outline-white {
    display: inline-block;
    background: transparent;
    color: white;
    border: 1px solid white;
    padding: 11px 31px;
    border-radius: 4px;
    font-weight: bold;
    margin-left: 15px;
    font-size: 14px;
}

.btn-outline-white:hover {
    background: white;
    color: var(--brand-blue);
}

.hero {
    position: relative;
    height: 650px;
    background: linear-gradient(to right, rgba(0, 50, 120, .7), rgba(0, 100, 200, .3)),
        url('https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    color: white;
}

.hero-content {
    max-width: 900px;
    padding-top: 40px;
}

.hero-tag {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 2px;
    margin-bottom: 10px;
    display: block;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .2);
}

.hero h1 {
    font-size: 56px;
    line-height: 1.1;
    margin-bottom: 25px;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0, 0, 0, .2);
}

.hero-divider {
    width: 80px;
    height: 4px;
    background: white;
    margin-bottom: 25px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
}

.hero p {
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.6;
    font-weight: 400;
    margin-bottom: 40px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .2);
}

.features-section {
    padding: 60px 0;
    background: white;
    position: relative;
    z-index: 10;
    margin-top: -50px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .05);
    border-radius: 4px;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 0 40px;
}

.feature-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.feature-icon-box {
    width: 60px;
    height: 60px;
    background: var(--brand-light-blue);
    color: var(--brand-blue);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
}

.feature-text h3 {
    font-size: 18px;
    margin-bottom: 8px;
    color: var(--brand-blue);
}

.feature-text p {
    font-size: 13px;
    color: #666;
    line-height: 1.5;
}

.section-padding {
    padding: 100px 0;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.section-title {
    font-size: 32px;
    margin-bottom: 30px;
    font-weight: bold;
    color: #111;
}

.text-desc {
    color: #555;
    margin-bottom: 20px;
    text-align: justify;
}

.about-img img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .1);
}

.bg-gray {
    background-color: #f1f5f9;
}

.product-card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 50px;
}

.prod-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    transition: .3s;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
}

.prod-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, .08);
    border-color: var(--brand-blue);
}

.prod-img {
    height: 300px;
    overflow: hidden;
}

.prod-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .5s;
}

.prod-card:hover .prod-img img {
    transform: scale(1.05);
}

.prod-body {
    padding: 35px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.prod-cat {
    font-size: 12px;
    color: var(--brand-blue);
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.prod-title {
    font-size: 24px;
    margin-bottom: 15px;
}

.prod-desc {
    color: #666;
    font-size: 14px;
    margin-bottom: 25px;
    flex: 1;
}

.prod-meta {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.tag {
    background: #f0f2f5;
    padding: 4px 10px;
    font-size: 12px;
    color: #555;
    border-radius: 4px;
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;
}

.news-item {
    background: white;
    border-bottom: 3px solid transparent;
    transition: .3s;
    padding: 30px;
}

.news-item:hover {
    border-bottom-color: var(--brand-blue);
    box-shadow: 0 10px 30px rgba(0, 0, 0, .05);
}

.date {
    color: #999;
    font-size: 13px;
    margin-bottom: 10px;
    display: block;
}

.news-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    line-height: 1.4;
    display: block;
}

.news-excerpt {
    font-size: 14px;
    color: #666;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

/* 1. 收紧产品区域整体宽度 */
#products .container {
    max-width: 1200px;
    /* 原来是 1400px */
}

/* 2. 卡片整体高度增加 */
.prod-card {
    min-height: 520px;
    /* 你可以在 480–560 之间调 */
}

/* 3. 让卡片内部纵向更舒展 */
.prod-body {
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* 4. 描述区域占据更多纵向空间 */
.prod-desc {
    flex-grow: 1;
}

/* 5. 底部 meta 和按钮自然沉底（视觉更高） */
.prod-meta {
    margin-top: auto;
}

/* =========================
     响应式适配
     ========================= */

/* <= 1024px：缩间距、两列更紧凑 */
@media (max-width:1024px) {
    .container {
        padding: 0 24px;
    }

    .section-padding {
        padding: 80px 0;
    }

    .about-grid {
        gap: 48px;
    }

    .features-grid {
        gap: 24px;
        padding: 0 24px;
    }

    .product-card-grid {
        gap: 20px;
    }

    .news-grid {
        gap: 20px;
    }

    .hero {
        height: 560px;
    }

    .hero h1 {
        font-size: 46px;
    }
}

/* <= 768px：核心栅格全部改单列 */
@media (max-width:768px) {
    .container {
        padding: 0 16px;
    }

    .hero {
        height: auto;
        padding: 88px 0 72px;
    }

    .hero-content {
        padding-top: 0;
    }

    .hero-tag {
        font-size: 16px;
    }

    .hero h1 {
        font-size: 34px;
        margin-bottom: 18px;
    }

    .hero-divider {
        width: 56px;
        margin-bottom: 18px;
    }

    .hero p {
        font-size: 15px;
        margin-bottom: 26px;
        letter-spacing: .5px;
    }

    .btn-outline-white {
        margin-left: 10px;
        margin-top: 10px;
    }

    .btn-primary,
    .btn-outline-white {
        padding: 10px 22px;
        font-size: 13px;
    }

    .features-section {
        margin-top: -24px;
        padding: 34px 0;
        border-radius: 6px;
    }

    .features-grid {
        grid-template-columns: 1fr;
        padding: 0 16px;
    }

    .feature-icon-box {
        width: 52px;
        height: 52px;
        font-size: 22px;
    }

    .section-padding {
        padding: 64px 0;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }

    .section-title {
        font-size: 26px;
        margin-bottom: 18px;
    }

    .text-desc {
        font-size: 14px;
    }

    .product-card-grid {
        grid-template-columns: 1fr;
    }

    .prod-img {
        height: 220px;
    }

    .prod-body {
        padding: 22px;
    }

    .prod-title {
        font-size: 20px;
    }

    .news-grid {
        grid-template-columns: 1fr;
    }

    .news-item {
        padding: 22px;
    }
}

/* <= 480px：再压一档字号/按钮/间距 */
@media (max-width:480px) {
    .hero {
        padding: 80px 0 64px;
    }

    .hero h1 {
        font-size: 30px;
    }

    .hero p {
        font-size: 14px;
    }

    .prod-img {
        height: 200px;
    }

    .prod-meta {
        gap: 10px;
    }

    .news-title {
        font-size: 16px;
    }
}

.text-desc {
    color: #555;
    margin-bottom: 20px;
    text-align: justify;
    /* 添加下面这一行 */
    text-indent: 2em;
}
</style>