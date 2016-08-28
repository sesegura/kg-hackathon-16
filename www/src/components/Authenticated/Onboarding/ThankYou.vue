<template>
    <div>
        <h5 class="center white-text">¡Estás listo para salvar vidas!</h5>
        <img src="../../../../static/images/logo-white.png" style="margin-left:10px;"/>
        <p>¡Calificás como donador!</p>
        <div class="row center">
            <button v-on:click="next" class="btn waves-effect waves-light red lighten-2" type="submit" name="action">¿Dónde puedo donar?</button>
        </div>        
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
            
            $.ajax({
                method : 'PUT',
                url : 'http://localhost:3000/users/' + id_user,
                data : data,
                success : $.noop
            });
        },
        
        methods : {
            next : function() {
                router.go('/bloodbank')
            }
        }
    };
</script>
