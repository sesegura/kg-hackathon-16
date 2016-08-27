<template>
    <div class="row">
        <h1 class="header center orange-text">Registro</h1>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input id="name" type="text" class="validate">
                    <label data-error="Campo invalido" for="name">Nombre completo</label>
                </div>
            </div>
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
                <button class="btn waves-effect waves-light" type="submit" name="action">Registrar</button>
            </div>
        </form>
    </div>
</template>