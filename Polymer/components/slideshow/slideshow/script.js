(function() {
    Polymer('slider-slideshow', {

        publish : {
            backgroundColor : '#fafafa',
            color: '#3a3a3a',
        },

        keypressHandler : function(e) {
            if (e.keyCode === 39) {
              this.navigateNext();
            } else if (e.keyCode === 37) {
              this.navigateBack();
            }
        },
        clickHandler : function(e) {
            e.preventDefault();

            this.navigateNext();
        },
        handleRightClick : function(e) {
            e.preventDefault();

            this.navigateBack();
        },

        navigateNext : function() {
            var next = this.active.index + 1;

            if (next >= this.slides.length) {
                return;
            }

            this.deliverSlide(next);
        },

        navigateBack : function() {
           var prev = this.active.index - 1;

            if (prev < 0) {
                return;
            }

            this.deliverSlide(prev);
        },

        attached : function() {
            this.hashManualSet = false;
            this.focus();
            this.handleStyles();

            this.slides = this.querySelectorAll('slider-slide, slider-chapter');
            this.active = {
                slide : this.slides[0],
                index : 0
            };
            this.active.slide.setAttribute('active', 'true');

            this.handleHashNavigation();
        },

        handleStyles : function() {
            this.style.color = this.color;
            this.style.backgroundColor = this.backgroundColor;
        },

        deliverSlide : function(index) {
            if (index < 0 ||
                index > this.slides.length ||
                index === this.active.index) {
                return;
            }

            this.active.slide.removeAttribute('active');
            this.active.index = index;
            this.active.slide = this.slides[index];
            this.active.slide.setAttribute('active', 'true');

            var left = this.active.slide.offsetLeft;

            this.setHash(index);

            this.$['slides-wrapper'].style.webkitTransform = 'translateX(-' + left + 'px)';
        },

        handleHashNavigation : function () {
            var root = this,
                hash = this.getHash();

            if (hash) {
                this.deliverSlide(hash);
            } else {
                this.setHash(0);
            }

            window.addEventListener('hashchange', function() {
                var hash;

                if (!root.hashManualSet) {
                    hash = root.getHash();
                    root.deliverSlide(hash);
                }
                root.hashManualSet = false;
            });
        },

        setHash : function (index) {
            this.hashManualSet = true;

            window.location.hash = index;
        },

        getHash : function () {
            return window.location.hash.replace('#', '')|0;
        }
    });
})();

