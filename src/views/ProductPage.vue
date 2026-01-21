<template>
    <div>
        <main id="products-page" class="bg-slate-50 min-h-[calc(100vh-72px)]">
            <section class="py-10">
                <div class="max-w-[1280px] mx-auto px-6">
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <div class="text-[#0060b0] font-bold text-xs tracking-widest uppercase mb-2">
                                {{ t("productList.topLabel") }}
                            </div>
                            <h1 class="text-3xl font-black text-slate-900">
                                {{ t("productList.title") }}
                            </h1>
                            <p class="text-slate-500 text-sm mt-2">
                                {{ t("productList.subtitle") }}
                            </p>
                        </div>

                        <div class="w-full md:w-auto">
                            <div class="relative group">
                                <input v-model="searchQuery" type="text"
                                    :placeholder="t('productList.searchPlaceholder')"
                                    class="w-full md:w-[380px] bg-white border border-slate-200 rounded-[4px] px-4 py-2.5 text-sm transition-all shadow-sm focus:border-[#0060b0] focus:ring-2 focus:ring-[#0060b0]/10 outline-none" />
                                <span
                                    class="absolute right-3 top-2.5 text-slate-400 group-hover:text-[#0060b0] transition-colors">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <aside class="lg:col-span-3">
                            <div
                                class="bg-white lg:rounded-[4px] border-b lg:border border-slate-200 shadow-sm top-[72px] z-30">
                                <div class="hidden lg:block px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                    <div class="text-sm font-bold text-slate-800">
                                        {{ t("productList.bigCatTitle") }}
                                    </div>
                                </div>

                                <ul
                                    class="flex lg:flex-col overflow-x-auto lg:overflow-x-visible p-2 gap-1 no-scrollbar scroll-smooth">
                                    <li v-for="(cat, index) in productData" :key="index" class="shrink-0 lg:w-full">
                                        <button @click="activeCategoryIndex = index" :class="[
                                            'w-full text-left px-4 py-2 text-sm rounded transition-all whitespace-nowrap lg:whitespace-normal',
                                            activeCategoryIndex === index
                                                ? 'bg-[#0060b0] text-white lg:bg-[#0060b0]/5 lg:text-[#0060b0] font-bold'
                                                : 'text-slate-600 hover:bg-slate-50'
                                        ]">
                                            {{ cat.name }}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        <section class="lg:col-span-9">
                            <div class="bg-white rounded-[4px] border border-slate-200 shadow-sm min-h-[500px]">
                                <div
                                    class="product-header px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white z-20 rounded-t-[4px]">
                                    <div>
                                        <h2 class="text-lg font-bold text-slate-900">
                                            {{ isSearching ? t("productList.searchResult") :
                                                productData[activeCategoryIndex]?.name }}
                                        </h2>
                                    </div>

                                    <div class="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                        {{ t("productList.count", { n: displayProducts.length }) }}
                                    </div>
                                </div>

                                <div class="p-6 space-y-6">
                                    <div v-if="loading" class="text-center py-20 text-slate-400">
                                        {{ t('productsPage.loading') }}
                                    </div>

                                    <div v-else-if="displayProducts.length === 0"
                                        class="text-center py-20 text-slate-400">
                                        {{ t("productList.empty") }}
                                    </div>

                                    <!-- 产品页 -->
                                    <div v-for="(prod, pIdx) in displayProducts" :key="prod.id || pIdx"
                                        class="group p-6 rounded-lg border border-slate-100 hover:border-[#0060b0]/30 hover:shadow-md transition-all bg-white relative min-h-[110px] flex flex-col justify-center">
                                        <div class="pr-28">
                                            <h3
                                                class="text-lg font-bold text-[#0060b0] group-hover:translate-x-1 transition-transform mb-2">
                                                {{ productTitle(prod) }}
                                            </h3>
                                            <div class="flex flex-wrap gap-x-6 gap-y-1">
                                                <div v-if="prod?.acf?.cas" class="flex items-center gap-2">
                                                    <span class="text-[12px] font-bold text-slate-400">
                                                        {{ t("productList.field.cas") }}:
                                                    </span>
                                                    <span class="text-sm text-slate-600 font-mono">{{ prod.acf.cas
                                                        }}</span>
                                                </div>

                                                <div v-if="prod?.acf?.item" class="flex items-center gap-2">
                                                    <span class="text-[12px] font-bold text-slate-400">
                                                        {{ t("productList.field.item") }}:
                                                    </span>
                                                    <span class="text-sm text-slate-600 font-mono">{{ prod.acf.item
                                                        }}</span>
                                                </div>

                                                <div v-if="prod?.acf?.ec" class="flex items-center gap-2">
                                                    <span class="text-[12px] font-bold text-slate-400">
                                                        {{ t("productList.field.ec") }}:
                                                    </span>
                                                    <span class="text-sm text-slate-600 font-mono">{{ prod.acf.ec
                                                        }}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="absolute right-5 bottom-5">
                                            <router-link :to="`/products/${prod.id}`"
                                                class="flex items-center gap-1 text-[13px] font-bold text-[#0060b0] hover:text-[#004a99] transition-all group/btn">
                                                <span>{{ t("productList.detail") }}</span>
                                                <i
                                                    class="fas fa-arrow-right text-[10px] transform group-hover/btn:translate-x-1 transition-transform"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    </div>

