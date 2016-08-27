<template>
    <div class="onboarding red lighten-2 center white-text valign-wrapper">
        <div class="onboarding-content section valign">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style>
    html, body, .app, .onboarding {
        height: 100%;
        min-height: 100%;
        overflow: auto;
    }
    .onboarding-content {
        width: 100%;
    }
</style>