<template>
    <div class="help">
        <nav-bar title="帮助/意见反馈"></nav-bar>
        <h2 class="h2">帮助</h2>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</template>

<script>
import NavBar from '../../components/NavBar';

export default {
    name: 'Help',
    components: {
        NavBar
    }
}
</script>

<style>
.help {
    width: 100%;
    height: 100%;
}
</style>