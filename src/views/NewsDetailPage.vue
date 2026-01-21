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
                <div class="news-detail-wrapper">
                    <article class="news-detail-content">
                        <h2 class="detail-title">{{ currentNews.title[locale] || currentNews.title['zh-CN'] }}</h2>
                        <div class="detail-meta">
                            <span class="detail-date">{{ currentNews.date }}</span>
                        </div>
                        <div class="detail-img">
                            <img :src="currentNews.image" :alt="currentNews.title[locale] || currentNews.title['zh-CN']" />
                        </div>
                        <div class="detail-body">
                            <p>{{ currentNews.excerpt[locale] || currentNews.excerpt['zh-CN'] }}</p>
                            <p>{{ currentNews.content[locale] || currentNews.content['zh-CN'] }}</p>
                            <h3>{{ locale === 'zh-CN' ? '新闻要点' : 'News Highlights' }}</h3>
                            <ul>
                                <li>{{ locale === 'zh-CN' ? '新闻的主要信息点1' : 'Main news point 1' }}</li>
                                <li>{{ locale === 'zh-CN' ? '新闻的主要信息点2' : 'Main news point 2' }}</li>
                                <li>{{ locale === 'zh-CN' ? '新闻的主要信息点3' : 'Main news point 3' }}</li>
                            </ul>
                            <p>{{ locale === 'zh-CN' ? '通过新闻详情页面，用户可以获取更全面、更深入的新闻信息，提升网站的内容价值和用户体验。' : 'Through the news detail page, users can obtain more comprehensive and in-depth news information, enhancing the content value and user experience of the website.' }}</p>
                        </div>
                    </article>


                </div>


            </div>
        </section>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useRoute } from "vue-router";

const { t, locale } = useI18n();
const route = useRoute();

// 导入新闻数据
import { newsList } from "@/data/news";

// 获取当前新闻ID
const newsId = computed(() => {
  return parseInt(route.params.id) || 1;
});

// 获取当前新闻详情
const currentNews = computed(() => {
  return newsList.find(news => news.id === newsId.value) || newsList[0];
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