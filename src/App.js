import React from 'react';
import $ from 'jquery';

export default class App extends React.Component {

    componentDidMount() {
        $('<h1/>')
            .text("Hello world from JQuery")
            .css({
                textAlign: "center"
            })
            .appendTo($('header'));

        $('<h2/>')
            .text("Title 2")
            .appendTo('.h2');
    }

    render() {
        return (
            <React.Fragment>
                <header></header> 
                <hr />
                <div className = "box">
                    <h2 className = "box-title" > Box title </h2>  
                    <p className = "box-text" > Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus reprehenderit, optio iure exercitationem quos molestias nobis, mollitia minus unde, maxime accusamus perferendis nostrum vitae dolorem.Asperiores, neque ? Quod, nesciunt soluta voluptatum, optio neque blanditiis commodi impedit molestiae modi ipsa ratione nihil libero omnis alias saepe nobis cum maiores ab qui.Accusamus, dolorem numquam delectus obcaecati unde eos ipsam doloribus totam cupiditate iste exercitationem dolor nemo rerum autem maiores minus quam officiis facere modi illum blanditiis omnis asperiores repellat ? Aspernatur delectus nostrum vel velit repellendus architecto enim quisquam, dolor dolorem accusamus assumenda similique, vero dolorum ex minus temporibus autem repudiandae beatae. </p> 
                </div>
            </React.Fragment>
        )
    }
}