$(function() {
    $('div#froala-editor').froalaEditor({
      toolbarInline: true,
      charCounterCount: false,
      toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript','-', 'fontFamily','fontSize', 'color','paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '-', 'insertImage', 'insertTable',  'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
      toolbarVisibleWithoutSelection: true
    })
  });
