// source --> https://edzorblaw.com/wp-content/plugins/ultimate-member/assets/js/um-gdpr.min.js?ver=2.6.11 
!function(){"use strict";jQuery(document).on("click","a.um-toggle-gdpr",function(e){var e=jQuery(e.currentTarget),t=e.closest(".um-field-area"),g=t.find(".um-gdpr-content");g.is(":visible")?(t.find("a.um-toggle-gdpr").text(e.data("toggle-show")),g.hide().find("a.um-toggle-gdpr").remove(),e.length&&e.get(0).scrollIntoView()):(t.find("a.um-toggle-gdpr").text(e.data("toggle-hide")),g.show().prepend(e.clone()))})}();