
<template>
    <v-container>
        <v-card>
            <v-card-title>
                $vuetify.breakpoint.name: {{ $vuetify.breakpoint.name }}
            </v-card-title>
        </v-card>
        <v-container class="grey lighten-3">
            <v-card
                class="pa-3"
                outlined
                :height="height">
                콘텐츠
            </v-card>
        </v-container>

        <v-card class="mt-5">
            <v-card-title>
                $vuetify.breakpoint.mobile: {{ $vuetify.breakpoint.mobile }} {{ $vuetify.breakpoint.mobileBreakpoint }}
            </v-card-title>
        </v-card>
        <v-container class="grey lighten-3">
            <template>
                <div class="text-center">
                    <v-dialog
                        v-model="dialog"
                        width="auto"
                        :fullscreen="$vuetify.breakpoint.mobile"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary"
                                v-bind="attrs"
                                v-on="on"
                            >
                                Open Dialog
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </template>
        </v-container>

        <v-card class="mt-5">
            <v-card-title>
                $vuetify.breakpoint.mobile: {{ $vuetify.breakpoint.mobile }} {{ $vuetify.breakpoint.mobileBreakpoint }}
            </v-card-title>
        </v-card>
        <v-container class="grey lighten-3">
            <template>
                <div class="text-center">
                    <v-card
                        class="pa-3"
                        outlined
                    >
                        $vuetify.breakpoints.xs: {{ $vuetify.breakpoint.xs }} <br>
                        $vuetify.breakpoints.smAndDown: {{ $vuetify.breakpoint.smAndDown }} <br>
                        $vuetify.breakpoints.height: {{ $vuetify.breakpoint.height }} <br>
                        $vuetify.breakpoints.width: {{ $vuetify.breakpoint.width }} <br>
                        $vuetify.breakpoints.thresholds: {{ $vuetify.breakpoint.thresholds }} <br>
                    </v-card>
                </div>
            </template>
        </v-container>
    </v-container>
</template>
<script>
    export default {
        data () {
            return {
                dialog: false,
            }
        },
        computed: {
            height() {
                switch (this.$vuetify.breakpoint.name){
                    case 'xs' : return 100
                    case 'sm' : return 200
                    case 'md' : return 300
                    case 'lg' : return 400
                    default: return 500
                }
            }
        }
    }
</script>

<style scoped>

</style>