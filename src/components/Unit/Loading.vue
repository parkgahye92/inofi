<template>
    <transition appear leave-active-class="animated slideOutRight">
        <div class="loading" ref="loading" v-if="isLoading">
            <transition appear>
                <img class="animated zoomIn" v-if="show" src="~@/assets/img/layout/logo.png" alt=""/>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Loading',
        data() {
            return {
                isLoading: true,
                show: false,
            }
        },
        mounted() {
            this.show = true;

            setTimeout( () => {
                this.isLoading = false;
            }, 800 )
        }
    }
</script>

<style lang="scss">
  @import '~@/assets/scss/common/Loading.scss';
</style>