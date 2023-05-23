module.exports = [{
    name: 'compile',
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[$eval[Saida: \`$replaceText[$message;@;]$disableMentionType[all]\`];;;;all;false]
    $onlyIf[$checkContains[$toLowerCase[$message];#CHAR#eval;#CHAR#ban;#CHAR#clienttoken;#CHAR#kick;#CHAR#modify;#CHAR#clear;#CHAR#djseval;#CHAR#botleave;#CHAR#clonechannel;#CHAR#create;#CHAR#delete;#CHAR#edit;#CHAR#fetch;#CHAR#give;#CHAR#join;#CHAR#leave;#CHAR#kill;#CHAR#move;#CHAR#mute;#CHAR#remove;#CHAR#slowmode;#CHAR#old;#CHAR#bulk;#CHAR#getbotinvite;#CHAR#uri;#CHAR#vanity;#CHAR#close;#CHAR#exec;#CHAR#foreach;#CHAR#newticket;#CHAR#reboot;#CHAR#reset;#CHAR#writefile;#CHAR#setg;#CHAR#seta;#CHAR#setapplicationcommandpermissions;#CHAR#setchanneltopic;#CHAR#setclientavatar;#CHAR#setclientame;#CHAR#setguildbanner;#CHAR#setguilddiscoverysplash;#CHAR#setguildicon;#CHAR#setguildname;#CHAR#setrolecolor;#CHAR#setroleposition;#CHAR#setroles;#CHAR#setstatus;#CHAR#command;#CHAR#read;#CHAR#file;#CHAR#renamefile;#CHAR#createfile;#CHAR#appendfile;#CHAR#deletefile;#CHAR#fileExists;#CHAR#fileSize;#CHAR#readfile;#CHAR#renamefile;#CHAR#writefile;#CHAR#shutdown]!=true;Função indisponivel]
    `
}, {
    name: 'compile',
    aliases: ['run'],
    code: `
    $interactionReply[$eval[$replaceText[$message;@;]$disableMentionType[all]];;;;all;false]
    $onlyIf[$checkContains[$toLowerCase[$message];#CHAR#eval;#CHAR#ban;#CHAR#clienttoken;#CHAR#kick;#CHAR#modify;#CHAR#clear;#CHAR#djseval;#CHAR#botleave;#CHAR#clonechannel;#CHAR#create;#CHAR#delete;#CHAR#edit;#CHAR#fetch;#CHAR#give;#CHAR#join;#CHAR#leave;#CHAR#kill;#CHAR#move;#CHAR#mute;#CHAR#remove;#CHAR#slowmode;#CHAR#old;#CHAR#bulk;#CHAR#getbotinvite;#CHAR#uri;#CHAR#vanity;#CHAR#close;#CHAR#exec;#CHAR#foreach;#CHAR#newticket;#CHAR#reboot;#CHAR#reset;#CHAR#writefile;#CHAR#setg;#CHAR#seta;#CHAR#setapplicationcommandpermissions;#CHAR#setchanneltopic;#CHAR#setclientavatar;#CHAR#setclientame;#CHAR#setguildbanner;#CHAR#setguilddiscoverysplash;#CHAR#setguildicon;#CHAR#setguildname;#CHAR#setrolecolor;#CHAR#setroleposition;#CHAR#setroles;#CHAR#setstatus;#CHAR#command;#CHAR#read;#CHAR#file;#CHAR#renamefile;#CHAR#createfile;#CHAR#appendfile;#CHAR#deletefile;#CHAR#fileExists;#CHAR#fileSize;#CHAR#readfile;#CHAR#renamefile;#CHAR#writefile;#CHAR#shutdown]!=true;Função indisponivel]
    `
}];
