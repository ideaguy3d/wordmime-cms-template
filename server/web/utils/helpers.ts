/**
 * Langs
 */
import { default as fi } from '../../../admin/src/assets/langs/fi.json';
import { default as en } from '../../../admin/src/assets/langs/en.json';
import { Meta } from '../../../models';

function slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  
    return str;
};

function translateService(lang: string, translation: string) {
    if(lang == 'fi') return fi[translation];
    if(lang == 'en') return en[translation];
}

function transformTimestamp(meta: Meta, value) {
  let d = new Date(value.seconds * 1000);
  let now = new Date();
  let seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
  let minutes = Math.round(Math.abs(seconds / 60));
  let hours = Math.round(Math.abs(minutes / 60));
  let days = Math.round(Math.abs(hours / 24));
  let months = Math.round(Math.abs(days / 30.416));
  let years = Math.round(Math.abs(days / 365));
  if (Number.isNaN(seconds)) {
      return '';
  }
  else if (seconds <= 45) {
      return translateService(meta.siteConfigurations.language, 'time_pipe_1');
  }
  else if (seconds <= 90) {
      return translateService(meta.siteConfigurations.language, 'time_pipe_2');
  }
  else if (minutes <= 45) {
      return minutes + translateService(meta.siteConfigurations.language, 'time_pipe_3');
  }
  else if (minutes <= 90) {
      return translateService(meta.siteConfigurations.language, 'time_pipe_4');
  }
  else if (hours <= 22) {
      return hours + translateService(meta.siteConfigurations.language, 'time_pipe_5');
  }
  else if (hours <= 36) {
      return translateService(meta.siteConfigurations.language, 'time_pipe_6');
  }
  else if (days <= 25) {
      return days + translateService(meta.siteConfigurations.language, 'time_pipe_7');
  }
  else if (days <= 45) {
      return translateService(meta.siteConfigurations.language, 'time_pipe_8');
  }
  else if (days <= 345) {
      return months + translateService(meta.siteConfigurations.language, 'time_pipe_9');
  }
  else if (days <= 545) {
      return translateService(meta.siteConfigurations.language, 'time_pipe_10');
  }
  else {
      // (days > 545)
      return years + translateService(meta.siteConfigurations.language, 'time_pipe_11');
  }
}

function transformTimestampForUser(value) {
    let d = new Date(value.seconds * 1000);
    return d.getDate().toString() + '.' + (d.getMonth() + 1).toString() + '.' + d.getFullYear()
}



export { 
    slug, 
    transformTimestamp,
    transformTimestampForUser,
    translateService
}