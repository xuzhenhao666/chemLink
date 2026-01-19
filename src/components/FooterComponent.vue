<template>
    <div>
        <footer id="contact">
            <div class="max-w-[1280px] mx-auto px-6">
                <div class="footer-grid">
                    <div class="footer-col">
                        <a href="#" class="footer-logo">{{ t("footer.brand.name") }}</a>
                        <p style="padding-right:20px; font-size:14px; line-height:1.8;">
                            {{ t("footer.intro") }}
                        </p>
                    </div>

                    <div class="footer-col footer-links">
                        <h4>{{ t("footer.quickNav") }}</h4>
                        <ul>
                            <li><router-link to="/">{{ t("footer.links.home") }}</router-link></li>
                            <li><router-link to="/aboutUs">{{ t("footer.links.About") }}</router-link></li>
                            <li><router-link to="/products">{{ t("footer.links.products") }}</router-link></li>
                            <li><router-link to="/news">{{ t("footer.links.news") }}</router-link></li>
                        </ul>
                    </div>

                    <div class="footer-col footer-links">
                        <h4>{{ t("footer.followUs") }}</h4>
                        <ul>
                            <li><i class="iconfont icon-weixin"></i>{{ t("footer.social.wechat") }}</li>
                            <li><i class="iconfont icon-QQ"></i>{{ t("footer.social.qq") }}</li>
                            <li><i class="iconfont icon-douyin"></i>{{ t("footer.social.douyin") }}</li>
                        </ul>
                    </div>

                    <div class="footer-col contact-list">
                        <h4>{{ t("footer.contactTitle") }}</h4>
                        <ul>
                            <li><i class="iconfont icon-weizhi"></i>{{ t("footer.contact.address") }}</li>
                            <li><i class="iconfont icon-youxiang"></i> {{ t("footer.contact.email") }}</li>
                            <li><i class="iconfont icon-f-phone-dianhua"></i>{{ t("footer.contact.phone") }}</li>
                            <li><i class="iconfont icon-chuanzhen"></i>{{ t("footer.contact.fax") }}</li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>{{ t("footer.copyright") }}</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
footer {
    background-color: #f5f9ff;
    color: #475569;

    /* ✅ 缩小上下内边距 */
    padding: 40px 0 18px;

    border-top: 1px solid #e2e8f0;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;

    /* ✅ 缩小列间距和整体底部间距 */
    gap: 24px;
    margin-bottom: 28px;
}

/* 标题颜色变深 */
.footer-col h4 {
    color: #1e293b;
    margin-bottom: 12px;
    font-size: 15px;
    font-weight: bold;
}

/* Logo颜色变品牌蓝 */
.footer-logo {
    color: var(--brand-blue);
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    display: block;
}

.contact-list li {
    display: flex;
    align-items: flex-start;
    /* 让两列从顶部对齐 */
    gap: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 1.6;
    /* 控制文字高度，保证稳定 */
}

/* 图标列：固定宽度 + 不收缩 */
.contact-list i {
    width: 18px;
    min-width: 18px;
    flex: 0 0 18px;
    text-align: center;

    color: var(--brand-blue);

    /* 关键：去掉手动偏移 */
    margin-top: 0;

    /* 图标本身也给个 line-height */
    line-height: 1.6;
}

.footer-links li {
    margin-bottom: 8px;
}

.footer-links a:hover {
    color: var(--brand-blue);
}

.copyright {
    border-top: 1px solid #e2e8f0;
    padding-top: 14px;
    text-align: center;
    font-size: 12px;
    color: #94a3b8;
}
</style>