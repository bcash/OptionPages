/**
 * Admin Options - Media Uploader Script
 */
jQuery.noConflict();
(function ($) {
    $(function () {
        var mediaUploader,
            opMediaButton = $('.opmedia-upload'),
            opMediaAttachment;

        opMediaButton.click(function (e) {
            e.preventDefault();
            var opMediaDestination = $(this).prev('input');

            if (mediaUploader) {
                mediaUploader.open();
                return;
            }

            mediaUploader = wp.media.frames.file_frame = wp.media({
                title: 'Choose File',
                button: {
                    text: 'Choose File',
                },
                multiple: false,
            });

            mediaUploader.on('select', function () {
                opMediaAttachment = mediaUploader.state().get('selection').first().toJSON();
                opMediaDestination.val(opMediaAttachment.url);
            });

            mediaUploader.open();
        });
    });
})(jQuery);