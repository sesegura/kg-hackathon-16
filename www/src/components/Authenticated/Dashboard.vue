<template>
    <div>
        <h1 class="header center orange-text">¡Salva vidas!</h1>
        <h3>Dona!</h3>
        <div class="row center">
            <a class="btn-large waves-effect waves-light orange lighten-2 col s10 offset-s1" v-link="'/onboarding/bloodtype'">Donar</a>
        </div>
        <div class="row center">
            <a class="btn-large waves-effect waves-light orange col s10 offset-s1" v-link="'/request'">Solicitar</a>
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
