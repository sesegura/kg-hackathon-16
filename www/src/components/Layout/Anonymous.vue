<template>
    <div class="anonymous">
        <div class="navbar-fixed">
            <nav class="red darken-1" role="navigation">
                <div class="nav-wrapper container">
                    <a href="#!" class="brand-logo"></a>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <a v-link="'/home'">Inicio</a>
                        </li>
                        <li>
                            <a v-link="'/home/login'">Login</a>
                        </li>
                        <li>
                            <a v-link="'/home/register'">Register</a>
                        </li>
                    </ul>
                    <ul id="nav-mobile" class="side-nav fixed">
                        <li>
                            <a v-link="'/home'">Inicio</a>
                        </li>
                        <li>
                            <a v-link="'/home/login'">Login</a>
                        </li>
                        <li>
                            <a v-link="'/home/register'">Register</a>
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