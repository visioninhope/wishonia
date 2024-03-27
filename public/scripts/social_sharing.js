// scripts/social_sharing.js

document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.social-share-button');

    shareButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const platform = this.getAttribute('data-platform');
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent("I just participated in the Allocation Poll! Check it out and let your voice be heard on how funds should be allocated between war and clinical research.");
            const hashtags = encodeURIComponent("AllocationPoll,MakeADifference");

            let shareUrl = "";

            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
                    break;
                default:
                    console.error('Unsupported platform:', platform);
                    return;
            }

            window.open(shareUrl, '_blank');
        });
    });
});
