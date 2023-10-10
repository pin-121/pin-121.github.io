
function blockText (element, list)
{
	if(element.style.display == "")
	{
		element = list[0];
	}
	
	for(let i = 0; i < list.length; i++)
	{
		list[i].style.display = "none";
	}
	element.style.display = "";
}



var ListWe = []

function onloadBlock()
{
	ListWe = [
		ListNone,
		ListErmilov,
		ListAntipin,
		ListZubova,
		ListKarpov,
		ListKokurin,
		ListEsinN,
		ListEsinI,
		ListReshenskov,
		ListFilin,
		ListGlazunov,
	];
}

