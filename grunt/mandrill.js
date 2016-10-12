// Use mandrill option if you want to email the design to your inbox or to something like Litmus
module.exports = function(grunt) {
  return {
    mailer: {
      options: {
        key: '<%= secrets.mandrill.api_key %>',
        sender: '<%= secrets.mandrill.sender %>',
        recipient: '<%= secrets.mandrill.recipient %>',
        subject: 'Cloud Genius bootcamp starts Jun 1: Join Info Session'
      },
      src: ['<%= paths.dist %>/'+grunt.option('template')]
    }
  };
};
