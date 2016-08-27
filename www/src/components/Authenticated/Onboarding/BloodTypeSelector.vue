<template>
    <div class="row">
        <h5 class="center white-text">¿Cuál es tu tipo de sangre?</h5>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <select v-model="bloodType" class="center-align">
                        <option v-for="blood in bloodTypes" v-bind:value="blood.key">{{blood.type}}</option>
                    </select>
                </div>
            </div>
            <div class="row center">
                <button v-on:click="submit" class="btn waves-effect waves-light red lighten-2" type="submit" name="action">Siguiente</button>
            </div>
        </form>
    </div>
</template>

<script>
    function getBloodTypes() {
        return [
            { type : 'A+', key : 'ap' },
            { type : 'A-', key : 'an' },
            { type : 'B+', key : 'bp' },
            { type : 'B-', key : 'bn' },
            { type : 'AB+', key : 'abp' },
            { type : 'AB-', key : 'abn' },
            { type : 'O+', key : 'op' },
            { type : 'O-', key : 'on' },
            { type : '?', key : 'null' }
        ];
    };

    var LS_BLOOD_TYPE = 'blood_type';

    module.exports = {
        data : function() {
            return {
                bloodType: localStorage.getItem(LS_BLOOD_TYPE) || 'ap',
                bloodTypes : getBloodTypes()
            };
        },
        methods : {
            submit : function() {
                localStorage.setItem(LS_BLOOD_TYPE, this.bloodType);
                this.$route.router.go('/onboarding/age');
            }
        },
        ready : function() {
            var self = this;
            $('select').material_select();
            $('select').change(function(){
                self.$set('bloodType', $('select').val());
            });
        }
    };
</script>



