<template>
    <div class="anonymous">
        <div class="navbar-fixed">
            <nav class="red darken-1" role="navigation">
                <div class="nav-wrapper container">
                <ul class="left">
                    <li>
                        <a v-link="'/home'"><i class="material-icons">home</i></a>
                    </li>
                </ul>
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
