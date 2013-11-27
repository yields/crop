
/**
 * dependencies.
 */

var draggable = require('draggable')
  , resizable = require('resizable')
  , emitter = require('emitter')
  , domify = require('domify')
  , tpl = require('./template');

/**
 * getComputedStyle
 */

var styles = window.getComputedStyle;

/**
 * export `Cropper`.
 */

module.exports = function(el, opts){
  return new Cropper(el, opts);
};

/**
 * initialize new `Cropper`.
 *
 * @param {Element} el
 * @param {Object} opts
 */

function Cropper(el, opts){
  this.settings = {};
  this.el = el;
}

/**
 * mixins.
 */

emitter(Cropper.prototype);

/**
 * build cropper.
 *
 * @return {Cropper}
 */

Cropper.prototype.build = function(){
  var self = this;
  this.area = domify(tpl);
  this.draggable = draggable(this.area);
  this.resizable = resizable(this.area);
  this.draggable.on('end', crop);
  this.resizable.on('end', crop);
  this.resizable.build();
  this.draggable.build();
  this.el.appendChild(this.area);
  return this;

  // emit crop.
  function crop(){
    var style = styles(self.area);
    self.emit('crop', {
      left: parseInt(style.left),
      top: parseInt(style.top),
      height: self.area.offsetHeight,
      width: self.area.offsetWidth
    });
  }
};

/**
 * destroy cropper
 */

Cropper.prototype.destroy = function(){
  if (this.resizable) {
    this.el.removeChild(this.area);
    this.resizable.destroy();
    this.draggable.destroy();
  }
};
