<template>
    <div class="row">
        <h5 class="center white-text">¿Qué edad tienes?</h5>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input type="number" class="center-align" placeholder="18" v-model="age"/>
                </div>
            </div>
            <div class="row center">
                <button v-on:click="submit" class="btn waves-effect waves-light red lighten-2" type="submit" name="action">Siguiente</button>
            </div>
        </form>
    </div>
</template>

<script>

    var LS_AGE = 'age';

    module.exports = {
        data : function() {
            return {
                age : localStorage.getItem(LS_AGE) || 18,
            }
        },
        methods : {
            submit : function() {
                localStorage.setItem(LS_AGE, this.age);
                this.$route.router.go('/onboarding/weight');
            }
        }
    };
</script>