</template>

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { apiGetCatalog } from '../api/getProducts.js'

const { t, locale } = useI18n()

// 分类 + 产品（来自 /chemlink/v1/catalog）
const productData = ref([])
const loading = ref(false)

// 交互状态
const activeCategoryIndex = ref(0)

// 搜索：输入框实时值（模板 v-model 绑定这个）
const searchQuery = ref('')

// 搜索：防抖后的关键词（真正用于筛选）
const debouncedQuery = ref('')

// 防抖
let debounceTimer = null
watch(
    searchQuery,
    (val) => {
        if (debounceTimer) clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
            debouncedQuery.value = (val ?? '').toString()
        }, 300) // 防抖时间：300ms（你要更快/更慢可以改）
    },
    { flush: 'post' }
)

onBeforeUnmount(() => {
    if (debounceTimer) clearTimeout(debounceTimer)
})

// 拉取 catalog 数据
async function loadCatalog() {
    loading.value = true
    try {
        const res = await apiGetCatalog()
        productData.value = Array.isArray(res?.categories) ? res.categories : []
        if (activeCategoryIndex.value >= productData.value.length) activeCategoryIndex.value = 0
    } finally {
        loading.value = false
    }
}

onMounted(loadCatalog)

// helpers：根据当前语言选择展示字段
const isEn = computed(() => String(locale).toLowerCase().startsWith('en'))

function pickText(zh, en) {
    const z = (zh ?? '').toString().trim()
    const e = (en ?? '').toString().trim()
    return isEn.value ? (e || z) : (z || e)
}

function productTitle(prod) {
    return pickText(prod?.acf?.productname || prod?.title, prod?.acf?.productname_en)
}

// 是否正在搜索（输入框有内容就算）
const isSearching = computed(() => searchQuery.value.trim().length > 0)

// 最终展示的产品列表
// 规则：
// - 不搜索时：展示当前选中分类下 products
// - 搜索时：遍历所有分类下产品
// - 匹配字段：仅【产品名称（中/英）】或【CAS】
const displayProducts = computed(() => {
    const q = debouncedQuery.value.trim().toLowerCase()
    if (!q) return productData.value[activeCategoryIndex.value]?.products || []

    const results = []
    for (const cat of productData.value) {
        const list = Array.isArray(cat?.products) ? cat.products : []
        for (const p of list) {
            const nameZh = p?.acf?.productname || p?.title || ''
            const nameEn = p?.acf?.productname_en || ''
            const cas = p?.acf?.cas || ''

            const hay = [nameZh, nameEn, cas]
                .filter(Boolean)
                .map((v) => String(v).toLowerCase())
                .join(' | ')

            if (hay.includes(q)) results.push(p)
        }
    }
    return results
})
</script>


<style scoped>
.product-header {
    top: 72px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

@media (max-width: 1024px) {
    aside {
        position: sticky;
        top: 72px;
        z-index: 30;
    }

    .product-header {
        top: 128px;
        z-index: 20;
    }
}

input:focus {
    border-color: #0060b0 !important;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 96, 176, 0.1);
}
</style>
