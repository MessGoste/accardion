import { Component } from "react";
import './comp.css'
class Box extends Component {
    componentDidMount() {
        const divHide = document.querySelectorAll('.someHideDiv')
        const upperDiv = document.querySelectorAll('.upper')
        for (let i = 0; i < divHide.length; i++) {
            upperDiv[i].addEventListener('click', e => {
                this.makeWork(divHide[i])
            })
        }
    }
    makeWork(divHide) {
        divHide.removeAttribute('class', "someHideDiv")
        divHide.setAttribute('class', "hideDiv")

        console.log(divHide)
    }
    render() {


        return <>
            <div className="upper">
                <p>{this.props.upperTxT}</p>
                
            </div>
            <div className="someHideDiv" onClick>
                {this.props.hideTxT}
            </div></>
    }
}
export default Box