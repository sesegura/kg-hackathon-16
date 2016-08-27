<template>
    <div v-for="blood in bloodTypes">
        <div>{{blood.type}}</div>
    </div>
    <h1> ¿Cuál es tu tipo de sangre?</h1>
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
            { type : 'No lo conozco', key : 'null' }                                                                                    
        ];        
    };

    module.exports = {
        data : function() {
            return {
                bloodTypes : getBloodTypes()
            };
        }
    };
</script>



