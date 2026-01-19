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
                                    <div v-if="displayProducts.length === 0" class="text-center py-20 text-slate-400">
                                        {{ t("productList.empty") }}
                                    </div>

                                    <div v-for="(prod, pIdx) in displayProducts" :key="pIdx"
                                        class="group p-6 rounded-lg border border-slate-100 hover:border-[#0060b0]/30 hover:shadow-md transition-all bg-white relative min-h-[110px] flex flex-col justify-center">
                                        <div class="pr-28">
                                            <h3
                                                class="text-lg font-bold text-[#0060b0] group-hover:translate-x-1 transition-transform mb-2">
                                                {{ prod.title }}
                                            </h3>

                                            <div class="flex flex-wrap gap-x-6 gap-y-1">
                                                <div v-if="prod.cas !== '-'" class="flex items-center gap-2">
                                                    <span class="text-[12px] font-bold text-slate-400">
                                                        {{ t("productList.field.cas") }}:
                                                    </span>
                                                    <span class="text-sm text-slate-600 font-mono">{{ prod.cas }}</span>
                                                </div>

                                                <div v-if="prod.item" class="flex items-center gap-2">
                                                    <span class="text-[12px] font-bold text-slate-400">
                                                        {{ t("productList.field.item") }}:
                                                    </span>
                                                    <span class="text-sm text-slate-600 font-mono">{{ prod.item
                                                    }}</span>
                                                </div>

                                                <div v-if="prod.ec" class="flex items-center gap-2">
                                                    <span class="text-[12px] font-bold text-slate-400">
                                                        {{ t("productList.field.ec") }}:
                                                    </span>
                                                    <span class="text-sm text-slate-600 font-mono">{{ prod.ec }}</span>
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
import { ref, computed } from 'vue'
import { productCatalog } from '../utils/data.js'
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// 1. 原始数据 (保持你提供的数组结构)
const productData = ref(productCatalog)


// 2. 交互状态
const activeCategoryIndex = ref(0) // 当前选中的分类
const searchQuery = ref('') // 搜索内容

// 3. 计算属性：是否正在搜索
const isSearching = computed(() => searchQuery.value.trim().length > 0)

// 4. 计算属性：最终展示的产品列表
const displayProducts = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()

    if (isSearching.value) {
        // 如果在搜索，遍历所有大类下的产品进行过滤
        const results = []
        productData.value.forEach(cat => {
            cat.products.forEach(prod => {
                if (
                    prod.title.toLowerCase().includes(query) ||
                    prod.cas.toLowerCase().includes(query) ||
                    prod.uses.toLowerCase().includes(query)
                ) {
                    results.push(prod)
                }
            })
        })
        return results
    } else {
        // 如果没搜索，显示当前选中分类下的产品
        return productData.value[activeCategoryIndex.value]?.products || []
    }
})


</script>

<style scoped>
/* 1. 基础吸顶逻辑：PC端 */
.product-header {
    /* 这里的 72px 对应你的 HeaderComponent 高度 */
    top: 72px;
    /* 增加微弱阴影增强吸顶时的视觉层级 */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

/* 2. 隐藏滚动条 */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* 3. 响应式适配：移动端 */
@media (max-width: 1024px) {

    /* 移动端左侧分类栏变为横向吸顶 */
    aside {
        position: sticky;
        top: 72px;
        /* 紧贴导航栏 */
        z-index: 30;
    }

    /* 移动端产品标题头：需要避开 72px(导航) + 分类栏的高度(约56px) */
    .product-header {
        top: 128px;
        z-index: 20;
    }
}

/* 搜索框焦点 */
input:focus {
    border-color: #0060b0 !important;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 96, 176, 0.1);
}
</style>