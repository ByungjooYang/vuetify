<template>
    <v-container fluid>
<!--        <v-card class="pa-3">
            <v-row dense>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-spacer/>

                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-spacer/>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
            </v-row>
        </v-card>

        &lt;!&ndash; 옛날 코드 &ndash;&gt;
        <v-card class="mt-5 pa-3">
            <v-layout>
                <v-flex>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-flex>
                <v-flex>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-flex>
                <v-flex>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>-->
        <v-card class="mt-5 pa-3">
            <v-row :style="{height: '120px'}"
            class="red" align="end">
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
            </v-row>
            <v-row :style="{height: '120px'}"
                   class="yellow">
                <v-col align-self="center">
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col align-self="end">
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col cols="auto"> <!-- 내부 컨텐츠 만큼 -->
                    <v-card class="pa-3" outlined>
                        Col능
                    </v-card>
                </v-col>
            </v-row>
        </v-card>



        <v-card class="mt-5 pa-3">
            <v-row justify="center">
                <v-col cols="auto"> <!-- center, end, start, space-between, space-around  -->
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col cols="auto">
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
                <v-col cols="auto"> <!-- 내부 컨텐츠 만큼 -->
                    <v-card class="pa-3" outlined>
                        Col
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "GridSystem"
}
</script>

<style scoped>

</style>