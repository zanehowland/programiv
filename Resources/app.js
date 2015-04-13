var win1 = Titanium.UI.createWindow({
		title:'Select Color',
		backgroundColor:'#fff'
	});

	win1.open();

var win2 = Titanium.UI.createWindow({
		title:'Select Color',
		backgroundColor:'#fff'
	});
	
var NavButton1 = Ti.UI.createButton({
title: 'Jorge Calderon: Business Management Major: University Of Idaho',
verticalAlign: 'center',
color: 'black',
width: '100%',
height: '100%',
backgroundColor: 'aqua',
font: {
fontSize: '12sp',
fontWeight: 'bold'
},
});

win1.add(NavButton1);

NavButton1.addEventListener('click', function() {
win2.open();
});

var win2 = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});

var NavButton2 = Ti.UI.createButton({
title: 'Objective: Education: Work Experience: Skills: Organizations',
color: 'black',
width: '100%',
height: '100%',
backgroundColor: 'aqua',
font: {
fontSize: '12sp',
fontWeight: 'bold'
}
});


win2.add(NavButton2);

NavButton2.addEventListener('click', function() {
Ti.API.info('Clicked Home Button');
win2.close();
});

win2.open();