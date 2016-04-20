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
                    React.createElement("label", {for: "search"}, 
                        React.createElement("input", {type: "text", className: "form-control", id: "search", placeholder: "search..."}), 
                        React.createElement("span", {class: "input-group-btn"}, 
                            React.createElement("button", {class: "btn btn-default", type: "button"}, "Search")
                        )
                    )
                ), 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("div", {class: "checkbox"}, 
                        React.createElement("label", {for: "check"}, 
                            React.createElement("input", {type: "checkbox", id: "check"}), " Check me out"
                        )
                    )
                )
            )
        )
    }
});
ReactDOM.render(
    React.createElement(FilterableProductTable, null),
    document.getElementById("container")
)