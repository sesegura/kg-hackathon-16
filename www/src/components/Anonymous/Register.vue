<template>
    <div class="row">
        <h3 class="header center black-text">Registro</h3>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input id="name" type="text" v-model="name" class="validate">
                    <label data-error="Campo invalido" for="name">Nombre completo</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" v-model="email" class="validate">
                    <label  data-error="Campo invalido" for="email">Correo electrónico</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" v-model="password" class="validate">
                    <label  data-error="Campo invalido" for="password">Contraseña</label>
                </div>
            </div>
            <div class="row center">
                <button v-on:click="submit" class="btn-large waves-effect waves-light red accent-2" type="submit" name="action">Registrar</button>
            </div>
        </form>
    </div>
</template>

<script>

    import router from '../../router';
    import { login, logout } from '../../vuex/actions'

    module.exports = {
        data : function() {
            return {
                name : '',
                email : '',
                password : '',
                image : '../../../static/images/card-1.png'
            };
        },

        vuex : {
            actions: {
                login
            }
        },

        methods : {
            submit : function() {
                var data = {
                    name : this.name,
                    email : this.email,
                    password : this.password
                };

                $.ajax({
                    method : 'POST',
                    url : 'http://localhost:3000/users',
                    data : data,
                    success : this._handleSuccess.bind(this),
                    error : function(){}
                })
            },

            _handleSuccess (result) {
                this._resetModel()
                this.login(result)
                this.$route.router.go('/dashboard')
            },

            _resetModel () {
                this.name = ''
                this.email = ''
                this.password = ''
            }
        }
    };
</script>


