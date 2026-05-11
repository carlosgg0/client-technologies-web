import { useState } from "react";

const PRODUCTS = [
    { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
    { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
    { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
    { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
    { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
    { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" }
];

export default function FilterableProductsTable() {

    const [filterText, setFilterText] = useState('');
    const [onlyStock, setOnlyStock] = useState(false);

    const filteredProducts = PRODUCTS.filter(p => {
        const matchesFilter = p.name.toLowerCase().includes(filterText.toLowerCase());
        const matchesStock = (onlyStock) ? p.stocked : true;
        return matchesFilter && matchesStock;
    });

    return (
        <>
            <SearchBar
                filterText={filterText}
                onlyStock={onlyStock}
                onFilterTextChange={setFilterText}
                onOnlyStockChange={setOnlyStock}
            />
            <ProductTable products={filteredProducts} />
        </>
    );
}

function SearchBar({ filterText, onlyStock, onFilterTextChange, onOnlyStockChange }) {
    return (
        <>
            <input
                type="text"
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
                placeholder="Buscar..."
            />
            <br />
            <input
                type="checkbox" 
                id="only-stock" 
                checked={onlyStock}
                onSelect={e => onOnlyStockChange(e.target.checked)} />
            <label htmlFor="only-stock">Mostrar solo productos en stock</label>
        </>
    );
}

function ProductTable({ products }) {

    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan='2'>{category}</th>
        </tr>
    );
}

function ProductRow({ product }) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}