const yen = $('label:contains(Tuesday 9am)')
const zaid = $("label:contains(Tuesday 9am)")
yen.click(function(){
for (let i = 0; i < 2 ; i++  ){
if (yen[i].children[0].checked){
for (i = 0; i <= 1 ; i++  )
yen[i].children[0].disabled = true
console.log($(this.children))
$(this.children).prop('disabled', false)

} else if(!yen[i].children[0].checked){
  for (let i = 0; i <= 1 ; i++  )
  yen[i].children[0].disabled = false
}
}
}
)
