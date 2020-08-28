class Form {
    constructor(){

    }
  
    display(){
        var title = createElement('h2');
        title.html("GodSpeed");
        title.position(270,100);
        
        var input = createInput("username:");
        var button = createButton('play');

        input.position(150,160);
        button.position(200,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("hello"+name);
            greeting.position(130,160);
        })


    }





}