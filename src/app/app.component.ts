import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-cv';

  public ngOnInit() {
    $(document).ready(() => {

      console.log('Działa');

      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 56)
            }, 1000, 'easeInOutExpo');
            return false;
          }
        }
      });

      $('.js-scroll-trigger').click(() => {
        $('.navbar-collapse').collapse('hide');
      });

      $('body').scrollspy({
        target: '#mainNav',
        offset: 56
      });
      });
  }
}

