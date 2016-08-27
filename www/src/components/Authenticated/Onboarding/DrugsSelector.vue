<template>
    <div>
        <h1>¿Consumís alguna de las siguientes drogas?</h1>
        <div v-for="drug in drugs">{{drug}}</div>
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
                drugs : ['Marihuana', 'Éxtasis', 'Cocaína', 'Heroína', 'Crack']
            }
        },
        
        methods : {
            onNoSelected : function () {
                localStorage.setItem('has_drugs', false)
                // router.go()
            },
            
            onYesSelected : function() {
                localStorage.setItem('has_drugs', true)
                // router.go()            
            }
        }
    };
</script>
