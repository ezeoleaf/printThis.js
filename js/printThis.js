function printThis()
{
	var textToPrint = '';

	var printContents = document.getElementsByClassName('printThis');
	var originalContents = document.body.innerHTML;

	if(printContents.length > 0)
	{
		for(var i = 0; i < printContents.length; i++)
		{
			textToPrint += printContents[i].innerHTML;
			if(i < printContents.length - 1)
				textToPrint += '<br>';
		}

		document.body.innerHTML = textToPrint;

		window.print();
	}

	document.body.innerHTML = originalContents;
}