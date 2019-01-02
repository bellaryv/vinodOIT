(function executeRule(current,previous){
  var gdt = new GlideDateTime();
  var sendmessage = new GlideRecord('sys_broadcast_message');
  sendmessage.initialize();
  var message = 'A new incident priority 1 has been opened.click here for more information:'; message + = '<a href="/incident.do?sys_id' + current.sys_id +'">'+current.number + '</a>';
  sendmessage.message = message;
  sendmessage.logged-in = true;
  sendmessage.email = false;
  sendmessage.user_filter = 'itil';
  sendmessage.notify_users_after_date = gdt;
  gdt.addSeconds(120);
  sendmessage.notify_users_after_date = gdt;
  sendmessage.insert();

}
)(current,previous);
