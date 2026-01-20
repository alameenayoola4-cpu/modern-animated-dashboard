import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import TrafficChart from '../components/TrafficChart';
import TransactionsTable from '../components/TransactionsTable';
import TopProducts from '../components/TopProducts';
import { statsData } from '../data/data';

function Dashboard() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="main-content">
                <Header />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Stats Cards */}
                    <div className="stats-grid">
                        {statsData.map((stat, index) => (
                            <StatCard key={stat.id} stat={stat} index={index} />
                        ))}
                    </div>

                    {/* Charts Section */}
                    <div className="charts-grid">
                        <RevenueChart />
                        <TrafficChart />
                    </div>

                    {/* Bottom Section */}
                    <div className="bottom-grid">
                        <TransactionsTable />
                        <TopProducts />
                    </div>
                </motion.div>
            </main>
        </div>
    );
}

export default Dashboard;
