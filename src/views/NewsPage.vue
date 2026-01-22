<template>
    <div>
        <!-- 新闻页面标题 -->
        <section class="news-header">
            <div class="container">
                <h1 class="news-title">{{ t("news.title") }}</h1>
            </div>
        </section>

        <!-- 新闻列表 -->
        <section id="news-list" class="section-padding">
            <div class="container">
                <div v-if="loading" class="text-center py-20">
                    <div class="loading-spinner"></div>
                </div>
                <div v-else-if="newsList.length === 0"></div>
                <div v-else class="news-grid">
                    <div class="news-item" v-for="news in paginatedNews" :key="news.id">
                        <div class="news-content">
                            <span class="date">{{ formatDate(news.acf.date || news.date) }}</span>
                            <a :href="`/news/${news.id}`" class="news-title">{{ news.acf.title || news.title.rendered }}</a>
                            <p class="news-excerpt">{{ news.acf.content }}</p>
                        </div>
                    </div>
                </div>

                <!-- 分页控件 -->
                <div class="pagination" v-if="totalPages > 1">
                    <button 
                        class="pagination-btn" 
                        :disabled="currentPage === 1"
                        @click="currentPage--"
                    >
                        <i class="fas fa-chevron-left"></i>
                    </button>

                    <button 
                        v-for="page in totalPages" 
                        :key="page"
                        class="pagination-btn"
                        :class="{ active: currentPage === page }"
                        @click="currentPage = page"
                    >
                        {{ page }}
                    </button>

                    <button 
                        class="pagination-btn" 
                        :disabled="currentPage === totalPages"
                        @click="currentPage++"
                    >
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed, ref, onMounted } from "vue";
const { t, locale } = useI18n();

// 导入新闻 API
import { apiGetNewsList } from "@/api/getNews";

// 新闻数据和状态
const newsList = ref([]);
const loading = ref(false);

// 分页状态变量
const currentPage = ref(1); // 当前页码
const pageSize = ref(5); // 每页条数

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

// 格式化日期
function formatDate(dateString) {
    if (!dateString) return '';
    
    // 处理不同的日期格式
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

// 计算属性
const totalPages = computed(() => {
  return Math.ceil(newsList.value.length / pageSize.value);
});

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return newsList.value.slice(start, end);
});

// 组件挂载时加载数据
onMounted(() => {
    loadNews();
});
</script>

<style scoped>
/* 新闻页面特定样式 */
.news-header {
    padding: 40px 0;
    background: white;
    border-bottom: 1px solid #eaeaea;
}

.news-title {
    font-size: 32px;
    font-weight: bold;
    color: #111;
    text-align: center;
}

/* 新闻列表样式 */
.news-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 20px;
}

.news-item {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.news-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.news-img {
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.news-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.news-item:hover .news-img img {
    transform: scale(1.05);
}

.news-content {
    padding: 25px;
}

.date {
    color: #999;
    font-size: 13px;
    margin-bottom: 12px;
    display: block;
}

.news-content .news-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    line-height: 1.4;
    display: block;
    color: #111;
    text-align: left;
}

.news-content .news-title:hover {
    color: var(--brand-blue);
}

.news-excerpt {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 0;
}

/* 分页控件样式 */
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 10px;
}

.pagination-btn {
    padding: 8px 16px;
    border: 1px solid #eaeaea;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pagination-btn:hover:not(:disabled) {
    border-color: var(--brand-blue);
    color: var(--brand-blue);
}

.pagination-btn.active {
    background: var(--brand-blue);
    color: white;
    border-color: var(--brand-blue);
}

.pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination-btn i {
    font-size: 12px;
}

/* 响应式适配 */
@media (max-width: 768px) {
    .news-title {
        font-size: 26px;
    }
    
    .news-item {
        flex-direction: column;
    }
    
    .news-img {
        height: 200px;
    }
    
    .news-content {
        padding: 20px;
    }
    
    .news-content .news-title {
        font-size: 18px;
    }
    
    .pagination {
        gap: 5px;
    }
    
    .pagination-btn {
        padding: 6px 12px;
        font-size: 13px;
    }
}
</style>