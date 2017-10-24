// declare an array
let obj = [
    {name:"apple"},
    {name:"orange"},
    {name:"banana"},
    {name:"pineapple"}
];

// iteration with of
let i = 0;
for(foo of obj) {
    foo.id = i;
    i++;
}

// iteration with map
obj.map(function(elem){
    console.log(elem);
});
