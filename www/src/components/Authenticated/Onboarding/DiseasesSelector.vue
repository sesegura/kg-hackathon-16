<template>
    <div class="row">
        <div class="row">
            <h5 class="center white-text">¿Padeces de alguna de las siguientes enfermedades?</h5>
            <div class="col s12 center">
                <h6 v-for="disease in diseases">{{disease}}</h6>
            </div>
        </div>
        <div class="row">
            <form class="col s12">
                <button v-on:click="onYesSelected" class="btn waves-effect waves-light red lighten-2" name="action"><i class="material-icons">check_circle</i> si</button>
                <button v-on:click="onNoSelected" class="btn waves-effect waves-light red lighten-2" name="action"><i class="material-icons">cancel</i> no</button>
            </form>
        </div>
    </div>
</template>

<script>

    var LS_DISEASES = 'has_diseases';

    module.exports = {
        data : function() {
            return {
                diseases : [
                    'Anemia',
                    'Cáncer',
                    'Hepatitis',
                    'Enfermedades Venéreas'
                ]
            }
        },
        methods : {
            onNoSelected : function () {
                localStorage.setItem(LS_DISEASES, false)
                this.$route.router.go('/onboarding/surgeries')
            },
            onYesSelected : function() {
                localStorage.setItem(LS_DISEASES, true)
                this.$route.router.go('/onboarding/surgeries')
            }
        }
    };
</script>
