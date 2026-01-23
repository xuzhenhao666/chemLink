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

                <!-- 正常详情（跟 detail.html 一样的三列 Grid） -->
                <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <!-- 左侧：编号信息 + 返回 -->
                    <div class="lg:col-span-3 order-2 lg:order-1">
                        <div class="bg-white rounded-[4px] shadow-sm border border-slate-100 overflow-hidden">
                            <div class="flex justify-between items-center px-5 py-4 border-b border-slate-50">
                                <span class="text-sm text-slate-400">{{ t("productsPage.info.item") }}</span>
                                <span class="text-sm font-bold text-slate-700 font-mono">
                                    {{ viewProduct.item || "-" }}
                                </span>
                            </div>

                            <div class="flex justify-between items-center px-5 py-4 border-b border-slate-50">
                                <span class="text-sm text-slate-400">{{ t("productsPage.info.cas") }}</span>
                                <span class="text-sm font-bold text-slate-700 font-mono">
                                    {{ viewProduct.cas || "-" }}
                                </span>
                            </div>

                            <div class="flex justify-between items-center px-5 py-4">
                                <span class="text-sm text-slate-400">{{ t("productsPage.info.ec") }}</span>
                                <span class="text-sm font-bold text-slate-700 font-mono">
                                    {{ viewProduct.ec || "-" }}
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

                    <!-- 中间：正文 -->
                    <div
                        class="lg:col-span-6 order-1 lg:order-2 bg-white rounded-[4px] shadow-sm border border-slate-100 p-8 min-h-[500px]">
                        <h1 class="text-2xl font-bold text-[#002B4D] mb-2 leading-tight">
                            {{ viewProduct.title || "-" }}
                        </h1>
                        <p v-if="viewProduct.altTitle" class="text-sm text-slate-400 mb-8">
                            {{ viewProduct.altTitle }}
                        </p>

                        <div class="mb-8">
                            <h3 class="section-badge">{{ t("productsPage.descTitle") }}</h3>
                            <p class="text-slate-600 text-sm leading-relaxed text-justify">
                                {{ viewProduct.desc || t("productsPage.descEmpty") }}
                            </p>
                        </div>

                        <div class="mb-8">
                            <h3 class="section-badge">{{ t("productsPage.groupTitle") }}</h3>
                            <p class="text-slate-600 text-sm">{{ viewProduct.category || "-" }}</p>
                        </div>

                        <div v-if="viewProduct.synonyms" class="mb-8">
                            <h3 class="section-badge">{{ t("productsPage.synonymsTitle") }}</h3>
                            <p class="text-slate-600 text-sm">{{ viewProduct.synonyms }}</p>
                        </div>

                        <div class="mb-2">
                            <h3 class="section-badge">{{ t("productsPage.usesTitle") }}</h3>
                            <p class="text-slate-600 text-sm leading-relaxed text-justify">
                                {{ viewProduct.uses || t("productsPage.usesEmpty") }}
                            </p>
                        </div>
                    </div>

                    <!-- 右侧：操作卡片 -->
                    <div class="lg:col-span-3 order-3 lg:order-3">
                        <div class="bg-white rounded-[4px] shadow-sm border border-slate-100 p-6 sticky top-24">
                            <div class="text-sm font-bold text-slate-800 mb-4 text-center">
                                {{ t("productsPage.actionsTitle") }}
                            </div>

                            <div class="space-y-3">
                                <button
                                    class="w-full btn-primary py-2.5 rounded-[2px] text-sm font-bold transition shadow-sm"
                                    @click="onRequestSample">
                                    {{ t("productsPage.btnSample") }}
                                </button>

                                <button class="w-full btn-outline py-2.5 rounded-[2px] text-sm font-bold transition"
                                    @click="onRequestDocs">
                                    {{ t("productsPage.btnDocs") }}
                                </button>
                            </div>
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
import { apiGetProducts } from "@/api/getProducts"
import { useI18n } from "vue-i18n"

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()

const loading = ref(false)
/**
 * 经过清洗后的产品数据（只保留页面需要的字段）
 * {
 *  id, slug, link, modified,
 *  name: { zh, en },
 *  description: { zh, en },
 *  application: { zh, en },
 *  category: { zh, en },
 *  item, cas, ec
 * }
 */
const productRaw = ref(null)

const isEn = computed(() => String(locale.value || "").toLowerCase().startsWith("en"))

const stripHtml = (s) => String(s || "").replace(/<[^>]+>/g, "").trim()

const normalizeProduct = (raw) => {
    if (!raw || !raw.id) return null
    const acf = raw.acf || {}

    return {
        id: raw.id,
        slug: raw.slug || "",
        link: raw.link || "",
        modified: raw.modified || "",
        // 中英字段分开存，方便按 locale 切换
        name: {
            zh: (acf.name || stripHtml(raw.title?.rendered)) || "",
            en: acf.name_en || "",
        },
        item: acf.item || "",
        cas: acf.cas || "",
        ec: acf.ec || "",
        description: {
            zh: acf.description || "",
            en: acf.description_en || "",
        },
        application: {
            zh: acf.application || "",
            en: acf.application_en || "",
        },
        category: {
            zh: acf.category || "",
            en: acf.category_en || "",
        },
    }
}

// 页面最终使用的数据（根据 locale 自动选择中/英）
const viewProduct = computed(() => {
    const p = productRaw.value
    if (!p) return {}

    const lang = isEn.value ? "en" : "zh"
    const other = isEn.value ? "zh" : "en"

    const title = p.name?.[lang] || p.name?.[other] || ""
    const altTitle = p.name?.[other] && p.name?.[other] !== title ? p.name[other] : ""

    return {
        id: p.id,
        title,
        altTitle,
        item: p.item,
        cas: p.cas,
        ec: p.ec,
        desc: p.description?.[lang] || p.description?.[other] || "",
        uses: p.application?.[lang] || p.application?.[other] || "",
        category: p.category?.[lang] || p.category?.[other] || "",
        // 如果后续需要扩展字段，这里统一从 normalizeProduct 加即可
        link: p.link,
        modified: p.modified,
    }
})

const notFound = computed(() => !loading.value && !viewProduct.value?.id)

const getProductDetail = async (id) => {
    if (!id) {
        productRaw.value = null
        return
    }
    loading.value = true
    try {
        // 兼容：apiGetProducts 可能接收 {id} 或直接接收 id
        const result = await apiGetProducts({ id })
        const payload = result?.data ?? result

        // 兼容：有的接口返回数组（列表筛选），取第一个
        const raw = Array.isArray(payload) ? (payload[0] || null) : payload

        productRaw.value = normalizeProduct(raw)
        console.log("product(normalized)=", productRaw.value)
    } catch (e) {
        console.error(e)
        productRaw.value = null
    } finally {
        loading.value = false
    }
}

const goBackToList = () => router.push("/products")

const onRequestSample = () => {
    alert("已点击：申请样品（后续可接表单/接口）")
}

const onRequestDocs = () => {
    alert("已点击：获取 MSDS/TDS（后续可接下载/接口）")
}

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
