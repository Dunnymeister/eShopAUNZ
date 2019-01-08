// Make sure we have access to the nsuids object
if (typeof nsuids !== 'undefined')
{
	na_messages[0].price.text_including_tax = "inc. GST";
	var nsuid = nsuids[0].nsuid;
	$("[data-price-box='info']").prepend("<p><span class='aunz-primary'>!</span>eShop AUNZ Access</p><div data-price-box='purchase_btn' class='row price-box-item'><a href='https://ec.nintendo.com/title_purchase_confirm?title=" + nsuid + "'>Proceed to purchase</a></div><p>This page has been successfully modified by the eShopAUNZ Browser Extension.</p>")
}