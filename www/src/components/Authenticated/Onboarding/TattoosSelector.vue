<template>
    <div>
        <p>blabla</p>
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
                localStorage.setItem('has_tattoos', false)
                // router.go()
            },
            
            onYesSelected : function() {
                localStorage.setItem('has_tattoos', true)
                // router.go()            
            }
        }
    };
</script>
