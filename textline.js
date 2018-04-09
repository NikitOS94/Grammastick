window.onload = function () {
    var textline = new ya.speechkit.Textline('my_id', {
        apikey: '86701ef0-bc50-430a-94aa-54f96b01bc5c',
        lang: 'en-US',
        onInputFinished: function(text) {
            // Финальный текст.
            alert(text);
        }
    });
};