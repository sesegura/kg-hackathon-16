<template>
    <div class="row">
        <div class="col s12 center">
            <img src="/logo-con-iso.png" />
        </div>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate">
                    <label  data-error="Campo invalido" for="email">Correo electrónico</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate">
                    <label  data-error="Campo invalido" for="password">Contraseña</label>
                </div>
            </div>
            <div class="row center">
                <button class="btn-large waves-effect waves-light red accent-2" type="submit" name="action">iniciar sesión</button>
            </div>
        </form>
    </div>
</template>