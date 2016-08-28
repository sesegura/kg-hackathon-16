<template>
    <h5 class="center">Solicitá donaciones</h5>

    <div class="row">
        <div class="input-field col s12">
            <input id="name" type="text" v-model="donnor_name" class="validate">
            <label for="name">Nombre de quién necesita la donación</label>
        </div>
    </div>

    <div class="row">
        <div class="input-field col s12">
            <input id="location" type="text" v-model="location" class="validate">
            <label for="location">Banco de sangre</label>
        </div>
    </div>

    <div class="row">
        <div class="input-field col s12">
            <input id="quantity" type="text" v-model="quantity" class="validate">
            <label for="quantity">Cantidad de bolsas de sangre que requiere</label>
        </div>
    </div>

    <div class="row">
        <div class="input-field col s12">
            <input id="reason" type="text" v-model="reason" class="validate">
            <label for="reason">¿Por qué necesita la sangre?</label>
        </div>
    </div>

    <div class="row center">
        <button v-on:click="share" class="btn-large waves-effect waves-light red accent-2" type="submit" name="action">Solicitar</button>
    </div>

    <!-- Modal Structure -->
    <div id="modal1" class="modal" style="width:355px;>
        <div class="modal-content sebas" style="padding:0px;">
            <img class="sebas" src="/solicitud-pop-up.png" />
        </div>
    </div>
</template>

<style>
    .sebas {
        width : 90%;
    }
</style>

<script>
    module.exports = {
        data : function() {
            return {
                donnor_name : '',
                location : '',
                quantity : '',
                reason : ''
            }
        },

        methods : {
            submit : function() {
                var data = {
                    donnor_name : this.donnor_name,
                    location : this.location,
                    quantity : this.quantity,
                    reason : this.reason
                }

                $.ajax({
                    method : 'POST',
                    url : 'http://localhost:3000/donation/requests',
                    data : data,
                    success : this.share.bind(this)
                })
            },

            share : function () {
                $('#modal1').openModal();
            }
        }
    }
</script>

