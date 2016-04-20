/**
 * Created by dell-bo on 2016/4/19.
 */
var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",
    render : function(){
        return(
                React.createElement("div", {className: "ProductTable"}, 
                    React.createElement(SearchBar, null)
                )
            )
    }
})
var SearchBar = React.createClass({displayName: "SearchBar",
    render : function() {
        return (
            React.createElement("form", {action: ""}, 
                React.createElement("input", {type: "text", placeholder: "search......"}), 
                React.createElement("p", null, 
                    React.createElement("input", {type: "checkbox"})
                )

            )

        )
    }
});
ReactDOM.render(
    React.createElement(FilterableProductTable, null),
    document.getElementById("container")
)