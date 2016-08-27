<template>
    <div>
        <h1>¿Te han realizado alguna cirugía en los últimos 6 meses?</h1>
        <div>
            <button v-on:click="onNoSelected">No</button>
            <button v-on:click="onYesSelected">Si</button>
        </div>
    </div>
</template>

<script>
    module.exports = {
        methods : {
            onNoSelected : function () {
                localStorage.setItem('has_surgeries', false)
                // router.go()
            },
            
            onYesSelected : function() {
                localStorage.setItem('has_surgeries', true)
                // router.go()            
            }
        }
    };
</script>
