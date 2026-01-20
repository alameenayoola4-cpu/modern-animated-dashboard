import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Grid3X3,
    LayoutDashboard,
    Users,
    BarChart3,
    FileText,
    Settings,
    LogOut,
} from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: FileText, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
];

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <motion.aside
            className="sidebar"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <div className="sidebar-logo">
                <Grid3X3 size={24} />
                <span>Nexus.io</span>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.label}
                        className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        whileHover={{ x: 4 }}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </motion.div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="user-avatar">AY</div>
                    <div className="user-info">
                        <div className="user-name">Ayoola</div>
                        <div className="user-role">Admin Access</div>
                    </div>
                    <motion.button
                        className="logout-btn"
                        onClick={() => navigate('/login')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <LogOut size={18} />
                    </motion.button>
                </div>
            </div>
        </motion.aside>
    );
}

export default Sidebar;
