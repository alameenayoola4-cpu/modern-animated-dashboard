import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { revenueData } from '../data/data';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    background: '#1c2128',
                    border: '1px solid #30363d',
                    borderRadius: '8px',
                    padding: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
            >
                <p style={{ color: '#8b949e', fontSize: '12px', marginBottom: '4px' }}>
                    {label}
                </p>
                <p style={{ color: '#2dd4bf', fontSize: '16px', fontWeight: '600' }}>
                    ${payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

function RevenueChart() {
    return (
        <motion.div
            className="chart-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <div className="chart-header">
                <div className="chart-title">
                    <h3>Revenue Trends</h3>
                    <p>Total revenue growth over the last 30 days</p>
                </div>
                <button className="chart-period">
                    Last 30 Days
                    <ChevronDown size={16} />
                </button>
            </div>

            <div style={{ width: '100%', height: 280 }}>
                <ResponsiveContainer>
                    <AreaChart data={revenueData}>
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#30363d"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6e7681', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6e7681', fontSize: 12 }}
                            tickFormatter={(value) => `$${value / 1000}k`}
                            dx={-10}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#2dd4bf"
                            strokeWidth={3}
                            fill="url(#colorRevenue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}

export default RevenueChart;
