<template>
    <div class="row">
        <h5 class="center white-text">¿Cuánto pesas?</h5>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input type="number" class="center-align" placeholder="58" v-model="weight"/>
                </div>
            </div>
            <div class="row center">
                <button v-on:click="submit" class="btn waves-effect waves-light red accent-2" type="submit" name="action">Siguiente</button>
            </div>
        </form>
    </div>
</template>

<script>

    var LS_WEIGHT = 'weight';

    module.exports = {
        data : function() {
            return {
                weight : localStorage.getItem(LS_WEIGHT) || 58
            }
        },
        methods : {
            submit : function() {
                localStorage.setItem(LS_WEIGHT, this.weight);
                this.$route.router.go('/onboarding/diseases');
            }
        }
    };
</script>
