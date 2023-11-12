<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>


            <v-spacer></v-spacer>

            <v-btn
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
                text
            >
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            dark
            app
            :src="require('@/assets/sidebar.jpg')"
            >
            <template
                #img="props"
            >
                <v-img
                    :gradient="gradient"
                    v-bind="props"
                >

                </v-img>
            </template>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Application
                        </v-list-item-title>
                        <v-list-itme-subtitle>
                            subtext
                        </v-list-itme-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list-item
                v-for="item in items"
                :key="item.title"
                link :to="item.to"
                class="py-1">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
        <v-main>
            <v-container>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        drawer: true,
        gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
        items: [
            {title: "Dashboard", icon: "mdi-view-dashboard", to: "/"},
            {title: "GridSystem", icon: "mdi-image", to: "/grid-system"},
            {title: "Grid List Page", icon: "mdi-image", to: "/grid-list-page"},
            {title: "breakpoints", icon: "mdi-image", to: "/breakpointsComponent"},
            {title: "typography", icon: "mdi-image", to: "/typographyMain"},
            {title: "tables", icon: "mdi-table-settings", to: "/tableMainm"},
            {title: "forms", icon: "mdi-form-select", to: "/formMain"},
            {title: "buttons", icon: "mdi-gesture-tap-button", to: "/buttonMain"},
            {title: "icons", icon: "mdi-emoticon-excited-outline", to: "/iconMain"},

        ]
    }),
};
</script>
