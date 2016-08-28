<template>
    <div class="row">
        <h5 class="center white-text">¿Te han realizado alguna cirugía en los últimos 6 meses?</h5>
    </div>
        <div class="row">
            <form class="col s12">
                <button v-on:click="onYesSelected" class="btn btn-flat waves-effect waves-light red lighten-2" name="action"><i class="material-icons" style="color:white;font-size:30px;">check_circle</i></button>
                <button v-on:click="onNoSelected" class="btn btn-flat waves-effect waves-light red lighten-2" name="action"><i class="material-icons" style="color:white;font-size:30px;">cancel</i></button>
            </form>
        </div>
</template>

<script>

    var LS_SURGERIES = 'has_surgeries';

    module.exports = {
        methods : {
            onNoSelected : function () {
                localStorage.setItem(LS_SURGERIES, false)
                this.$route.router.go('/onboarding/drugs')
            },
            onYesSelected : function() {
                localStorage.setItem(LS_SURGERIES, true)
                this.$route.router.go('/onboarding/drugs')
            }
        }
    };
</script>
