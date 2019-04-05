import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-resform',
  templateUrl: './resform.component.html',
  styleUrls: ['./resform.component.css']
})
export class ResformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.multi-field-wrapper').each(function() {
      var $wrapper = $('.multi-fields', this);
      $(".add-field", $(this)).click(function(e) {
          $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
      });
      $('.multi-field .remove-field', $wrapper).click(function() {
          if ($('.multi-field', $wrapper).length > 1)
              $(this).parent('.multi-field').remove();
      });
  });

  $(document).ready(function(){
    $("#formButton").click(function(){
        $("#form1").toggle();
    });
});

$(document).ready(function(){
  $("#formButton2").click(function(){
      $("#form2").toggle();
  });
});
  }

  
}
