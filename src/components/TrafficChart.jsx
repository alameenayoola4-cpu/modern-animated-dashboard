import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { trafficData } from '../data/data';

function TrafficChart() {
    const total = trafficData.reduce((acc, item) => acc + item.value, 0);
    const displayedData = trafficData.filter((item) => item.name !== 'Other');

    return (
        <motion.div
            className="chart-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <div className="chart-header">
                <div className="chart-title">
                    <h3>Traffic Sources</h3>
                    <p>Distribution of site visits</p>
                </div>
            </div>

            <div className="traffic-chart-container" style={{ height: 200, position: 'relative' }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={trafficData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={3}
                            dataKey="value"
                            stroke="none"
                        >
                            {trafficData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="traffic-center-text">
                    <div className="value">12.4k</div>
                    <div className="label">Visitors</div>
                </div>
            </div>

            <div className="traffic-legend">
                {displayedData.map((item, index) => (
                    <motion.div
                        key={item.name}
                        className="legend-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                    >
                        <div className="legend-left">
                            <div
                                className="legend-dot"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="legend-label">{item.name}</span>
                        </div>
                        <span className="legend-value">{item.value}%</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default TrafficChart;
