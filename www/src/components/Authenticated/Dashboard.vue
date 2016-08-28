<template>
    <div>
        <div class="row center">
            <img src="/logo-fullcolor-152x152.png" />
        </div>
        <div class="row center">
            <h5 class="header center grey-text">¡Salvá vidas!</h5>
        </div>
        <div class="row center">
            <a class="btn-large waves-effect waves-light red accent-2 col s10 offset-s1" v-link="'/onboarding/bloodtype'">Donar</a>
        </div>
        <div class="row center">
            <a class="btn-large waves-effect waves-light white red-text col s10 offset-s1" v-link="'/request'">Solicitar</a>
        </div>
    </div>
</template>

<script>
    module.exports = {
        ready : function(){
            return {
                // @todo user data
            }
        }
    };
</script>
