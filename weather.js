var inputValue=document.querySelector("#search_box");	
var button=document.querySelector('#search_button');
var name_1=document.querySelector('#thrones');
var region_name=document.querySelector('#thrones_2');
const games_thrones=document.getElementById('game_of_thrones');
const names_of_the_thrones=[{}]

button.addEventListener('click',function(){
	fetch("https://anapioficeandfire.com/api/houses/"+inputValue.value)
	.then(res=>res.json())
	.then((data)=>{
		var name_2=data['name'];
		var region=data['region'];
		name_1.innerHTML=name_2;
		region_name.innerHTML=region;
	})
})

const fetchthrones=()=>{
	const promises=[];
	for(var x=1;x<=387;x++)
	{
		const url=`https://anapioficeandfire.com/api/houses/${x}`
		promises.push(fetch(url).then((res)=>res.json()));
	}
	Promise.all(promises).then(results=>{
		const Thrones=results.map((data)=>({
			name:data.name
		}))
		displaythrones(Thrones);
	})
}
function displaythrones(Thrones)
{
	console.log(Thrones);
	const thronesHTMLString=Thrones.map(t=>`
		<li class="names_list">
			<p class="display_names">${t.name}</p>
		</li>`)
	.join("");
	games_thrones.innerHTML=thronesHTMLString;
}
fetchthrones();
$(document).ready(function(){
	$('.name_list').hide(function(){
		$('#show_content').click(function(){
			$('.name_list').show();
		})
	});
	$('#hide_content').click(function(){
		$('.name_list').hide();
	});
	$('#hi').hide();
	$('#search_button').click(function(){
		$('#hi').show();
	});
});
	



