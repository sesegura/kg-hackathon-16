<template>
    <div>
        <h1>¡Estás listo para salvar vidas!</h1>
        <p>¡Calificás como donador!</p>
        <button v-on:click="next">¿Dónde puedo donar?</button>
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
