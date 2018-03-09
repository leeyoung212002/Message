/* ========================================================================
 * Bootstrap: message.js v3.3.7
 * Copyright By Lee.
 * ======================================================================== */


+function ($) {
  'use strict';

  // MESSAGE CLASS DEFINITION
  // ======================

  var Message   = function (element, options) {
    this.init('message', element, options)
  }

  Message.VERSION = '3.3.7'
  
  Message.DEFAULTS = {
  	type: 'info',
  	content: '',
  	duration: 3,
  	delay: 1
  }
  
  Message.prototype.init = function (type, element, options) {
  	this.type     = type
  	this.$element = $(element)
  	this.options  = this.getOptions(options)
  	var _objects = {
  		'success': {
  			'cls': 'message-success',
  			'icon': 'glyphicon-ok-sign'
  		},
  		'info': {
  			'cls': 'message-info',
  			'icon': 'glyphicon-info-sign'
  		},
  		'warning': {
  			'cls': 'message-warning',
  			'icon': 'glyphicon-warning-sign'
  		},
  		'danger': {
  			'cls': 'message-danger',
  			'icon': 'glyphicon-remove-sign'
  		}
  	}
  	var nodeHtmls = [
  	    '<div class="message ',
  	    _objects[this.options.type]['cls'],
  	    '">',
  	    '<span class="glyphicon ',
  	    _objects[this.options.type]['icon'],
  	    '">',
  	    '<span>',
  	    this.options.content,
  	    '</span>',
  	    '</span>',
  	    '</div>'
  	]
  	
  	this.$element.append(nodeHtmls.join(''))
  	
  	if(!$('.message').is(':visible')) {
  		var that = this
  		$('.message').css({display: 'block', top: '-100px'}).animate(
  			{top: '24px'}, that.options.delay*1000, function() {
  				setTimeout(function() {
  					that.$element.removeData('bs.message')
  					$('.message') && $('.message').remove()
  				}, that.options.duration*1000)
  			}
  		)
  	}
  }

  Message.prototype.getDefaults = function () {
  	return Message.DEFAULTS
  }
  
  Message.prototype.getOptions = function (options) {
  	options = $.extend({}, this.getDefaults(), options)
  	return options
  }


  // MESSAGE PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.message')
      var options = typeof option == 'object' &&option
      

      if (!data) $this.data('bs.message', (data = new Message(this, options)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.message

  $.fn.message             = Plugin
  $.fn.message.Constructor = Message


  // MESSAGE NO CONFLICT
  // =================

  $.fn.message.noConflict = function () {
    $.fn.message = old
    return this
  }

}(jQuery);
