<template>
    <v-container>
        <v-row>
            <v-col v-for="count in 12" :key="count" cols="12" sm="6" md="4" lg="3">
                <!-- sm 사이즈일 뗴 12 sm 사이즈일 때 4 -->
<!--                <v-card class="pa-3">
                    Col
                </v-card>-->
                <v-card  class="pa-3">
                    Col
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>

</script>
<style scoped>

</style>