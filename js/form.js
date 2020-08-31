class Form {
    constructor(){
        this.input = createInput("username:");
        this.button = createButton('play');
        this.greeting = createElement('h3');
    }
  
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}



    display(){
        var title = createElement('h2');
        title.html("GodSpeed");
        title.position(270,100);
        
        

        this.input.position(150,160);
        this.button.position(200,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

             player.name = this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("hello"+player.name);
            this.greeting.position(130,160);
        })


    }





}