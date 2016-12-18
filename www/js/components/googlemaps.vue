<template>
    <gmap-map :center="center" :zoom="14" style="height: 600px" >
<gmap-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
</gmap-map>
</template>

<script>
    import { load, Map, Marker } from 'vue2-google-maps';
    import Vue from 'vue';

    load('Your API KEy', '');

    export default {
        components: {
            gmapMap: Map,
            gmapMarker: Marker
        },
        data() {
            return {
                center: { lat: 43.610394, lng: 3.874469 },
                markers: [{
                    position: { lat: 43.611210, lng: 3.876681 }
                }, {
                    position: { lat: 43.611668, lng:  3.880222 }
                }]
            }
        }
    }
</script>