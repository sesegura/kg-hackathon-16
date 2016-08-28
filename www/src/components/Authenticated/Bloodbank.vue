<template>
    <div>
        <img class="card" src="/card-1.png" />
        <img class="card" src="/card-2.png" />
    </div>
</template>

<style>
    .card {
        width : 100%;
    }
</style>

<script>
    module.exports = {
        data : function() {
            return {
                requests : []
            }
        },

        ready : function() {
            $.ajax({
                method : 'GET',
                url : 'http://localhost:3000/donation/requests',
                success : this.handleSuccess.bind(this)
            })
        },

        methods : {
            handleSuccess : function(data) {
                this.requests = data
            },

            bla : function(a) {
                debugger;
            }
        }
    }
</script>
