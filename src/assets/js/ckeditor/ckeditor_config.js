(function() {
  CKEDITOR.basePath = '/assets/js/ckeditor/';
  CKEDITOR.plugins.addExternal('ckeditor_wiris', 'plugins/ckeditor_wiris/');
  CKEDITOR.editorConfig = function(config) {
    config.extraPlugins = 'ckeditor_wiris';
  };
})();
