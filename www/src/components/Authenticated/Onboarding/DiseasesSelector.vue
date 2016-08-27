<template>
    <div>
        <h1>¿Tenés alguna de las siguientes enfermedades?</h1>
        <div v-for="disease in diseases">{{disease}}</div>
        <div>
            <button v-on:click="onNoSelected">No</button>
            <button v-on:click="onYesSelected">Si</button>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data : function() {
            return {
                diseases : ['Anemia', 'Cáncer', 'Hepatitis', 'Enfermedades venéreas']
            }
        },
        
        methods : {
            onNoSelected : function () {
                localStorage.setItem('has_diseases', false)
                // router.go()
            },
            
            onYesSelected : function() {
                localStorage.setItem('has_diseases', true)
                // router.go()            
            }
        }
    };
</script>
