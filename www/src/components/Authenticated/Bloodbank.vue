<template>
    <div>
        <img src="/card-1.png" style="width:345px;" />
        <img src="/card-2.png" style="width:345px;" />
    </div>
</template>

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
