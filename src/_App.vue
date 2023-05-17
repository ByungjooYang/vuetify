<template>
    <v-app> <!-- 최상단에 선언 div로 치환됨 -->
        <v-app-bar v-if="$vuetify.breakpoint.xsOnly" app/> <!-- 모바일에서만 보이도록 설정 -->
        <v-navigation-drawer app/> <!-- app을 붙여야 기본 레이아웃 컴포넌트로 사용 가능-->
        <v-main>
            <v-container fluid>
                컨텐츠 영역
            </v-container>
        </v-main>
        <v-footer app/>
    </v-app>
</template>

<script setup>

</script>
<style scoped>

</style>