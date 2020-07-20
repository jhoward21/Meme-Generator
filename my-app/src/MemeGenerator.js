import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("http://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({allMemeImg: memes })
            })
    }


    render () {
        return (
            <div>
                <form className="meme-form">
                
                <button>Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator