<template>
    <div class="row">
        <h5 class="center white-text">¿Te han realizado alguna cirugía en los últimos 6 meses?</h5>
    </div>
    <div class="row">
        <form class="col s12">
            <button v-on:click="onYesSelected" class="btn waves-effect waves-light red accent-2" name="action"><i class="material-icons">check_circle</i> si</button>
            <button v-on:click="onNoSelected" class="btn waves-effect waves-light red accent-2" name="action"><i class="material-icons">cancel</i> no</button>
        </form>
    </div>
</template>

<script>

    var LS_DRUGS = 'has_surgeries';

    module.exports = {
        methods : {
            onNoSelected : function () {
                localStorage.setItem(LS_DRUGS, false)
                this.$route.router.go('/onboarding/drugs')
            },
            onYesSelected : function() {
                localStorage.setItem(LS_DRUGS, true)
                this.$route.router.go('/onboarding/drugs')
            }
        }
    };
</script>
