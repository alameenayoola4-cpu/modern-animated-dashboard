import { motion } from 'framer-motion';
import { Search, Bell, FileText } from 'lucide-react';

function Header() {
    return (
        <motion.header
            className="header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
        >
            <div className="header-left">
                <h1>Welcome back, Ayoola</h1>
                <p>Here is what's happening with your portfolio today.</p>
            </div>

            <div className="header-right">
                <div className="search-bar">
                    <Search size={18} />
                    <input type="text" placeholder="Search data..." />
                </div>

                <motion.button
                    className="notification-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Bell size={20} />
                    <span className="notification-badge">3</span>
                </motion.button>

                <motion.button
                    className="reports-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <FileText size={18} />
                    Reports
                </motion.button>
            </div>
        </motion.header>
    );
}

export default Header;
