function bindFormValidation()
{
  $('input#tag').change(() => { tag_validate(); });
}

function setValidityMsg(elem, msg, defaultMsg)
{
  elem[0].setCustomValidity(msg);
  elem.next('.invalid-feedback').text(msg);
  if (defaultMsg) elem.next('.invalid-feedback').text(defaultMsg);
}

//possibly remove

