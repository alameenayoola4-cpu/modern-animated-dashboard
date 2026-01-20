import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Users, UserPlus, Target } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const iconMap = {
    revenue: DollarSign,
    users: Users,
    signups: UserPlus,
    conversion: Target,
};

function StatCard({ stat, index }) {
    const Icon = iconMap[stat.icon];

    const sparklineData = stat.sparkline.map((value, i) => ({ value }));

    return (
        <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
        >
            <div className="stat-header">
                <div className={`stat-icon ${stat.iconColor}`}>
                    <Icon size={22} />
                </div>
                <div className={`stat-trend ${stat.positive ? 'positive' : 'negative'}`}>
                    {stat.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {stat.trend}
                </div>
            </div>

            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>

            <div className="stat-sparkline">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData}>
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke={stat.positive ? '#2dd4bf' : '#f85149'}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}

export default StatCard;
