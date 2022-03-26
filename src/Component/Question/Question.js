import React from 'react';

const Question = () => {
    return (
        <div>
            <article>
                <h2>How React Work</h2>
                <p>Two  packages are needed for work React.First is react and second is react DOM.when we write component this component is pure javaScript code.So whatever we write component this component is function or class in pure javascript.We need to convert JavaScript code in html code.Whatever we see in web page this is html code.so javaScript code convert to html code use react packages.React automatic convert Javascript code to html.Now work is html code Showing in browser.React automatic convert Javascript code to html.Now need to html code inject in html file.so using React Dom inject html code into html file.this hole process going without page reload .so without page reload dynamick html code generate html file or DOM.For this reason react work instenly and fast.</p>
            </article>
            <article>
                <h2>Props VS State</h2>
                <h5>Props</h5>
                <ul>
                    <li>Props are immutable</li>
                    <li>Props allow you to pass data from one component to other components as an argument.</li>
                    <li>Props are read-only.</li>
                    <li>Props can be accessed by the child component..</li>
                </ul>
                <h5>State</h5>
                <ul>
                    <li>State are mutable</li>
                    <li>State holds information about the component</li>
                    <li>State changes can be asynchronous.</li>
                    <li>State cannot be accessed by child components.</li>
                </ul>

            </article>
        </div>
    );
};

export default Question;