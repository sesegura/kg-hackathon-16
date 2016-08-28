<template>
    <div class="authenticated">
        <div class="navbar-fixed">
            <nav class="red darken-1" role="navigation">
                <div class="nav-wrapper container">
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <a v-link="'/dashboard'">Inicio</a>
                        </li>
                        <li>
                            <a v-link="'/dashboard/profile'">Carné</a>
                        </li>
                        <li>
                            <a v-link="'/dashboard/donations'">Donaciones</a>
                        </li>
                        <li>
                            <a v-on:click="doLogout">Cerrar sesión</a>
                        </li>
                    </ul>
                    <ul id="nav-mobile" class="side-nav fixed">
                        <li>
                            <a v-link="'/dashboard'">Inicio</a>
                        </li>
                        <li>
                            <a v-link="'/dashboard/profile'">Carné</a>
                        </li>
                        <li>
                            <a v-link="'/dashboard/donations'">Donaciones</a>
                        </li>
                        <li>
                            <a v-on:click="doLogout">Cerrar sesión</a>
                        </li>
                    </ul>
                    <a class="button-collapse" data-activates="nav-mobile"
                    href="#"><i class="material-icons">menu</i></a>
                </div>
            </nav>
        </div>
        <div class="section">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

    import router from '../../router';
    import { login, logout } from '../../vuex/actions'

    module.exports = {
        vuex : {
            actions: {
                logout
            }
        },
        methods : {
            doLogout : function() {
                this.logout()
                this.$route.router.go('/home')
            }
        },
        ready : function() {
            var btn = $('.button-collapse');
            if (btn) {
                btn.sideNav({
                    closeOnClick: true
                });
            }
        }
    }

</script>