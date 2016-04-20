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
            React.createElement("form", {className: "form-inline"}, 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {for: "search"}, "Search"), 
                    React.createElement("input", {type: "text", className: "form-control", id: "search", placeholder: "search..."})
                ), 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {for: "choose"}, "Search"), 
                    React.createElement("input", {type: "checkbox", className: "form-control", id: "choose"}), "Only show products in stock"
                )
            )
        )
    }
});
ReactDOM.render(
    React.createElement(FilterableProductTable, null),
    document.getElementById("container")
)