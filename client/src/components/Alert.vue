<template>
    <div>
        <p>{{alertMessage}}</p>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    components: {

    },
    props: {
        alertMessage: String
    }
}
</script>