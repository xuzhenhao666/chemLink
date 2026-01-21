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
                <div class="news-grid">
                    <!-- 写死的新闻数据 -->
                    <div class="news-item" v-for="news in paginatedNews" :key="news.id">
                        <div class="news-img">
                            <img :src="news.image" :alt="news.title" />
                        </div>
                        <div class="news-content">
                            <span class="date">{{ news.date }}</span>
                            <a :href="`/news/${news.id}`" class="news-title">{{ news.title[locale] || news.title['zh-CN'] }}</a>
                            <p class="news-excerpt">{{ news.excerpt[locale] || news.excerpt['zh-CN'] }}</p>
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
import { computed, ref } from "vue";
const { t, locale } = useI18n();

// 导入新闻数据
import { newsList } from "@/data/news";

// 分页状态变量
const currentPage = ref(1); // 当前页码
const pageSize = ref(5); // 每页条数

// 计算属性
const totalPages = computed(() => {
  return Math.ceil(newsList.length / pageSize.value);
});

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return newsList.slice(start, end);
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