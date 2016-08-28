<template>
    <div class="row center">
        <h5 class="white-text">¡Estás listo para<br>salvar vidas!</h5>
    </div>
    <div class="row center">
        <img src="../../../../static/images/logo-white.png" style="margin-left:10px;"/>
        <p>¡Calificás como donador!</p>
    </div>
    <div class="row center">
        <button v-on:click="next" class="btn waves-effect waves-light white red-text" type="submit" name="action">¿Dónde puedo donar?</button>
    </div>
</template>

<script>
    import router from '../../../router';

    module.exports = {
        ready : function() {
            var id_user = ''

            var data = {
                age : '',
                weight : '',
                has_diseases : '',
                has_surgeries : '',
                has_drugs : '',
                has_tattoos : ''
            }
        },

        methods : {
            next : function() {
                router.go('/bloodbank')
            }
        }
    };
</script>
