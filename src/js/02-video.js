import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.getElementById('vimeo-player');
const player = new Player(vimeoPlayer);

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};
player.on('timeupdate',  throttle(onPlay, 1000));

const resumePlay = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(resumePlay);