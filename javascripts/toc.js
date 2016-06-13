function create_toc(){
	var toc = [];
	var article = document.querySelector('article');
	if(article){
		var list = article.querySelectorAll('*');
		for(var j= i = 0; i < list.length;i++){
			if(list[i].tagName == 'H3' || list[i].tagName == 'H2'){
				list[i].id = 'toc' + j++;
				toc.push(list[i])
			}
		}

		var ul = document.createElement('ul');
		var div_box = document.createElement('div');
		ul.appendChild(div_box);
		ul.id = "toc";
		var ul2;
		var is_first_h3 = true;
		toc.forEach(function(e,i){
			if(e.tagName == 'H2'){
				is_first_h3 = true;
				var h2 = document.createElement('li');
				h2.innerText = e.innerText;
				h2.tar = '#toc' + i;
				ul.appendChild(h2);
			}else{
				if(is_first_h3){
					is_first_h3 = false;
					ul2 = document.createElement('ul');
					ul.appendChild(ul2);
				}
				var h3 = document.createElement('li');
				h3.innerText = e.innerText;
				h3.tar = '#toc' + i;
				ul2.appendChild(h3);
			}
		})

		var parent_ele = document.querySelector('body');	
		parent_ele.appendChild(ul);

	}
}