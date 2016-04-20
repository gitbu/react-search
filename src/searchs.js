/**
 * Created by dell-bo on 2016/4/19.
 */
var FilterableProductTable = React.createClass({
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
                <div className="FilterableProductTable">
                    <SearchBar
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                        onUserInput={this.handleUserInput}
                    />
                    <ProductTable
                        products={this.props.products}
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                    />var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
        if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    }.bind(this));
                </div>
            )
    }
})
var SearchBar = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    },
    render : function() {
        return (
            <form className="search">
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search for..."
                        value={this.props.filterText}
                        ref="filterTextInput"
                        onChange={this.handleChange}
                    />
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Search</button>
                    </span>
                </div>
                <div className="form-group">
                    <div class="checkbox">
                        <label for="check">
                            <input
                                type="checkbox"
                                id="check"
                                checked={this.props.inStockOnly}
                                ref="inStockOnlyInput"
                                onChange={this.handleChange}
                            /> Check me out
                        </label>
                    </div>
                </div>
            </form>
        )
    }
});
var ProductTable = React.createClass({
    render : function(){
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        }.bind(this));
        return (
            <div className="ProductTable">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>    
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
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById("container")
)