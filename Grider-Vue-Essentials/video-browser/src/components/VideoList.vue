<template>
    <ul>
        <VideoListItem 
            v-for="video in videos"
            :video="video"
            :key="video.etag"
            >
        </VideoListItem>

        <!-- VideoList
        {{ videos.length }} -->
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';


export default {
    name: 'VideoList',
//    props: ['videos']
    components: {
        VideoListItem
    },
    props: {
    videos: Array
    }
}
</script>

<style>

</style>