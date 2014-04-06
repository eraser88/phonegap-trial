var app = {
    initialize: function () {
        $.get("http://ihackernews.com/", this.handleData ,"html");
        this.bindEvents();
    },
    handleData: function(data) {
        var el = document.createElement('div');
        el.innerHTML = data;
        var hrefs = [];
        var text = [];
        var aTags = el.getElementsByTagName('a');
        var pos;
        for (var l = 0; l < aTags.length; l++) {
            pos = aTags[l].href.indexOf("http://");
            if (pos >= 0 && aTags[l].href.indexOf("ihackernews") == -1 && aTags[l].href.indexOf("?url=http") == -1) {
                hrefs.push(aTags[l].href);
            }
        }
        console.log(hrefs);
        $("#data").text(hrefs);
    },

    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
