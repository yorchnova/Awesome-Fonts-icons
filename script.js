var template_path = Qva.Remote + "?public=only&name=Extensions/font-awesome-icons/";

//Path to css extension
Qva.LoadCSS('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css');
Qv.AddExtension("font-awesome-icons", function(){

	//variables for icon, size and color
	var icon=this.Layout.Text0.text ? this.Layout.Text0.text : 'fa fa-bar-chart';
	var size=this.Layout.Text1.text ? this.Layout.Text1.text : '40';
	var color=this.Layout.Text2.text ? this.Layout.Text2.text : '#000';
	var box=this.Layout.Text3.text ? this.Layout.Text3.text : '#777';
	
	// Inside de extension "this" points to the extension object
	this.Element.innerHTML = '<i style="font-size:'+size+'px;padding:10px;color:'+color+';background:'+box+'" class="'+icon+'"></i>';
});