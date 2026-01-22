<template>
    <div>
        <!-- 新闻详情页标题 -->
        <section class="news-header">
            <div class="container">
                <h1 class="news-title">{{ t("news.title") }}</h1>
            </div>
        </section>

        <!-- 新闻详情内容 -->
        <section id="news-detail" class="section-padding">
            <div class="container">
                <!-- 加载状态 -->
            <div v-if="loading" class="text-center py-20">
                <div class="loading-spinner"></div>
            </div>
            
            <!-- 新闻内容 -->
            <div v-else-if="currentNews.id" class="news-detail-wrapper">
                <article class="news-detail-content">
                    <h2 class="detail-title">{{ currentNews.title }}</h2>
                    <div class="detail-meta">
                        <span class="detail-date">{{ currentNews.date }}</span>
                    </div>
                    <div class="detail-body">
                        <p>{{ currentNews.content }}</p>
                    </div>
                </article>
            </div>
            
            <!-- 没有数据时显示空白 -->
            <div v-else></div>


            </div>
        </section>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { apiGetNews } from "@/api/getNews";

const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();

// 新闻数据和状态
const currentNews = ref({
    id: '',
    title: '',
    date: '',
    content: ''
});
const loading = ref(false);
const error = ref(false);

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

// 加载新闻详情
async function loadNewsDetail() {
    const newsId = route.params.id;
    if (!newsId) {
        router.back();
        return;
    }
    
    loading.value = true;
    error.value = false;
    
    try {
        // 调用 API 获取新闻详情
        const newsData = await apiGetNews({ id: newsId });
        
        // 处理返回数据
        const news = Array.isArray(newsData) ? newsData[0] : newsData;
        
        if (news) {
            // 映射 API 数据到组件使用的数据结构
            currentNews.value = {
                id: news.id,
                title: news.acf.title || news.title.rendered,
                date: formatDate(news.acf.date || news.date),
                content: news.acf.content
            };
        } else {
            error.value = true;
        }
    } catch (err) {
        console.error("Failed to load news detail:", err);
        error.value = true;
    } finally {
        loading.value = false;
    }
}

// 组件挂载时加载数据
onMounted(() => {
    loadNewsDetail();
});
</script>

<style scoped>
/* 新闻详情页面样式 */
.news-detail-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
}

.news-detail-content {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.detail-title {
    font-size: 28px;
    font-weight: bold;
    color: #111;
    margin-bottom: 15px;
    line-height: 1.3;
}

.detail-meta {
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eaeaea;
}

.detail-date {
    color: #999;
    font-size: 14px;
}

.detail-img {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    border-radius: 8px;
    overflow: hidden;
}

.detail-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.detail-img img:hover {
    transform: scale(1.02);
}

.detail-body {
    font-size: 16px;
    line-height: 1.8;
    color: #555;
}

.detail-body p {
    margin-bottom: 20px;
}

.detail-body h3 {
    font-size: 22px;
    font-weight: bold;
    color: #111;
    margin: 30px 0 15px;
}

.detail-body ul {
    margin-left: 20px;
    margin-bottom: 20px;
}

.detail-body li {
    margin-bottom: 10px;
    list-style-type: disc;
}





/* 响应式适配 */
@media (max-width: 768px) {
    .news-detail-content {
        padding: 25px;
    }
    
    .detail-title {
        font-size: 24px;
    }
}
</style>