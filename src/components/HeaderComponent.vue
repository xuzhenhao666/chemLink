<template>
    <div class="sticky top-0 z-50 bg-white border-b border-slate-200"><!-- 导航栏 -->
        <nav class="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div class="max-w-[1280px] mx-auto px-6 h-[72px] flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center gap-3">
                    <div class="w-[38px] h-[38px] bg-[#0060b0] rounded-[3px] flex items-center justify-center shrink-0">
                        <span class="text-white font-bold text-lg">CL</span>
                    </div>
                    <div class="flex flex-col justify-center select-none">
                        <div class="text-[17px] font-bold text-[#000] leading-tight tracking-wide">
                            {{ t("brand.name") }}
                        </div>
                        <div
                            class="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-[2px] scale-95 origin-left">
                            {{ t("brand.slogan") }}
                        </div>
                    </div>
                </div>

                <!-- PC 菜单 -->
                <div class="hidden md:flex items-center">
                    <div class="flex items-center gap-10 mr-12">
                        <router-link to="/" class="nav-link text-center py-2" :class="{ 'active': $route.path === '/' }"
                            exact-active-class="active">
                            {{ t("nav.home") }}
                        </router-link>

                        <router-link to="/about" class="nav-link text-center py-2"
                            :class="{ 'active': $route.path === '/aboutUs' }" active-class="active">
                            {{ t("nav.about") }}
                        </router-link>

                        <router-link to="/products" class="nav-link text-center py-2"
                            :class="{ 'active': $route.path === '/products' }" active-class="active">
                            {{ t("nav.products") }}
                        </router-link>

                        <router-link to="/news" class="nav-link text-center py-2"
                            :class="{ 'active': $route.path === '/news' }" active-class="active">
                            {{ t("nav.news") }}
                        </router-link>

                        <router-link to="/contact" class="nav-link text-center py-2"
                            :class="{ 'active': $route.path === '/contact' }" active-class="active">
                            {{ t("nav.contact") }}
                        </router-link>
                    </div>
                    <div class="h-4 w-px bg-slate-300 mr-5"></div>
                    <div
                        class="text-[13px] font-medium text-slate-400 flex items-center gap-1 mr-6 cursor-pointer select-none">
                        <span @click="changeLang('zh-CN')" :class="locale === 'zh-CN'
                            ? 'text-[#0060b0] font-bold'
                            : 'hover:text-slate-600 transition-colors'">
                            {{ t("lang.zh") }}
                        </span>

                        <span>|</span>

                        <span @click="changeLang('en-US')" :class="locale === 'en-US'
                            ? 'text-[#0060b0] font-bold'
                            : 'hover:text-slate-600 transition-colors'">
                            {{ t("lang.en") }}
                        </span>
                    </div>
                </div>

                <!-- Mobile 按钮 -->
                <div class="md:hidden flex items-center">
                    <button @click="toggleMobileMenu" id="mobileMenuBtn"
                        class="text-slate-700 hover:text-[#0060b0] p-2">
                        <i class="iconfont icon-caidan"></i>
                    </button>
                </div>
            </div>

            <!-- Mobile 菜单 -->
            <div id="mobileMenu" v-show="isVisible"
                class="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 top-[72px] shadow-lg z-40">
                <div class="flex flex-col p-4 gap-4">
                    <router-link to="/" class="nav-link text-center py-2 border-b border-slate-100"
                        :class="{ 'active': $route.path === '/' }" exact-active-class="active">
                        {{ t("nav.home") }}
                    </router-link>

                    <router-link to="/about" class="nav-link text-center py-2 border-b border-slate-100"
                        :class="{ 'active': $route.path === '/aboutUs' }" active-class="active">
                        {{ t("nav.about") }}
                    </router-link>

                    <router-link to="/products" class="nav-link text-center py-2 border-b border-slate-100"
                        :class="{ 'active': $route.path === '/products' }" active-class="active">
                        {{ t("nav.products") }}
                    </router-link>

                    <router-link to="/news" class="nav-link text-center py-2 border-b border-slate-100"
                        :class="{ 'active': $route.path === '/news' }" active-class="active">
                        {{ t("nav.news") }}
                    </router-link>

                    <router-link to="/contact" class="nav-link text-center py-2"
                        :class="{ 'active': $route.path === '/contact' }" active-class="active">
                        {{ t("nav.contact") }}
                    </router-link>
                </div>
            </div>
        </nav>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const isVisible = ref(false)


const toggleMobileMenu = () => {
    isVisible.value = !isVisible.value
}

const changeLang = (lang) => {
    locale.value = lang
    localStorage.setItem("locale", lang)
}
</script>

<style scoped>
/* 顶部导航链接 */
.nav-link {
    font-size: 15px;
    color: #333;
    font-weight: 500;
    transition: color 0.2s;
    text-decoration: none;
}

.nav-link:hover {
    color: #0060b0;
}

.nav-link.active {
    color: #0060b0;
}
</style>