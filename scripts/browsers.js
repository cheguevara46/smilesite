var agent = navigator.userAgent.toLowerCase();
if (agent.indexOf("firefox") != -1) 
    document.write('<link rel="stylesheet" href="css/style_ff.css" type="text/css">');
else if (agent.indexOf('msie') != -1) 
    document.write('<link rel="stylesheet" href="css/style_ie7.css" type="text/css">');
else if(agent.indexOf('opera') != -1)
    document.write('<link rel="stylesheet" href="css/style_op.css" type="text/css">');
else if(agent.indexOf('chrome') != -1)
    document.write('<link rel="stylesheet" href="css/style_ch.css" type="text/css">');
else if(agent.indexOf('safari') != -1)
    document.write('<link rel="stylesheet" href="css/style_saf.css" type="text/css">');	
else
    document.write('<link rel="stylesheet" href="css/style.css" type="text/css">');