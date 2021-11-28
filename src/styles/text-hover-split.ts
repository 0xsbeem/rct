import $ from 'jquery'
import { RefObject } from 'react';

export const initializeHoverEffect = (menuList: RefObject<HTMLDivElement>, menuListItem: RefObject<HTMLDivElement>) => {
  let $menu = $(menuList);
  let $item = $(menuListItem);
  let _w = $(window).width()
  let _h = $(window).height()

  let w : number = _w !== undefined ? _w : 0
  let h : number = _h !== undefined ? _h : 0

  $(window).on('mousemove', function(e) {
    var offsetX = 0.5 - e.pageX / w, //cursor position X
        offsetY = 0.5 - e.pageY / h, //cursor position Y
        dy = e.pageY - h / 2, //@h/2 = center of poster
        dx = e.pageX - w / 2, //@w/2 = center of poster
        theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
        angle = theta * 180 / Math.PI - 90, //convert rad in degrees
        offsetPoster = $menu.data('offset'),
        transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

    //get angle between 0-360
    if (angle < 0) {
      angle = angle + 360;
    }

    //poster transform
    $menu.css('transform', transformPoster);

    //parallax for each layer
    $item.each(function() {
      var $this = $(this),
          offsetLayer = $this.data('offset') || 0,
          transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

      $this.css('transform', transformLayer);
    });
  });
}
