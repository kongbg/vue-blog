import {scrollTopNum, scrollToTop} from "../../libs/viewScroll";

export const frameMixins = {
    data() {
        return {
            startNum: 0,
            iScroll: 0,
            isUpRoll: false,
            isScrolling: false
        }
    },
    mounted() {
        // 监听（绑定）滚轮 滚动事件
        let _this = this;
        this.$nextTick(() => {
            window.addEventListener('scroll', _this.handleScroll, true);
            scrollToTop()
        })
    },
    methods: {
        handleScroll() {
            // 页面滚动距顶部距离
            let scrollTop = scrollTopNum(),
                scrollDiffere = scrollTop - this.iScroll;
            this.iScroll = scrollTop;
            this.isScrolling = true;
            if (this.startNum == 0) {
                this.isUpRoll = false;
                this.startNum++;
            } else {
                if (scrollDiffere < -20) {
                    this.isUpRoll = false;  // 向上滚动
                } else if (scrollDiffere > 20) {
                    this.isUpRoll = true;  // 向下滚动
                }
            }
        }
    }
}