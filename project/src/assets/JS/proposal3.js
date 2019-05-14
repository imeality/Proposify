$(function() {
    $('div#froala-editor').froalaEditor({
      toolbarInline: true,
      charCounterCount: false,
      toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript','-', 'fontFamily','fontSize', 'color','paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '-', 'insertImage', 'insertTable',  'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
      toolbarVisibleWithoutSelection: true
    })
    $('#froala-editor')
        .froalaEditor({
          // Enable autosave.
          autosave: true,
    
          // Change autosave interval (time in miliseconds).
          autosaveInterval: 2500,
    
          // Set the save param.
          saveParam: 'content',
    
          // Set the save URL.
          saveURL: 'http://localhost:4200/  ',
    
          // HTTP request type.
          saveRequestType: 'POST',
    
          // Additional save params.
          saveParams: {id: 'froala-editor '}
        })  
  });

  var boxes = $('.myCheckBox');

boxes.on('change', function () {
    $('#sign').prop('disabled', !boxes.filter(':checked').length);
}).trigger('change');