
// We have our cells 
// current players rotation 
// 

class Board {
    constructor(){
        this.cell = ['','','','','','','','','',''] 
        this.player = "X"
        this.isOver = false 
        
        this.squares = document.querySelectorAll(".box")
        this.newGameBtn = document.querySelector(".button")


        this.bind() 
    } 

    bind() {
        this.squares.forEach((sqaure)=>{
            sqaure.addEventListener("click", () => {
                // we need to read the cell as its being targeted with the click 
                this.rules(Number(sqaure.dataset.index)) 
            })

            this.newGameBtn.addEventListener("click", ()=>{
                this.newGame()
            })
        })
    }
    
    rules(index){
        if(this.isOver || this.cell[index]!==""){
            return
        } 
    }

    newGame(){
        this.cell = ['','','','','','','','','','']
        this.player = "X"
        this.isOver = false 
    }
}
