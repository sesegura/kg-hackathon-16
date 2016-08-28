<template>
    <h1>Solicitá donaciones</h1>
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
        <button v-on:click="share" class="btn waves-effect waves-light" type="submit" name="action">Solicitar</button>
    </div>      
   
    <!-- Modal Structure -->
    <div id="modal1" class="modal" style="width:355px;>
        <div class="modal-content" style="padding:0px; width:320px;">
            <img src="/solicitud-pop-up.png"
                style="width: 355px;"/>
        </div>
    </div>
</template>

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

