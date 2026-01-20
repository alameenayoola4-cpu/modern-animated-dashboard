import { motion } from 'framer-motion';
import { topProducts } from '../data/data';

function TopProducts() {
    return (
        <motion.div
            className="products-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
        >
            <div className="products-header">
                <h3>Top Performing</h3>
            </div>

            {topProducts.map((product, index) => (
                <motion.div
                    key={product.id}
                    className="product-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                >
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-info">
                        <div className="product-name">{product.name}</div>
                        <div className="product-sales">{product.sales.toLocaleString()} sales</div>
                    </div>
                    <div className="product-stats">
                        <div className="product-revenue">{product.revenue}</div>
                        <div className={`product-change ${product.positive ? 'positive' : 'negative'}`}>
                            {product.change}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default TopProducts;
