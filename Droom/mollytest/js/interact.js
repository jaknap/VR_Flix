let xPos;
let yPos;
let zPos;


document.addEventListener("DOMContentLoaded", function(event) {
        var scene = document.querySelector('a-scene');
        if (scene.hasLoaded) addEventListeners();
        else scene.addEventListener('loaded', handleSceneLoaded);
        });

        function handleSceneLoaded() {
            console.log('scene loaded');
            let vid = document.querySelector('a-video');
            vid.addEventListener('click', function (evt) {
                                 console.log(evt.detail.intersection.point.x);
                                    console.log(evt.detail.intersection.point.y);
                                    console.log(evt.detail.intersection.point.z);
            var entityEl = document.querySelector('#sph');
            entityEl.setAttribute('position', evt.detail.intersection.point.x + ' ' + evt.detail.intersection.point.y + ' ' + -27);
            console.log(entityEl);
  
});
}

