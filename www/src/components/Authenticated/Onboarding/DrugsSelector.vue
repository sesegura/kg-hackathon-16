<template>
    <div>
        <div class="row">
            <h5 class="center white-text">¿Consumís alguna de las siguientes drogas?</h5>
            <div class="col s12 center">
                <h6 v-for="drug in drugs">{{drug}}</h6>
            </div>
        </div>
        <div class="row">
            <form class="col s12">
                <button v-on:click="onYesSelected" class="btn btn-flat waves-effect waves-light red accent-2" name="action"><i class="material-icons" style="color:white;font-size:30px;">check_circle</i></button>
                <button v-on:click="onNoSelected" class="btn btn-flat waves-effect waves-light red accent-2" name="action"><i class="material-icons" style="color:white;font-size:30px;">cancel</i></button>
            </form>
        </div>
    </div>
</template>

<script>
    var LS_DRUGS = 'has_drugs';
    
    module.exports = {
        data : function() {
            return {
                drugs : ['Marihuana', 'Éxtasis', 'Cocaína', 'Heroína', 'Crack']
            }
        },
        
        methods : {
            onNoSelected : function () {
                localStorage.setItem(LS_DRUGS, false)
                this.$route.router.go('/onboarding/thanks')
            },
            onYesSelected : function() {
                localStorage.setItem(LS_DRUGS, true)
                this.$route.router.go('/onboarding/thanks')
            }
        }
    };
</script>
