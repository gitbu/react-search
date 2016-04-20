/**
 * Created by dell-bo on 2016/4/19.
 */
var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",
    getInitialState: function() {
        return {
            filterText: '',
            inStockOnly: false
        };
    },
    handleUserInput: function(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },
    render : function(){
        return(
                React.createElement("div", {className: "FilterableProductTable"}, 
                    React.createElement(SearchBar, {
                        filterText: this.state.filterText, 
                        inStockOnly: this.state.inStockOnly, 
                        onUserInput: this.handleUserInput}
                    ), 
                    React.createElement(ProductTable, {
                        products: this.props.products, 
                        filterText: this.state.filterText, 
                        inStockOnly: this.state.inStockOnly}
                    )
                )
            )
    }
})
var SearchBar = React.createClass({displayName: "SearchBar",
    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    },
    render : function() {
        return (
            React.createElement("form", {className: "search"}, 
                React.createElement("div", {class: "input-group"}, 
                    React.createElement("input", {
                        type: "text", 
                        class: "form-control", 
                        placeholder: "Search for...", 
                        value: this.props.filterText, 
                        ref: "filterTextInput", 
                        onChange: this.handleChange}
                    ), 
                    React.createElement("span", {class: "input-group-btn"}, 
                        React.createElement("button", {class: "btn btn-default", type: "button"}, "Search")
                    )
                ), 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("div", {class: "checkbox"}, 
                        React.createElement("label", {for: "check"}, 
                            React.createElement("input", {
                                type: "checkbox", 
                                id: "check", 
                                checked: this.props.inStockOnly, 
                                ref: "inStockOnlyInput", 
                                onChange: this.handleChange}
                            ), " Check me out"
                        )
                    )
                )
            )
        )
    }
});
var ProductTable = React.createClass({displayName: "ProductTable",
    render : function(){
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(React.createElement(ProductCategoryRow, {category: product.category, key: product.category}));
            }
            rows.push(React.createElement(ProductRow, {product: product, key: product.name}));
            lastCategory = product.category;
        }.bind(this));
        return (
            React.createElement("div", {className: "ProductTable"}, 
                React.createElement("table", {className: "table table-bordered"}, 
                    React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "Category"), 
                        React.createElement("th", null, "Name"), 
                        React.createElement("th", null, "Price")
                    )
                    ), 
                    React.createElement("tbody", null, rows)
                )
            )    
        )
    }
})
/*var ProductCategoryRow = React.createClass({
 render : function(){
 return (

 )
 }
 })*/
var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
ReactDOM.render(
    React.createElement(FilterableProductTable, {products: PRODUCTS}),
    document.getElementById("container")
)