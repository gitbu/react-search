/**
 * Created by dell-bo on 2016/4/19.
 */
var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",
    render : function(){
        return(
                React.createElement("div", {className: "ProductTable"}, 
                    "fsadf"
                )
            )
    }
})
ReactDOM.render(
    React.createElement(FilterableProductTable, null),
    document.getElementById("container")
)