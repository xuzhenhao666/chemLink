<template>
    <div class="bg-[#F9FAFB] text-slate-900 flex flex-col min-h-screen">
        <!-- Banner（跟 detail.html 一样的渐变背景） -->
        <section class="banner-bg py-16 text-center border-b border-slate-100">
            <h1 class="text-3xl font-black text-[#002B4D] mb-3">
                {{ t("productsPage.bannerTitle") }}
            </h1>
            <p class="text-slate-400 text-xs tracking-wider uppercase">
                {{ t("productsPage.bannerSubtitle") }}
            </p>
        </section>

        <main class="flex-grow py-10 px-6">
            <div class="max-w-[1280px] mx-auto">
                <!-- 加载态 -->
                <div v-if="loading" class="text-center py-20 text-slate-400">
                    {{ t("productsPage.loading") }}
                </div>

                <!-- 未找到 -->
                <div v-else-if="notFound"
                    class="text-center py-20 bg-white rounded-[4px] shadow-sm border border-slate-100">
                    <div class="text-slate-300 mb-4 text-5xl">🧪</div>
                    <h2 class="text-xl font-bold text-slate-700">
                        {{ t("productsPage.notFoundTitle") }}
                    </h2>
                    <p class="text-slate-500 mt-2 mb-6 text-sm">
                        {{ t("productsPage.notFoundDesc") }}
                    </p>

                    <button class="btn-primary px-6 py-2 rounded text-sm font-bold" @click="goBackToList">
                        {{ t("productsPage.backToCenter") }}
                    </button>
                </div>

                <!-- 正常详情（两列布局：左侧信息 + 右侧正文） -->
                <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <!-- 左侧：编号信息 + 返回 -->
                    <div class="lg:col-span-4 order-2 lg:order-1">
                        <div class="bg-white rounded-[4px] shadow-sm border border-slate-100 overflow-hidden">
                            <div class="flex justify-between items-center px-5 py-4 border-b border-slate-50">
                                <span class="text-sm text-slate-400">{{ t("productsPage.info.item") }}</span>
                                <span class="text-sm font-bold text-slate-700 font-mono">
                                    {{ product.item || "-" }}
                                </span>
                            </div>

                            <div class="flex justify-between items-center px-5 py-4 border-b border-slate-50">
                                <span class="text-sm text-slate-400">{{ t("productsPage.info.cas") }}</span>
                                <span class="text-sm font-bold text-slate-700 font-mono">
                                    {{ product.cas || "-" }}
                                </span>
                            </div>

                            <div class="flex justify-between items-center px-5 py-4">
                                <span class="text-sm text-slate-400">{{ t("productsPage.info.ec") }}</span>
                                <span class="text-sm font-bold text-slate-700 font-mono">
                                    {{ product.ec || "-" }}
                                </span>
                            </div>
                        </div>

                        <button
                            class="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-[#0060b0] mt-6 transition-colors"
                            @click="goBackToList">
                            <span class="text-base leading-none">←</span>
                            {{ t("productsPage.backList") }}
                        </button>
                    </div>

                    <!-- 右侧：正文内容（占据更多空间） -->
                    <div
                        class="lg:col-span-8 order-1 lg:order-2 bg-white rounded-[4px] shadow-sm border border-slate-100 p-8 min-h-[500px]">
                        <h1 class="text-2xl font-bold text-[#002B4D] mb-8 leading-tight">
                            {{ product.title || "-" }}
                        </h1>

                        <div class="mb-8">
                            <h3 class="section-badge">{{ t("productsPage.descTitle") }}</h3>
                            <p class="text-slate-600 text-sm leading-relaxed text-justify">
                                {{ product.desc || t("productsPage.descEmpty") }}
                            </p>
                        </div>

                        <div class="mb-8">
                            <h3 class="section-badge">{{ t("productsPage.groupTitle") }}</h3>
                            <p class="text-slate-600 text-sm">{{ product.category || "-" }}</p>
                        </div>

                        <div v-if="product.synonyms" class="mb-8">
                            <h3 class="section-badge">{{ t("productsPage.synonymsTitle") }}</h3>
                            <p class="text-slate-600 text-sm">{{ product.synonyms }}</p>
                        </div>

                        <div class="mb-2">
                            <h3 class="section-badge">{{ t("productsPage.usesTitle") }}</h3>
                            <p class="text-slate-600 text-sm leading-relaxed text-justify">
                                {{ product.uses || t("productsPage.usesEmpty") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>


<script setup>
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { apiGetProducts } from "@/api/getProducts";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const router = useRouter()
const route = useRoute()
const loading = ref(false)
const productDetail = ref(null)


// 把后端返回的数据（尤其是 ACF 字段）映射为页面统一使用的字段名
const product = computed(() => {
    const raw = productDetail.value || {}
    const acf = raw.acf || {}
    const isEn = String(locale || '').toLowerCase().startsWith('en')

    return {
        id: raw.id,
        // 标题：优先使用 ACF 的中/英产品名；没有则回退 WP title
        title: isEn ? (acf.name_en || raw.title?.rendered || "") : (acf.name || raw.title?.rendered || ""),
        item: acf.item || "",
        cas: acf.cas || "",
        ec: acf.ec || "",
        // 描述 & 用途
        desc: isEn ? (acf.description_en || "") : (acf.description || ""),
        uses: isEn ? (acf.application_en || "") : (acf.application || ""),
        category: isEn ? (acf.category_en || "") : (acf.category || ""),
        // 其它字段（如果后续要用）
        link: raw.link || "",
    }
})

const notFound = computed(() => !loading.value && !product.value?.id)

const getProductDetail = async (id) => {
    if (!id) {
        productDetail.value = null
        return
    }
    loading.value = true
    try {
        // 你的 apiGetProducts 使用 axios params，需要传对象才能生成 ?id=xxx
        const result = await apiGetProducts({ id })
        // 兼容：有的接口直接返回对象；有的返回数组/对象包装
        productDetail.value = Array.isArray(result) ? (result[0] || null) : (result?.data ?? result ?? null)
        console.log("productDetail=", productDetail.value)
    } finally {
        loading.value = false
    }
}

const goBackToList = () => router.push("/products")

// 支持路由变化时复用组件（/products/:id 切换不同 id）
watch(
    () => route.params.id,
    (id) => {
        getProductDetail(id)
    },
    { immediate: true }
)
</script>

<style scoped>
/* 来自 detail.html 的风格：banner-bg / btn-primary / btn-outline */
.banner-bg {
    background: linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%);
}

.btn-primary {
    background-color: #0060b0;
    color: white;
}

.btn-primary:hover {
    background-color: #004e90;
}

.btn-outline {
    background-color: white;
    border: 1px solid #0060b0;
    color: #0060b0;
}

.btn-outline:hover {
    background-color: #f0f7ff;
}

.section-badge {
    font-size: 12px;
    font-weight: 700;
    color: #0060b0;
    background: rgba(239, 246, 255, 0.6);
    display: inline-block;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.75rem;
}
</style>
