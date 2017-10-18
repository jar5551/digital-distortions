/**
 * Created by jarek on 01/04/2017.
 */

import jQuery from 'jquery';

const $ = jQuery;
window.jQuery = window.$ = $;

//let bootstrap = require('bootstrap');

class Main {
  constructor(mainElement) {
    this.mainEement = $(`#` + mainElement);
  }

  show() {
    this.mainEement.show();
  }
}

$(document).ready(function () {
  let main = new Main('main');
  main.show();
});