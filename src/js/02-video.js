import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_DATA = "videoplayer-current-time";

const vimeoPlayer = document.getElementById('vimeo-player');
const player = new Player(vimeoPlayer);

const onPlay = function (data) {
    localStorage.setItem(TIME_DATA, data.seconds);
};
player.on('timeupdate',  throttle(onPlay, 1000));

const resumePlay = localStorage.getItem(TIME_DATA) || 0;
player.setCurrentTime(resumePlay);