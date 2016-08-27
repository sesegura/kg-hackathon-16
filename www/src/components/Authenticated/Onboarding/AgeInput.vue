<template>
    <div>
        <h1> ¿Cuándo naciste?</h1>
        <input type="text" placeholder="Día/Mes/Año" v-model="age"/>
        <div class="row center">
            <a class="btn-large waves-effect waves-light orange col s10 offset-s1" v-on:click="next">Continuar</a>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data : function() {
            return {
                age : ''
            }
        },
        
        methods : {
            next : function() {
                localStorage.setItem('age', this.age);
            }
        }
    };
</script>
