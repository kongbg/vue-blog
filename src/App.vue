<template>
    <div id="app">
        <router-view/>
        <Modal title="重要通知"
               v-model="indexModal"
               :mask-closable="false"
               :closable="false"
               class-name="vertical-center-modal">
            <h4 style="color: #007fff;">本站自从2016年以来，得到了各位的认可，感谢各位用户支持与关注</h4>
            <h4 style="color: #e7485e;">本站预计2020.08月完成测试，2020.09月更新升级完毕，更新内容如下：</h4>
            <p>1、将目前的腾讯云服务器迁移至阿里云服务器，域名地址保持不变</p>
            <p>2、从原来的Php版本转成：java后台+vue前端</p>
            <p>3、之前的所有注册用户、发表的文章等相关信息均不会删除</p>
            <p>4、新版本的功能更加完善文章发表归类、标签、小册等相关的功能，敬请大家关注</p>
            <p>5、新版本将以markDown作为编写文章的主要工具</p>
            <p>6、本站vue、react版本的前端源代码在gitHub上:https://github.com/maxiaoqu</p>
            <div slot="footer">
                <Button type="success" size="large" long @click="yesIKown">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import {Modal, Button} from 'view-design';

    export default {
        name: 'app',
        components: {Modal, Button},
        data() {
            return {
                indexModal: false
            }
        },
        mounted() {
            this.checkIsShowOnece()
        },
        methods: {
            checkIsShowOnece() {
                let indexModal = sessionStorage.getItem('indexModal');
                if (!indexModal && indexModal != 'yes') {
                    this.indexModal = true;
                } else {
                    this.indexModal = false;
                }
            },
            yesIKown() {
                sessionStorage.setItem('indexModal', 'yes');
                this.indexModal = false;
            }
        }
    }
</script>

<style lang="less">
    html, body, #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        color: #333;
        word-break: break-word;
        text-rendering: optimizeLegibility;
        background-color: #f4f5f5;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
        }
    }
</style>
