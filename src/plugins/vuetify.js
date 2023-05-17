import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        //
        thresholds: {
            xs: 360
        },
        // 모바일 브레이크포인트 사이즈 변경
        mobileBreakpoint: 'xs'
    }
});
