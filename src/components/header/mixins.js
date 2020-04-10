import {mapGetters, mapActions} from "vuex";
import {getNavClassifyData} from "../../dictionary/navData";

export const headerNav = {
    data() {
        return {
            navData: [],
            activeNav: 'article',
            activeClassify: 'recommend'
        }
    },
    mounted() {
        this.getNavDataArr();
        this.getActiveNav();
    },
    methods: {
        ...mapGetters([
            'getNavData'
        ]),
        ...mapActions([
            'setNavClassify'
        ]),
        // 获取当前路由
        getActiveNav() {
            let name = this.$route.name == 'index' ? 'article' : this.$route.fullPath,
                classify = this.$route.name == 'index' ? 'recommend' : this.$route.params.classify;
            this.activeNav = name;
            this.activeClassify = classify;

            console.log(8888, this.$route)
        },
        // 点击跳转
        gotoLink(route) {
            console.log(9999, route)
            let path = '/' + route.path, classify = [];
            this.activeNav = route.path;
            if (route.classify != '') {
                path = '/nettext/' + route.path + '/' + route.classify
                classify = getNavClassifyData(route.path);
            }
            this.setNavClassify(classify);
            this.$router.push({
                path: path
            })
        }
    }
}